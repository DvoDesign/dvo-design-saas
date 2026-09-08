import type { Metadata } from "next";
import "./globals.css";

// Fonts are loaded via a <link> tag below instead of next/font/google,
// so the build doesn't require fetching fonts.googleapis.com at build time.
// (This sandbox has no network access to Google Fonts; in a normal dev/deploy
// environment next/font/google would work fine and is the better long-term
// choice — swap back in if your build environment has internet access.)

export const metadata: Metadata = {
  title: "DvoDesign — студия бренда и цифровых продуктов",
  description:
    "DvoDesign делает фирменный стиль, сайты и интерфейсы для B2B-компаний: от первого эскиза до готового продукта в разработке.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        {children}
      </body>
    </html>
  );
}
