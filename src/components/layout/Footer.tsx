"use client";

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

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo className="h-5 w-auto" textColor="white" />
            <p className="mt-3 text-sm text-emerald-300/70">{t("description")}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-emerald-200">{t("navigation")}</p>
            <nav className="mt-4 flex flex-col gap-2">
              <ScrollLink href="#solutions" className="text-sm text-emerald-300/70 hover:text-white">
                {nav("solutions")}
              </ScrollLink>
              <ScrollLink href="#metrics" className="text-sm text-emerald-300/70 hover:text-white">
                {nav("metrics")}
              </ScrollLink>
              <ScrollLink href="#howItWorks" className="text-sm text-emerald-300/70 hover:text-white">
                {nav("howItWorks")}
              </ScrollLink>
              <Link href="/contact" className="text-sm text-emerald-300/70 hover:text-white">
                {nav("contact")}
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium text-emerald-200">{t("connect")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-sm text-emerald-300/70 hover:text-white"
              >
                {siteConfig.links.email}
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-300/70 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-emerald-200">{t("legal")}</p>
              <Link
                href="/privacy"
                className="mt-2 block text-sm text-emerald-300/70 hover:text-white"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="mt-2 block text-sm text-emerald-300/70 hover:text-white"
              >
                {termsLabel}
              </Link>
              <Link
                href="/cookies"
                className="mt-2 block text-sm text-emerald-300/70 hover:text-white"
              >
                {t("cookies")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-800 pt-6">
          <address
            lang={isKo ? "ko" : "en"}
            className="not-italic text-[12px] leading-6 text-emerald-300/65"
          >
            <span className="text-emerald-200/90">{companyName}</span>
            <span className="mx-2 text-emerald-700/90">|</span>
            <span>{isKo ? `대표자 ${ceo}` : `CEO | ${ceo}`}</span>
            <span className="mx-2 text-emerald-700/90">|</span>
            <span>
              {isKo
                ? `사업자등록번호 ${company.businessRegistrationNumber}`
                : `Business Registration Number | ${company.businessRegistrationNumber}`}
            </span>
            <span className="mx-2 hidden text-emerald-700/90 sm:inline">|</span>
            <span className="block sm:inline">{address}</span>
            <span className="mx-2 hidden text-emerald-700/90 sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="block text-emerald-200 hover:text-white sm:inline"
            >
              {siteConfig.links.email}
            </a>
          </address>
        </div>

        <div className="mt-6 border-t border-emerald-800 pt-6 text-center text-sm text-emerald-400/50">
          &copy; {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
