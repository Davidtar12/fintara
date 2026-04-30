type Lang = "en" | "es";

const COPY: Record<Lang, { name: string; bio: string; cta: string; ctaHref: string }> = {
  en: {
    name: "David Tarazona",
    bio: "Investigative journalist (13 years) turned finance writer. MA Communication Studies (Netherlands). Co-founded one of Colombia's top news outlets. Tracing how money, incentives, and market structure actually work — without the guru noise.",
    cta: "Read more about FinTara →",
    ctaHref: "/",
  },
  es: {
    name: "David Tarazona",
    bio: "Periodista de investigación (13 años) escribiendo sobre finanzas. MA Communication Studies (Países Bajos). Cofundador de uno de los principales medios independientes de Colombia. Rastreo cómo funcionan realmente el dinero, los incentivos y la estructura de mercado — sin ruido de gurú.",
    cta: "Conoce más sobre FinTara →",
    ctaHref: "/es",
  },
};

export function AuthorBio({ lang = "en" }: { lang?: Lang }) {
  const c = COPY[lang];
  return (
    <aside className="mt-16 flex gap-5 rounded-2xl border border-[#d8cfbd] bg-[#f4efe6]/60 p-6">
      <img
        src="/david-tarazona.webp"
        alt="David Tarazona"
        width={88}
        height={88}
        className="h-22 w-22 flex-shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-[#214236]">{c.name}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{c.bio}</p>
        <a
          href={c.ctaHref}
          className="mt-3 inline-block text-sm font-semibold text-[#2e8b57] hover:text-[#214236]"
        >
          {c.cta}
        </a>
      </div>
    </aside>
  );
}
