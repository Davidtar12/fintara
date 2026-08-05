import type { ReactNode } from "react";

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const OUTER_EMPHASIS = /^(\*{1,3}|_{1,3})([\s\S]*)\1$/;

function stripOuterEmphasis(value: string) {
  const trimmed = value.trim();
  const match = trimmed.match(OUTER_EMPHASIS);
  return match ? match[2].trim() : trimmed;
}

function isSafeExternalUrl(value: string) {
  try {
    const protocol = new URL(value).protocol;
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
}

function renderMarkdownLinks(value: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  MARKDOWN_LINK.lastIndex = 0;
  while ((match = MARKDOWN_LINK.exec(value))) {
    const index = match.index;
    const [markdown, label, href] = match;

    if (index > lastIndex) nodes.push(value.slice(lastIndex, index));

    if (isSafeExternalUrl(href)) {
      nodes.push(
        <a key={`${href}-${index}`} href={href} target="_blank" rel="noopener noreferrer" className="underline">
          {label}
        </a>
      );
    } else {
      nodes.push(markdown);
    }

    lastIndex = index + markdown.length;
  }

  if (lastIndex < value.length) nodes.push(value.slice(lastIndex));
  return nodes.length ? nodes : [value];
}

export function AttributionLine({ attribution }: { attribution: string }) {
  return (
    <p className="mt-2 text-right text-xs text-slate-400">
      {renderMarkdownLinks(stripOuterEmphasis(attribution))}
    </p>
  );
}
