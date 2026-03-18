import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FinTara — Finance & Investing", template: "%s | FinTara" },
  description: "Sharp, data-grounded finance writing. No hype. No hot takes without numbers. By David Tarazona.",
  keywords: "finance, stocks, cryptocurrency, wealth building, passive income, financial independence",
  authors: [{ name: "David Tarazona" }],
  creator: "David Tarazona",
  publisher: "FinTara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fintara.vercel.app",
    title: "FinTara - Personal Finance & Wealth Building",
    description: "Master personal finance, stocks, and crypto",
    siteName: "FinTara",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTara - Personal Finance",
    description: "Learn to build wealth",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
