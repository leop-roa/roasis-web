"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  const t = useTranslations("about");

  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            {t("description")}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 font-mono text-sm font-medium tracking-wide text-emerald-500">
            {t("mission")}
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
