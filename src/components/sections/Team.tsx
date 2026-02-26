"use client";

import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Team() {
  const t = useTranslations("team");

  return (
    <SectionWrapper id="team">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
            Team
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-balance mt-6 text-lg leading-relaxed text-gray-500">
            {t("story")}
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {([0, 1, 2] as const).map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Card className="flex h-full flex-col p-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`founders.${i}.name`)}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  {t(`founders.${i}.role`)}
                </p>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
                {t(`founders.${i}.description`)}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="mt-12 text-center text-sm tracking-wide text-gray-400">
          {t("dna")}
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
