"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import ScrollLink, { useHashScroll } from "@/components/ui/ScrollLink";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "./LanguageToggle";
import MobileNav from "./MobileNav";

const navItems = ["solutions", "metrics", "howItWorks"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useHashScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <header
          className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-gray-200/60 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
              : "border-transparent bg-white/50 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" aria-label="ROA Home">
              <Logo className="h-5 w-auto" textColor="#111827" />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  href={`#${item}`}
                  className="rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors duration-150 hover:bg-gray-100/80 hover:text-gray-900"
                >
                  {t(item)}
                </ScrollLink>
              ))}
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
              >
                {t("contact")}
              </Link>
              <div className="ml-2">
                <LanguageToggle />
              </div>
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-gray-400 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
