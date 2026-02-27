"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12">
      {/* Grid background — Dub style */}
      <div
        aria-hidden
        className="absolute inset-0"
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_30%,transparent_100%)]" />
      </div>

      {/* Emerald glow — center brand presence */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-200/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <Badge className="mb-8">
            {t("badge")}
          </Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-balance text-5xl font-bold tracking-tighter text-gray-900 sm:text-7xl lg:text-8xl">
            {t("headlinePre")}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              {t("headlineHighlight")}
            </span>
            {t("headlinePost")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-balance mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
            {t("subline")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-8">
            <Image
              src="/partners/amazon-ads-verified-partner.png"
              alt="Amazon Ads Verified Partner"
              width={153}
              height={108}
              className="h-14 w-auto object-contain opacity-40 transition-opacity duration-300 hover:opacity-80"
            />
            <div className="h-6 w-px bg-gray-200" />
            <Image
              src="/partners/shopify.svg"
              alt="Shopify Partner"
              width={110}
              height={125}
              className="h-10 w-auto object-contain opacity-35 transition-opacity duration-300 hover:opacity-80"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="a" href="#solutions">
              {t("cta1")}
            </Button>
            <Link href="/contact">
              <Button variant="secondary">{t("cta2")}</Button>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="mt-14 text-sm tracking-widest text-gray-400 uppercase">
            {t("proof")}
          </p>
        </FadeIn>
      </div>

    </section>
  );
}
