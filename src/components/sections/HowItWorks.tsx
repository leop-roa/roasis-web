"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [0, 1, 2, 3] as const;

  return (
    <SectionWrapper id="howItWorks">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
            Process
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("titlePre")}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            {t("titlePost")}
          </h2>
          <p className="text-balance mx-auto mt-4 max-w-2xl text-lg text-gray-500">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <div className="relative mt-16 grid gap-8 md:grid-cols-4">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent md:block"
        />

        {steps.map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative text-center group">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm transition-all duration-150 group-hover:border-emerald-300 group-hover:shadow-md">
                <span className="text-xl font-bold text-emerald-600">
                  {t(`steps.${i}.number`)}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {t(`steps.${i}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {t(`steps.${i}.description`)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
