"use client";

import { useState, useRef, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_DELAY_MS = 3000;

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const loadedAt = useRef(Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) return;

    // Rate limiting — reject if submitted too quickly
    if (Date.now() - loadedAt.current < MIN_SUBMIT_DELAY_MS) return;

    // Client-side email validation
    const email = data.get("email") as string;
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    data.delete("website");
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 pb-24 pt-40 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-xl">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-gray-500">{t("subtitle")}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Honeypot — hidden from real users */}
            <div className="absolute opacity-0" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t("namePlaceholder")}
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-150 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t("emailPlaceholder")}
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-150 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t("messagePlaceholder")}
                className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-150 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? t("sending") : t("send")}
            </Button>

            {status === "success" && (
              <p className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700 border border-emerald-200">
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200">
                {t("error")}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
