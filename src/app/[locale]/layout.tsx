import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import "@/styles/globals.css";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: {
      default: `${siteConfig.name} — ${t("badge")}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: t("subline"),
    metadataBase: new URL(siteConfig.url),
    alternates: {
      languages: {
        en: "/en",
        ko: "/ko",
      },
    },
    openGraph: {
      title: siteConfig.name,
      description: t("subline"),
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: t("subline"),
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${satoshi.variable} ${GeistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-emerald-100">
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              legalName: siteConfig.company.legalNameEn,
              alternateName: siteConfig.company.legalNameKo,
              url: siteConfig.url,
              description: siteConfig.description,
              email: siteConfig.links.email,
              taxID: siteConfig.company.businessRegistrationNumber,
              sameAs: [siteConfig.links.linkedin],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: siteConfig.links.email,
                  availableLanguage: ["en", "ko"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.company.addressEn,
                addressLocality: "Seoul",
                addressCountry: "KR",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
