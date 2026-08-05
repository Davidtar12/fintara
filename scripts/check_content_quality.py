from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1] / "content" / "blog"
OWNED_R2_INFOGRAPHIC_HOST = "pub-decbec0c512249f48e448a8a38955480.r2.dev"
OWNED_R2_INFOGRAPHIC_PATH = "/pinterest/"
PATTERNS = [
    (re.compile(r"(?i)visual context for:|contexto visual para:"), "prompt caption residue"),
    (re.compile(r"(?i)\bfor body\d+\b|\bpara body\d+\b|\bfor cover\b|\bpara la cobertura\b"), "slot caption residue"),
    (re.compile(r"\b(BBRK-A|RRTX|BBUD|DDDOG|RROST|DDXCM)\b"), "garbled tickers"),
]

FRONTMATTER = re.compile(r"\A---\s*\n(?P<content>.*?)\n---(?:\s*\n|\Z)", re.DOTALL)
FRONTMATTER_FIELD = re.compile(r"^(?P<key>[A-Za-z][\w-]*):\s*(?P<value>.*)$", re.MULTILINE)
MARKDOWN_IMAGE = re.compile(r"^\s*!\[[^\]]*\]\((?P<url>https?://[^\s)]+)(?:\s+[^)]*)?\)\s*$")
MARKDOWN_LINK = re.compile(r"\[[^\]]+\]\(https?://[^)]+\)")
# Captions that start with the attribution phrase alone (no contextual text before it).
# Matched against the plain-text form of the caption (markdown links stripped to their label).
_ATTRIBUTION_START_RE = re.compile(
    r"^(?:photo by|foto de)\b|^[^\n]+,\s*(?:via|vía)\s+wikimedia commons",
    re.IGNORECASE,
)


def frontmatter_values(text: str) -> dict[str, str]:
    match = FRONTMATTER.match(text)
    if not match:
        return {}

    values: dict[str, str] = {}
    for field in FRONTMATTER_FIELD.finditer(match.group("content")):
        value = field.group("value").strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
            value = value[1:-1]
        values[field.group("key")] = value
    return values


def is_remote_url(value: str) -> bool:
    return urlparse(value).scheme in {"http", "https"}


def is_owned_r2_infographic(value: str) -> bool:
    parsed = urlparse(value)
    return (
        parsed.scheme == "https"
        and parsed.hostname == OWNED_R2_INFOGRAPHIC_HOST
        and parsed.path.startswith(OWNED_R2_INFOGRAPHIC_PATH)
    )


def has_attribution_caption(line: str) -> bool:
    value = line.strip()
    if not (len(value) >= 3 and value[0] in "*_" and value[-1] == value[0] and bool(MARKDOWN_LINK.search(value))):
        return False
    # Strip outer emphasis markers
    inner = re.sub(r"^[*_]+|[*_]+$", "", value).strip()
    # An em/en-dash separator is the canonical contextual-text + attribution format.
    # Require at least 2 words before the separator to reject degenerate output like "None — ...".
    em_match = re.search(r"\s[\u2013\u2014]\s", inner)
    if em_match:
        prefix = inner[: em_match.start()].strip()
        return len(prefix.split()) >= 2
    # No em-dash: flatten markdown links and reject pure attribution starts
    inner_plain = re.sub(r"\[([^\]]+)\]\(https?://[^)]+\)", r"\1", inner)
    return not bool(_ATTRIBUTION_START_RE.match(inner_plain))


def validate_mdx_text(text: str) -> list[str]:
    """Validate image policy without changing content or fabricating captions."""
    issues: list[str] = []
    frontmatter = frontmatter_values(text)
    cover_image = frontmatter.get("coverImage", "")

    if not cover_image:
        issues.append("missing coverImage")
    elif is_remote_url(cover_image) and not is_owned_r2_infographic(cover_image):
        if not frontmatter.get("coverImageAttribution", ""):
            issues.append("missing coverImageAttribution for third-party cover")

    lines = text.splitlines()
    for index, line in enumerate(lines):
        match = MARKDOWN_IMAGE.match(line)
        if not match or is_owned_r2_infographic(match.group("url")):
            continue

        caption = lines[index + 1] if index + 1 < len(lines) else ""
        if not has_attribution_caption(caption):
            issues.append(f"missing Markdown caption/attribution for third-party image at line {index + 1}")

    return issues


def check_content(root: Path = ROOT) -> list[str]:
    bad: list[str] = []
    for path in root.rglob("*.mdx"):
        text = path.read_text(encoding="utf-8", errors="replace")
        for cre, label in PATTERNS:
            if cre.search(text):
                bad.append(f"{path.relative_to(root.parent.parent)}: {label}")
                break
        for issue in validate_mdx_text(text):
            bad.append(f"{path.relative_to(root.parent.parent)}: {issue}")
    return bad


def main() -> int:
    files = list(ROOT.rglob("*.mdx"))
    bad = check_content()
    if bad:
        print("CONTENT QUALITY GATE FAILED:")
        for line in bad[:40]:
            print(" -", line)
        if len(bad) > 40:
            print(f" ... and {len(bad)-40} more")
        return 1
    print(f"content quality ok ({len(files)} mdx files)")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
