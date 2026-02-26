"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Metrics() {
  const t = useTranslations("metrics");

  return (
    <SectionWrapper id="metrics" className="relative bg-gray-50">
      <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
            Results
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-balance mt-4 text-lg text-gray-500">
            {t("subtitle")}
          </p>
        </div>
      </FadeIn>

      {/* Stats — no cards, just numbers */}
      <div className="mt-20 grid grid-cols-2 gap-y-14 gap-x-4 lg:grid-cols-4">
        {([0, 1, 2, 3] as const).map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="text-center">
              <p className="text-5xl font-black tracking-tighter text-emerald-600 sm:text-6xl">
                {t(`stats.${i}.value`)}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                {t(`stats.${i}.label`)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Case study + operational proof */}
      <FadeIn delay={0.4}>
        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-200 pt-10">
          <p className="text-center text-sm text-gray-400">
            {t("caseStudy")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-gray-500">
            {([0, 1, 2] as const).map((i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-gray-300" aria-hidden>·</span>
                )}
                <span className="font-semibold text-gray-700">
                  {t(`highlights.${i}.metric`)}
                </span>
                {t(`highlights.${i}.description`)}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
