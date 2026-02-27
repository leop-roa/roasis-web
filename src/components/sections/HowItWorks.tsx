"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <SectionWrapper id="howItWorks" className="bg-gray-50">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
            Process
          </p>
          <h2 className="text-balance mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("titlePre")}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            {t("titlePost")}
          </h2>
          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            {t("subtitle")}
          </p>
        </div>
      </FadeIn>

      <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {/* Connecting line (desktop) */}
        <div
          aria-hidden
          className="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-1/2 hidden h-px -translate-y-1/2 bg-gray-100 lg:block"
        />

        {[0, 1, 2, 3].map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 transition-colors duration-300 group-hover:bg-emerald-50">
                <svg
                  className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {i === 0 && (
                    <>
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </>
                  )}
                  {i === 2 && (
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {i === 3 && (
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  )}
                </svg>
              </div>

              {/* Text */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">
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
