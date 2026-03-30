"use client";

import Link from "next/link";
import { BLOG_CONTENT, type BlogPost, type Language } from "./blog-content";

type SignalBlock = {
  label: string;
  value: string;
  detail: string;
  tone: "gold" | "green";
};

type HomeContent = {
  navArticles: string;
  navDavid: string;
  navNewsletter: string;
  navNewsletterHref: string;
  navEnglish: string;
  navSpanish: string;
  heroEyebrow: string;
  heroStatement: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  editorialLine: string;
  principles: string[];
  brandPromiseLabel: string;
  brandPromiseTitle: string;
  brandPromiseBody: string;
  latestEyebrow: string;
  latestTitle: string;
  latestAll: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutLink: string;
  newsletterEyebrow: string;
  newsletterTitle: string;
  newsletterBody: string;
  newsletterPrimaryCta: string;
  newsletterSecondaryCta: string;
  footerDisclaimer: string;
  featuredPosts: BlogPost[];
  signalBlocks: SignalBlock[];
};

function FinTaraInlineWordmark() {
  return (
    <div className="brand-wordmark-inline" aria-label="FinTara logo">
      <span>FINTARA</span>
    </div>
  );
}

function FinTaraWordmark() {
  return (
    <div className="brand-wordmark" aria-label="FinTara logo">
      <span className="brand-wordmark-line">FIN</span>
      <span className="brand-wordmark-line">TARA</span>
    </div>
  );
}

