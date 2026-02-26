"use client";

import { useTranslations } from "next-intl";
import { Cpu, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Products() {
  const t = useTranslations("products");

  return (
    <SectionWrapper id="products">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <Card className="flex h-full flex-col p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
              <Cpu className="h-6 w-6 text-emerald-500" />
            </div>
            <Badge className="mt-4 w-fit">{t("brandOS.badge")}</Badge>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {t("brandOS.title")}
            </h3>
            <p className="mt-3 flex-1 text-gray-500">{t("brandOS.description")}</p>
            <ul className="mt-6 space-y-2">
              {(["0", "1", "2"] as const).map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t(`brandOS.features.${i}`)}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="secondary" disabled>
                {t("brandOS.cta")}
              </Button>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="flex h-full flex-col p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
              <Sparkles className="h-6 w-6 text-emerald-500" />
            </div>
            <Badge className="mt-4 w-fit">{t("roasis.badge")}</Badge>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {t("roasis.title")}
            </h3>
            <p className="mt-3 flex-1 text-gray-500">{t("roasis.description")}</p>
            <ul className="mt-6 space-y-2">
              {(["0", "1", "2"] as const).map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t(`roasis.features.${i}`)}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button as="a" href="https://roasis.ai" variant="primary">
                {t("roasis.cta")}
              </Button>
            </div>
          </Card>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
