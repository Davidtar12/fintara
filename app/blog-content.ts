export type Language = "en" | "es";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  meta: string;
  date: string;
  readTime: string;
  body: string[];
};

export const BLOG_CONTENT: Record<Language, BlogPost[]> = {
  en: [
    {
      slug: "etf-fee-compression-2026",
      category: "Investing",
      title: "ETF fees hit a 10-year low. Who actually keeps the gain?",
      excerpt:
        "Fee compression sounds universally good until you map where the savings are material and where the marketing is ahead of the math.",
      meta: "5 min read",
      date: "Mar 18, 2026",
      readTime: "5 min read",
      body: [
        "ETF fee compression is one of those stories that sounds simple until you run the numbers. Yes, lower expense ratios matter. But they do not matter equally across portfolio sizes, holding periods, and product categories.",
        "The right question is not whether lower fees are good. They are. The right question is where fee competition reflects real efficiency and where it is mainly a customer-acquisition tactic that gets offset elsewhere through spreads, product structure, or behavior.",
        "FinTara's view is that retail investors benefit most when they treat fees as one variable inside a broader decision: liquidity, tax handling, tracking quality, and whether the product actually matches the intended exposure.",
      ],
    },
    {
      slug: "ibkr-vs-brokers-2026",
      category: "Tools",
      title: "Interactive Brokers vs the rest: the real trade-offs after 3 years",
      excerpt:
        "Execution quality, margin rates, reporting friction, and why the best broker for serious investors is still not the easiest one.",
      meta: "7 min read",
      date: "Mar 15, 2026",
      readTime: "7 min read",
      body: [
        "Interactive Brokers is often recommended as if the case were closed. It is not. IBKR is powerful, but it comes with interface friction, setup complexity, and a learning curve that many investors underestimate.",
        "The real edge is not branding. It is the stack: broad market access, strong execution, low financing costs, and a platform built for people who care about detail. Those benefits are real, but they come with a usability tax.",
        "For some investors, that trade-off is worth it immediately. For others, a simpler broker is the better decision until the complexity of the portfolio justifies the heavier infrastructure.",
      ],
    },
    {
      slug: "macro-signals-q1-2026",
      category: "Macro",
      title: "Three macro signals worth tracking before the market narrative changes",
      excerpt:
        "Not predictions. The specific data points that tend to shift the story before headlines catch up.",
      meta: "4 min read",
      date: "Mar 11, 2026",
      readTime: "4 min read",
      body: [
        "Most macro commentary arrives late. By the time the consensus explains what changed, the market has already repriced around the new story. That is why signal selection matters more than narrative fluency.",
        "Right now, three indicators deserve more attention than they are getting: credit stress at the margin, labor-market softness beneath headline strength, and cross-asset divergence in rate sensitivity.",
        "None of these signals works alone. What matters is the combination. FinTara tracks them together because the interaction often says more than any single chart in isolation.",
      ],
    },
  ],
  es: [
    {
      slug: "compresion-comisiones-etf-2026",
      category: "Inversion",
      title: "Las comisiones de los ETF tocaron minimo de 10 anos. Quien se queda realmente con esa ganancia?",
      excerpt:
        "La compresion de fees suena positiva para todos hasta que miras donde el ahorro es material y donde el marketing va por delante de los numeros.",
      meta: "5 min de lectura",
      date: "18 mar 2026",
      readTime: "5 min de lectura",
      body: [
        "La baja de comisiones en ETF parece una buena noticia universal, pero el impacto real depende del tamano del portafolio, del horizonte de inversion y del tipo de producto. No todo ahorro en fees cambia de verdad el resultado final.",
        "La pregunta correcta no es si pagar menos es mejor. Claro que lo es. La pregunta correcta es donde la competencia en comisiones refleja eficiencia real y donde funciona mas como una maniobra comercial compensada por otros costos o por peor comportamiento del inversor.",
        "La lectura de FinTara es que el inversor minorista gana mas cuando analiza fees junto con liquidez, tracking, tratamiento fiscal y calidad de ejecucion. El numero aislado rara vez cuenta toda la historia.",
      ],
    },
    {
      slug: "ibkr-vs-brokers-2026-es",
      category: "Herramientas",
      title: "Interactive Brokers contra el resto: los trade-offs reales despues de 3 anos",
      excerpt:
        "Calidad de ejecucion, tasas de margen, friccion operativa y por que el mejor broker para inversores serios no siempre es el mas facil.",
      meta: "7 min de lectura",
      date: "15 mar 2026",
      readTime: "7 min de lectura",
      body: [
        "A Interactive Brokers se le recomienda muchas veces como si el debate ya estuviera cerrado. No lo esta. IBKR tiene ventajas claras, pero tambien tiene friccion, complejidad y una curva de aprendizaje que muchos subestiman.",
        "La ventaja real no es el logo ni la reputacion. Es la infraestructura: acceso a mercados, calidad de ejecucion, costos de financiamiento y herramientas pensadas para quien si mira los detalles.",
        "Para algunos inversores, ese intercambio vale la pena desde el principio. Para otros, un broker mas simple puede ser mejor hasta que el nivel de complejidad del portafolio justifique una plataforma mas pesada.",
      ],
    },
    {
      slug: "senales-macro-q1-2026",
      category: "Macro",
      title: "Tres senales macro que vale la pena seguir antes de que cambie la narrativa",
      excerpt:
        "No son predicciones. Son datos que suelen mover la historia antes de que los titulares se pongan al dia.",
      meta: "4 min de lectura",
      date: "11 mar 2026",
      readTime: "4 min de lectura",
      body: [
        "La mayoria del comentario macro llega tarde. Para cuando el consenso explica lo que paso, el mercado ya ajusto precio y expectativas. Por eso importa mas elegir bien las senales que sonar sofisticado contando la historia despues.",
        "Hoy hay tres indicadores que merecen mas atencion: estres de credito en el margen, debilidad laboral debajo del titular y divergencias entre activos sensibles a tasas. El punto no es adivinar, sino leer tensiones antes de que se vuelvan obvias.",
        "Ninguna senal sirve sola. Lo relevante es como interactuan. FinTara las mira en conjunto porque la combinacion suele decir mas que cualquier grafico individual por separado.",
      ],
    },
  ],
};

export function getPost(language: Language, slug: string): BlogPost | undefined {
  return BLOG_CONTENT[language].find((post) => post.slug === slug);
}