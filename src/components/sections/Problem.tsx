"use client";

import { useTranslations } from "next-intl";
import { DollarSign, BookOpen, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

const icons = [DollarSign, BookOpen, TrendingUp];

export default function Problem() {
  const t = useTranslations("problem");

  return (
    <SectionWrapper id="problem" className="relative bg-gray-50">
      {/* Subtle top fade from white to gray-50 */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-balance mt-6 text-lg text-gray-500">{t("opening")}</p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {([0, 1, 2] as const).map((i) => {
          const Icon = icons[i];
          return (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="flex h-full flex-col p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {t(`cards.${i}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                  {t(`cards.${i}.description`)}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.3}>
        <p className="mx-auto mt-16 max-w-3xl text-center text-sm leading-relaxed text-gray-400">
          {t("stat")}
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p className="text-balance mx-auto mt-8 max-w-2xl text-center text-xl font-medium text-gray-900">
          {t("transition")}
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
