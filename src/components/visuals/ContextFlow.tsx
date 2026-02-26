"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Source inputs that feed the engine ── */
const sources = [
  { label: "Brand Intelligence", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "Content Strategy", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { label: "Geo Targeting", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

/* ── Articles (general skincare, geo-targeted) ── */
const articles = [
  {
    title: "10 Best Retinol Serums for Beginners",
    keyword: "best retinol serum beginners",
    rank: "#3",
  },
  {
    title: "Niacinamide vs Vitamin C: Complete Guide",
    keyword: "niacinamide vs vitamin c",
    rank: "#5",
  },
  {
    title: "How to Build a Barrier Repair Routine",
    keyword: "skin barrier repair routine",
    rank: "#4",
  },
  {
    title: "Korean Glass Skin: The 7-Step Routine",
    keyword: "korean glass skin routine",
    rank: "#2",
  },
  {
    title: "The Science Behind Hyaluronic Acid",
    keyword: "hyaluronic acid benefits skin",
    rank: "#6",
  },
];

export default function ContextFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Cycle active source
  const [activeSource, setActiveSource] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    let s = 0;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      setActiveSource(0);
      interval = setInterval(() => {
        s = (s + 1) % sources.length;
        setActiveSource(s);
      }, 2000);
    }, 600);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  // Cycle which 3 articles are shown (offset shifts by 1 each cycle)
  const [offset, setOffset] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isInView) return;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      setIsFirstRender(false);
      interval = setInterval(() => {
        setOffset((prev) => prev + 1);
      }, 3500);
    }, 2800);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  const getArticle = (slotIndex: number) =>
    articles[(offset + slotIndex) % articles.length];

  return (
    <div ref={ref} className="relative w-full">
      {/* ── Source Inputs ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease }}
        className="mb-6 flex justify-center gap-3"
      >
        {sources.map((source, i) => {
          const isActive = activeSource === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease }}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 transition-all duration-500 ${
                isActive
                  ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                  : "border-gray-100 bg-gray-50/80 text-gray-400"
              }`}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={source.icon}
                />
              </svg>
              <span className="text-[11px] font-medium">{source.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Connector ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mb-5 flex justify-center"
      >
        <div className="flex flex-col items-center gap-0.5">
          <div className="h-4 w-px bg-gradient-to-b from-emerald-200 to-emerald-400" />
          <svg
            className="h-2.5 w-2.5 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 10 6"
          >
            <path d="M5 6L0 0h10L5 6z" />
          </svg>
        </div>
      </motion.div>

      {/* ── Article Feed (fixed height) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Published Articles
          </p>
          <span className="flex items-center gap-1.5 text-xs tabular-nums text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {147 + offset} live
          </span>
        </div>

        {/* Fixed-height container — 3 card slots */}
        <div className="space-y-2.5" style={{ minHeight: 252 }}>
          {[0, 1, 2].map((slot) => {
            const article = getArticle(slot);
            const isNewest = slot === 0 && !isFirstRender;
            return (
              <div
                key={slot}
                className={`rounded-xl border bg-white px-4 py-3.5 transition-all duration-700 ${
                  isNewest
                    ? "border-emerald-200 shadow-sm"
                    : "border-gray-100"
                }`}
              >
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors duration-700 ${
                      isNewest
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-gray-50 text-gray-400"
                    }`}
                  >
                    {isNewest && (
                      <svg
                        className="h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    {isNewest ? "Published" : "Live"}
                  </span>
                  <span
                    className={`ml-auto text-xs font-semibold tabular-nums transition-colors duration-700 ${
                      isNewest ? "text-emerald-600" : "text-gray-300"
                    }`}
                  >
                    {article.rank}
                  </span>
                </div>

                {/* Title */}
                <div className="relative mt-1.5 h-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${slot}-${article.title}`}
                      initial={isFirstRender ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease }}
                      className={`absolute inset-0 text-sm font-medium leading-5 transition-colors duration-700 ${
                        isNewest ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {article.title}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Keyword */}
                <div className="relative mt-2 h-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${slot}-${article.keyword}`}
                      initial={isFirstRender ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, delay: 0.05, ease }}
                      className="absolute inset-0 text-[11px] font-mono text-gray-400"
                    >
                      {article.keyword}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
