from __future__ import annotations
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "content" / "blog"
PATTERNS = [
    (re.compile(r"(?i)visual context for:|contexto visual para:"), "prompt caption residue"),
    (re.compile(r"(?i)\bfor body\d+\b|\bpara body\d+\b|\bfor cover\b|\bpara la cobertura\b"), "slot caption residue"),
    (re.compile(r"\b(BBRK-A|RRTX|BBUD|DDDOG|RROST|DDXCM)\b"), "garbled tickers"),
]

def main() -> int:
    files = list(ROOT.rglob("*.mdx"))
    bad = []
    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        for cre, label in PATTERNS:
            if cre.search(text):
                bad.append(f"{path.relative_to(ROOT.parent.parent)}: {label}")
                break
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