const CONTENT: Record<Language, HomeContent> = {
  en: {
    navArticles: "Articles",
    navDavid: "David",
    navNewsletter: "The Signal",
    navNewsletterHref: "#newsletter",
    navEnglish: "EN",
    navSpanish: "ES",
    heroEyebrow: "Finance, power, and market judgment",
    heroStatement: "Data, perspective, and qualitative insight in the same analysis.",
    heroBody:
      "FinTara is where David Tarazona writes about investing, incentives, financial power, and market structure. The point is not to separate the math from the judgment. The point is to combine evidence, interpretation, and clear qualitative insight while staying honest about uncertainty.",
    primaryCta: "Join The Signal",
    secondaryCta: "Read recent analysis",
    editorialLine: "Editorial line",
    principles: [
      "Evidence and judgment in the same frame",
      "Quantitative and qualitative insight together",
      "Tools with real-world trade-offs",
      "Clear no-financial-advice boundary",
    ],
    brandPromiseLabel: "Brand promise",
    brandPromiseTitle: "Evidence, interpretation, and spine.",
    brandPromiseBody:
      "This is not financial advice. It is analysis with a point of view, backed by evidence, qualitative judgment, and explicit trade-offs.",
    latestEyebrow: "Latest analysis",
    latestTitle: "Recent pieces",
    latestAll: "View all articles",
    aboutEyebrow: "About the author",
    aboutTitle: "David Tarazona",
    aboutParagraphs: [
      "David is an investigative journalist and media founder who spent over a decade tracing offshore structures, corruption networks, and the incentives behind power.",
      "FinTara brings that same lens to investing: fewer slogans, more structure; fewer generic tips, more clarity about what matters and why.",
    ],
    aboutLink: "Follow David on LinkedIn",
    newsletterEyebrow: "Newsletter",
    newsletterTitle: "The Signal",
    newsletterBody:
      "FinTara's own email newsletter: a weekly signal on markets, incentives, and financial power. Separate from Off the Record on LinkedIn. Not financial advice.",
    newsletterPrimaryCta: "Email signup coming soon",
    newsletterSecondaryCta: "Read Off the Record on LinkedIn",
    footerDisclaimer: "Analysis only, not financial advice.",
    featuredPosts: BLOG_CONTENT.en,
    signalBlocks: [
      {
        label: "Angle",
        value: "Markets + power",
        detail: "Finance through incentives, systems, and structure.",
        tone: "gold",
      },
      {
        label: "Style",
        value: "Evidence with a point of view",
        detail: "Numbers, context, and qualitative judgment working together.",
        tone: "green",
      },
      {
        label: "Boundary",
        value: "Not financial advice",
        detail: "Clear analysis, explicit uncertainty, no fake certainty.",
        tone: "gold",
      },
    ],
  },
  es: {
    navArticles: "Artículos",
    navDavid: "David",
    navNewsletter: "The Signal",
    navNewsletterHref: "#newsletter",
    navEnglish: "EN",
    navSpanish: "ES",
    heroEyebrow: "Finanzas, poder y criterio de mercado",
    heroStatement: "Datos, perspectiva e intuición cualitativa en el mismo análisis.",
    heroBody:
      "FinTara es donde David Tarazona escribe sobre inversión, incentivos, poder financiero y estructura de mercado. La idea no es separar los números del criterio. La idea es combinar evidencia, interpretación y lectura cualitativa con honestidad sobre la incertidumbre.",
    primaryCta: "Entrar a The Signal",
    secondaryCta: "Leer análisis recientes",
    editorialLine: "Línea editorial",
    principles: [
      "Evidencia y criterio en el mismo marco",
      "Insight cuantitativo y cualitativo juntos",
      "Herramientas con trade-offs reales",
      "Límite claro: no es asesoría financiera",
    ],
    brandPromiseLabel: "Promesa de marca",
    brandPromiseTitle: "Evidencia, interpretación y carácter.",
    brandPromiseBody:
      "Esto no es asesoría financiera. Es análisis con punto de vista, respaldado por evidencia, juicio cualitativo y trade-offs explícitos.",
    latestEyebrow: "Análisis reciente",
    latestTitle: "Piezas recientes",
    latestAll: "Ver todos los artículos",
    aboutEyebrow: "Sobre el autor",
    aboutTitle: "David Tarazona",
    aboutParagraphs: [
      "David es periodista de investigación y fundador de medios. Pasó más de una década siguiendo estructuras offshore, redes de corrupción e incentivos de poder.",
      "FinTara lleva esa misma mirada al mundo de la inversión: menos slogans, más estructura; menos consejos genéricos, más claridad sobre qué importa y por qué.",
    ],
    aboutLink: "Seguir a David en LinkedIn",
    newsletterEyebrow: "Newsletter",
    newsletterTitle: "The Signal",
    newsletterBody:
      "El newsletter propio de FinTara por email: una señal semanal sobre mercados, incentivos y poder financiero. Separado de Off the Record en LinkedIn. No es asesoría financiera.",
    newsletterPrimaryCta: "Signup por email pronto",
    newsletterSecondaryCta: "Leer Off the Record en LinkedIn",
    footerDisclaimer: "Análisis, no asesoría financiera.",
    featuredPosts: BLOG_CONTENT.es,
    signalBlocks: [
      {
        label: "Ángulo",
        value: "Mercados + poder",
        detail: "Finanzas desde incentivos, sistemas y estructura.",
        tone: "gold",
      },
      {
        label: "Estilo",
        value: "Evidencia con punto de vista",
        detail: "Números, contexto y juicio cualitativo trabajando juntos.",
        tone: "green",
      },
      {
        label: "Límite",
        value: "No es asesoría financiera",
        detail: "Análisis claro, incertidumbre explícita, cero falsa certeza.",
        tone: "gold",
      },
    ],
  },
};

