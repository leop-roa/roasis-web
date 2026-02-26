"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Top-winner patterns from SSOT ── */
const winnerPatterns = [
  "Before / After split",
  "Benefit-first headline",
  "Clinical proof formula",
  "Ingredient mechanism",
  "3-step routine close",
  "Comparison grid",
];

/* ── Real golden insights from SSOT document ── */
const goldenInsights = [
  {
    weak: "Long-lasting moisture",
    strong: "48-Hour Deep Hydration",
    rule: "Specificity converts. Number + Duration + Unit.",
  },
  {
    weak: "Clinically tested",
    strong: "4-Week Trial · 112 Participants · 97% Results",
    rule: "Clinical proof needs study size, duration, and outcome.",
  },
  {
    weak: "Contains Hyaluronic Acid",
    strong: "Triple-Weight HA — All 3 Skin Layers",
    rule: "Origin + concentration + mechanism = premium signal.",
  },
  {
    weak: "Loved by many",
    strong: "Trusted by 127,000+ Customers",
    rule: "Real numbers beat vague claims. Always.",
  },
  {
    weak: "Improves skin",
    strong: "93% Saw Smoother Skin in 2 Weeks",
    rule: "Experiential phrasing gets 3-4x higher CTR.",
  },
];

export default function ContentsAnalysis() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Cycle highlighted winner pattern
  const [activePattern, setActivePattern] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    let p = 0;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      setActivePattern(0);
      interval = setInterval(() => {
        p = (p + 1) % winnerPatterns.length;
        setActivePattern(p);
      }, 2000);
    }, 600);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  // Cycle golden insights
  const [activeInsight, setActiveInsight] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let c = 0;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        c = (c + 1) % goldenInsights.length;
        setActiveInsight(c);
      }, 3200);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full space-y-8">
      {/* ── Top-Winner Patterns ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
          Top-Winner Patterns
        </p>
        <div className="flex flex-wrap gap-2.5">
          {winnerPatterns.map((pattern, i) => {
            const isActive = activePattern === i;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.06, ease }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-500 ${
                  isActive
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium"
                    : "bg-gray-50/80 border border-gray-100 text-gray-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="patternDot"
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {pattern}
              </motion.span>
            );
          })}
        </div>
      </motion.div>

      {/* ── Golden Insights ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
          Golden Insights
        </p>
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-sm">
          <div className="relative h-[104px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInsight}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                {/* Weak */}
                <p className="text-base text-gray-300 line-through decoration-gray-200">
                  {goldenInsights[activeInsight].weak}
                </p>
                {/* Strong */}
                <p className="mt-2 text-lg font-semibold text-emerald-600">
                  {goldenInsights[activeInsight].strong}
                </p>
                {/* Rule */}
                <p className="mt-2 text-sm text-gray-400">
                  {goldenInsights[activeInsight].rule}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="mt-4 flex gap-1.5">
            {goldenInsights.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: activeInsight === i ? 18 : 5,
                  backgroundColor:
                    activeInsight === i ? "rgb(5,150,105)" : "rgb(229,231,235)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
