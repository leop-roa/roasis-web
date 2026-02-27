"use client";

import { useTranslations } from "next-intl";
import { Check, X, Minus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/ui/SectionWrapper";

function CellValue({ value, isROA }: { value: string; isROA?: boolean }) {
  if (value === "true") {
    return (
      <div className="flex justify-center">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
            isROA
              ? "bg-emerald-100 ring-1 ring-emerald-200"
              : "bg-emerald-50"
          }`}
        >
          <Check
            className={`h-4 w-4 ${isROA ? "text-emerald-600" : "text-emerald-500/60"}`}
            strokeWidth={2.5}
          />
        </span>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
          <Minus className="h-4 w-4 text-amber-500" strokeWidth={2} />
        </span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
        <X className="h-3.5 w-3.5 text-gray-400" strokeWidth={2} />
      </span>
    </div>
  );
}

export default function Landscape() {
  const t = useTranslations("landscape");

  return (
    <SectionWrapper id="landscape">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
            Comparison
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

      <FadeIn delay={0.1}>
        <div className="mx-auto mt-16 max-w-4xl overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="w-[36%] px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  {t("headers.0")}
                </th>
                {([1, 2, 3] as const).map((i) => (
                  <th
                    key={i}
                    className="px-4 py-4 text-center text-xs font-medium uppercase tracking-wider text-gray-400"
                  >
                    {t(`headers.${i}`)}
                  </th>
                ))}
                <th className="border-l-2 border-emerald-200 bg-emerald-50/60 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  {t("headers.4")}
                </th>
              </tr>
            </thead>
            <tbody>
              {([0, 1, 2, 3, 4, 5] as const).map((i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 last:border-0 transition-colors duration-150 hover:bg-gray-50/50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {t(`rows.${i}.capability`)}
                  </td>
                  <td className="px-4 py-4">
                    <CellValue value={t(`rows.${i}.agency`)} />
                  </td>
                  <td className="px-4 py-4">
                    <CellValue value={t(`rows.${i}.saas`)} />
                  </td>
                  <td className="px-4 py-4">
                    <CellValue value={t(`rows.${i}.blackbox`)} />
                  </td>
                  <td className="border-l-2 border-emerald-200 bg-emerald-50/40 px-4 py-4">
                    <CellValue value={t(`rows.${i}.brandos`)} isROA />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-400">
          {t("callout")}
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
