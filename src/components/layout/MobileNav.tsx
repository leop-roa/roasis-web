"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import ScrollLink from "@/components/ui/ScrollLink";
import LanguageToggle from "./LanguageToggle";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navItems = ["solutions", "metrics", "howItWorks", "contact"] as const;

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations("nav");

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm" onClick={onClose} />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <LanguageToggle />
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {navItems.map((item) => {
            if (item === "contact") {
              return (
                <Link
                  key={item}
                  href="/contact"
                  onClick={onClose}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-500 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-900"
                >
                  {t(item)}
                </Link>
              );
            }
            return (
              <ScrollLink
                key={item}
                href={`#${item}`}
                onClick={onClose}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-500 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-900"
              >
                {t(item)}
              </ScrollLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}