export function HomePageShell({ language }: { language: Language }) {
  const content = CONTENT[language];
  const isSpanish = language === "es";

  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href={isSpanish ? "/es" : "/"} className="flex items-center gap-3">
            <div className="hidden sm:block"><FinTaraInlineWordmark /></div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f3b2f] text-xs font-bold text-[#e8d8a8] sm:hidden">
              FT
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href={isSpanish ? "/es/blog" : "/blog"} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {content.navArticles}
            </Link>
            <a
              href="https://www.linkedin.com/in/davidtarazona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {content.navDavid}
            </a>
            <div className="flex items-center rounded-full border border-[#d8cfbd] bg-white/60 p-1 text-xs font-semibold text-slate-600">
              <Link href="/" className={`rounded-full px-3 py-1.5 ${!isSpanish ? "bg-[#001f3f] text-white" : "hover:text-slate-900"}`}>
                {content.navEnglish}
              </Link>
              <Link href="/es" className={`rounded-full px-3 py-1.5 ${isSpanish ? "bg-[#001f3f] text-white" : "hover:text-slate-900"}`}>
                {content.navSpanish}
              </Link>
            </div>
            <Link
              href={`${isSpanish ? "/es" : "/"}${content.navNewsletterHref}`}
              className="rounded-full bg-[#001f3f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#001735]"
            >
              {content.navNewsletter}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#d8cfbd] bg-[radial-gradient(circle_at_top_left,_rgba(46,139,87,0.14),_transparent_22%),radial-gradient(circle_at_top_center,_rgba(212,175,55,0.14),_transparent_30%),linear-gradient(180deg,_#07162f_0%,_#001f3f_100%)] text-white">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d7f3dd]">
                {content.heroEyebrow}
              </p>
              <div className="max-w-3xl">
                <FinTaraWordmark />
              </div>
              <p className="mt-8 max-w-2xl text-xl font-medium leading-9 text-slate-200 md:text-2xl">
                {content.heroStatement}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {content.heroBody}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${isSpanish ? "/es" : "/"}#newsletter`}
                  className="inline-flex items-center justify-center rounded-full bg-[#2e8b57] px-6 py-3 text-sm font-semibold text-white hover:bg-[#256f46]"
                >
                  {content.primaryCta}
                </Link>
                <Link
                  href={isSpanish ? "/es/blog" : "/blog"}
                  className="inline-flex items-center justify-center rounded-full border border-[#7bb28f]/60 px-6 py-3 text-sm font-semibold text-white hover:border-[#9cdbb2]"
                >
                  {content.secondaryCta}
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d7f3dd]">
                {content.editorialLine}
              </p>
              <ul className="mt-6 space-y-4">
                {content.principles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#50c878]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[#c5b281]/15 bg-slate-950/50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  {content.brandPromiseLabel}
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#f3ead0]">{content.brandPromiseTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {content.brandPromiseBody}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10 md:-mt-10 md:relative md:z-10">
          <div className="grid gap-4 md:grid-cols-3">
            {content.signalBlocks.map((block) => (
              <div key={block.label} className={`${block.tone === "green" ? "signal-card-green" : "signal-card"} rounded-[1.35rem] p-6`}>
                <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${block.tone === "green" ? "text-[#1b4d3e]" : "text-[#8a6d2f]"}`}>
                  {block.label}
                </p>
                <p className={`mt-3 text-2xl font-semibold ${block.tone === "green" ? "text-[#1b4d3e]" : "text-[#001f3f]"}`}>{block.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{block.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">
                {content.latestEyebrow}
              </p>
              <h2 className="text-4xl">{content.latestTitle}</h2>
            </div>
            <Link href={isSpanish ? "/es/blog" : "/blog"} className="text-sm font-semibold text-[#8a6d2f] hover:text-[#6d541e]">
              {content.latestAll}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {content.featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={(isSpanish ? "/es/posts/" : "/posts/") + post.slug}
                className="group rounded-[1.5rem] border border-[#ddd3c1] bg-[linear-gradient(180deg,_#fffdfa_0%,_#f8f3e9_100%)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2e8b57]">
                  {post.category}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-slate-900 group-hover:text-[#214236]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-slate-400">
                  <span>{post.meta}</span>
                  <span className="text-[#2e8b57]">Read -&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[#ddd3c1] bg-white/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">
                {content.aboutEyebrow}
              </p>
              <h2 className="text-4xl">{content.aboutTitle}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              {content.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a
                href="https://www.linkedin.com/in/davidtarazona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-[#214236] hover:text-[#173229]"
              >
                {content.aboutLink}
              </a>
            </div>
          </div>
        </section>

        <section id="newsletter" className="bg-[radial-gradient(circle_at_top_left,_rgba(46,139,87,0.12),_transparent_24%),linear-gradient(180deg,_#12233f_0%,_#0c1628_100%)] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9cdbb2]">
                {content.newsletterEyebrow}
              </p>
              <h2 className="text-4xl text-white">{content.newsletterTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                {content.newsletterBody}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#10213f] hover:bg-[#e7c86d]"
              >
                {content.newsletterPrimaryCta}
              </a>
              <a
                href={isSpanish ? "https://www.linkedin.com/newsletters/7439855200535904256/" : "https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#50c878]/60 px-6 py-3 text-sm font-semibold text-white hover:border-[#86e0a7]"
              >
                {content.newsletterSecondaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f4efe6]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FinTara by David Tarazona. {content.footerDisclaimer}</p>
          <div className="flex gap-6">
            <Link href={isSpanish ? "/es/blog" : "/blog"} className="hover:text-slate-900">
              {content.navArticles}
            </Link>
            <a
              href="https://www.linkedin.com/in/davidtarazona/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}