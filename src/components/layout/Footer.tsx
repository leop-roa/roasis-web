"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import ScrollLink from "@/components/ui/ScrollLink";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const termsLabel = t.has("terms") ? t("terms") : "Terms of Use";
  const company = siteConfig.company;
  const isKo = locale === "ko";

  const companyName = isKo ? company.legalNameKo : company.legalNameEn;
  const ceo = isKo ? company.ceoKo : company.ceoEn;
  const address = isKo ? company.addressKo : company.addressEn;

  return (
    <footer className="relative border-t border-emerald-800 bg-emerald-950">
      {/* Subtle grid */}
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="h-5 w-auto" textColor="white" />
            <p className="mt-3 text-sm leading-relaxed text-emerald-400/60">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-300/80">
              {t("navigation")}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              <ScrollLink href="#solutions" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {nav("solutions")}
              </ScrollLink>
              <ScrollLink href="#metrics" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {nav("metrics")}
              </ScrollLink>
              <ScrollLink href="#howItWorks" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {nav("howItWorks")}
              </ScrollLink>
              <Link href="/contact" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {nav("contact")}
              </Link>
            </nav>
          </div>

          {/* Legal & Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-300/80">
              {t("legal")}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/privacy" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {t("privacy")}
              </Link>
              <Link href="/terms" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {termsLabel}
              </Link>
              <Link href="/cookies" className="text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white">
                {t("cookies")}
              </Link>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="mt-1 text-sm text-emerald-400/60 transition-colors duration-200 hover:text-white"
              >
                {siteConfig.links.email}
              </a>
            </div>
          </div>

          {/* Partners */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-300/80">
              Partners
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <Image
                src="/partners/amazon-ads-verified-partner.png"
                alt="Amazon Ads Verified Partner"
                width={153}
                height={108}
                className="h-10 w-auto object-contain object-left opacity-60 transition-opacity duration-300 hover:opacity-90"
              />
              <Image
                src="/partners/shopify.svg"
                alt="Shopify"
                width={110}
                height={125}
                className="h-8 w-auto object-contain object-left opacity-60 transition-opacity duration-300 hover:opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar — company info + copyright */}
        <div className="mt-10 border-t border-emerald-800 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <address
              lang={isKo ? "ko" : "en"}
              className="not-italic text-xs leading-relaxed text-emerald-400/40"
            >
              {companyName}
              <span className="mx-1.5 text-emerald-700">·</span>
              {isKo ? `대표자 ${ceo}` : `CEO ${ceo}`}
              <span className="mx-1.5 text-emerald-700">·</span>
              {isKo
                ? `사업자등록번호 ${company.businessRegistrationNumber}`
                : `Reg. ${company.businessRegistrationNumber}`}
              <span className="mx-1.5 hidden text-emerald-700 sm:inline">·</span>
              <span className="block sm:inline">{address}</span>
            </address>
            <p className="shrink-0 text-xs text-emerald-400/40">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
