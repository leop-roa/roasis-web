"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import AmazonMockup from "./engines/AmazonMockup";
import ContentsMockup from "./engines/SocialMockup";
import GeoMockup from "./engines/GeoMockup";
import CommandMockup from "./engines/CommandMockup";

interface EngineTextProps {
  engineKey: string;
  capCount: number;
}

function EngineText({ engineKey, capCount }: EngineTextProps) {
  const t = useTranslations("solutions");

  return (
    <FadeIn>
      <div>
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t(`${engineKey}.title`)}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
          {t(`${engineKey}.description`)}
        </p>

        <ul className="mt-8 space-y-3">
          {Array.from({ length: capCount }, (_, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <p className="font-medium text-gray-900">
                  {t(`${engineKey}.capabilities.${i}.title`)}
                </p>
                <p className="mt-0.5 text-sm text-gray-400">
                  {t(`${engineKey}.capabilities.${i}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export default function EngineShowcase() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions">
      {/* Section header */}
      <div className="bg-white px-6 pt-16 pb-8 sm:px-8 sm:pt-24 sm:pb-16 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
              Platform
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
      </div>

      {/* Engine 1: Amazon — Text Left | Mockup Right */}
      <div className="bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <EngineText engineKey="amazon" capCount={5} />
          <AmazonMockup />
        </div>
      </div>

      {/* Engine 2: Contents — Mockup Left | Text Right */}
      <div className="bg-gray-50 px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <ContentsMockup />
          </div>
          <div className="order-1 lg:order-2">
            <EngineText engineKey="contents" capCount={3} />
          </div>
        </div>
      </div>

      {/* Engine 3: GEO — Text Left | Mockup Right */}
      <div className="bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <EngineText engineKey="geo" capCount={4} />
          <GeoMockup />
        </div>
      </div>

      {/* Engine 4: Dashboard — Full-width mockup, text below */}
      <div className="bg-gray-50 px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("dashboard.title")}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
                {t("dashboard.description")}
              </p>
            </div>
          </FadeIn>
          <CommandMockup />
          <FadeIn delay={0.4}>
            <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {t(`dashboard.capabilities.${i}.title`)}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      {t(`dashboard.capabilities.${i}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Callout */}
      <div className="bg-white px-6 py-10 sm:px-8 sm:py-16 lg:px-12">
        <FadeIn>
          <p className="mx-auto max-w-3xl text-center text-sm text-gray-400">
            {t("callout")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
