import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FinTara — Finance & Investing", template: "%s | FinTara" },
  description: "Data-first finance analysis with a clear point of view. Markets, power, and investing by David Tarazona. Not financial advice.",
  keywords: ["finance", "investing", "markets", "personal finance", "David Tarazona", "FinTara"],
  authors: [{ name: "David Tarazona", url: "https://www.linkedin.com/in/davidtarazona/" }],
  creator: "David Tarazona",
  publisher: "FinTara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fintarasite.vercel.app",
    title: "FinTara — Finance & Investing",
    description: "Sharp, data-grounded finance writing by David Tarazona.",
    siteName: "FinTara",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTara — Finance & Investing",
    description: "Data-first finance analysis with a clear point of view.",
    creator: "@FinTara",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-stone-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
