"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const partners = [
  {
    name: "Amazon Ads Verified Partner",
    src: "/partners/amazon-ads-verified-partner.png",
    width: 153,
    height: 108,
  },
  {
    name: "Shopify",
    src: "/partners/shopify.svg",
    width: 110,
    height: 125,
  },
] as const;

export default function Partners() {
  return (
    <section className="border-t border-gray-100 bg-gray-50/50 py-12">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
