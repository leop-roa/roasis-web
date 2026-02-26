"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-emerald-900 px-6 py-32 sm:px-8 lg:px-12">
      {/* Grid pattern */}
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      {/* Gradient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-emerald-500/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("titlePre")}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            {t("titlePost")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-balance mt-6 text-xl text-emerald-200">{t("subtitle")}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Link href="/contact">
              <Button variant="inverted">
                {t("button")}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
