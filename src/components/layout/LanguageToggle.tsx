"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "en" ? "ko" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center rounded-full border border-gray-200 bg-white p-1 text-xs font-medium shadow-sm transition-colors duration-150 hover:border-gray-300"
      aria-label="Toggle language"
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-all duration-150 ${
          locale === "en" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-500"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-all duration-150 ${
          locale === "ko" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-500"
        }`}
      >
        KR
      </span>
    </button>
  );
}
