type ArticleJsonLdProps = {
  description: string;
  image?: string;
  inLanguage?: string;
  publishedAt?: string;
  title: string;
  url: string;
};

export function toIsoDate(value?: string) {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export function ArticleJsonLd({
  description,
  image,
  inLanguage,
  publishedAt,
  title,
  url,
}: ArticleJsonLdProps) {
  const date = toIsoDate(publishedAt);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(date ? { datePublished: date, dateModified: date } : {}),
    author: { "@type": "Person", name: "David Tarazona", url: "https://www.linkedin.com/in/davidtarazona/" },
    publisher: { "@type": "Organization", name: "FinTara", url: new URL(url).origin },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(inLanguage ? { inLanguage } : {}),
    ...(image ? { image } : {}),
  };

  // Escape "<" so content cannot terminate the JSON-LD script element.
  const serialized = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}
