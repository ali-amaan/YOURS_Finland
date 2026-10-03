import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { site } from "@/lib/content";
import "./globals.css";

const metadataBase = new URL(site.url);

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "YOURS Finland",
    template: "%s · YOURS Finland",
  },
  description: site.description,
  openGraph: {
    title: "YOURS Finland",
    description: site.description,
    locale: "en_FI",
    type: "website",
    siteName: "YOURS Finland",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YOURS Finland",
  alternateName: "Young Researchers Society Finland",
  description: site.description,
  email: site.email,
  areaServed: "Finland",
  parentOrganization: {
    "@type": "Organization",
    name: "Young Researchers Society",
    sameAs: site.koreaFacebook,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pine focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
