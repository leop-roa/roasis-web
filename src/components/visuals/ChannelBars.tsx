"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const channels = [
  { label: "Amazon", base: 5400, color: "rgb(255,153,0)", bar: "rgba(255,153,0,0.30)", barActive: "rgba(255,153,0,0.55)" },
  { label: "Shopify", base: 3500, color: "rgb(149,191,71)", bar: "rgba(149,191,71,0.28)", barActive: "rgba(149,191,71,0.50)" },
  { label: "Meta", base: 2000, color: "rgb(0,129,251)", bar: "rgba(0,129,251,0.25)", barActive: "rgba(0,129,251,0.48)" },
  { label: "Google", base: 1800, color: "rgb(66,133,244)", bar: "rgba(66,133,244,0.25)", barActive: "rgba(66,133,244,0.48)" },
];

const MAX_VALUE = 6200;

function SmoothValue({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => { mv.set(value); }, [value, mv]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (spanRef.current) {
        spanRef.current.textContent =
          prefix + v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

export default function ChannelBars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeChannel, setActiveChannel] = useState(-1);
  const [values, setValues] = useState(channels.map((c) => c.base));
  const [roas, setRoas] = useState(4.8);
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      setEntered(true);
      interval = setInterval(() => {
        setActiveChannel((prev) => (prev + 1) % channels.length);
        setValues(
          channels.map((c) =>
            Math.round(c.base + (Math.random() - 0.3) * c.base * 0.06)
          )
        );
        setRoas(4.6 + Math.random() * 0.5);
      }, 2500);
    }, 2000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  const total = values.reduce((a, b) => a + b, 0);

  return (
    <div ref={ref} className="w-full">
      {/* ── Header: ROAS + Revenue ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease }}
        className="mb-6 flex items-end justify-between"
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
            Blended ROAS
          </p>
          <div className="mt-1">
            {entered ? (
              <SmoothValue
                value={roas}
                suffix="x"
                decimals={1}
                className="text-4xl font-bold tabular-nums text-emerald-600"
              />
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="text-4xl font-bold tabular-nums text-emerald-600"
              >
                4.8x
              </motion.span>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-right"
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
            Weekly Revenue
          </p>
          {entered ? (
            <SmoothValue
              value={total}
              prefix="$"
              className="mt-1 text-lg font-semibold tabular-nums text-gray-800"
            />
          ) : (
            <p className="mt-1 text-lg font-semibold tabular-nums text-gray-800">
              $12,700
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* ── Channel Tabs ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mb-5 flex gap-2"
      >
        {channels.map((ch, i) => {
          const isActive = activeChannel === i;
          const isHov = hovered === i;
          const highlighted = isHov || (hovered === null && isActive);

          return (
            <button
              key={i}
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 ${
                highlighted
                  ? "border-gray-200 bg-white text-gray-700 shadow-sm"
                  : "border-transparent bg-gray-50 text-gray-400"
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="h-1.5 w-1.5 rounded-full transition-opacity duration-300"
                style={{
                  backgroundColor: ch.color,
                  opacity: highlighted ? 1 : 0.45,
                }}
              />
              {ch.label}
            </button>
          );
        })}
      </motion.div>

      {/* ── Channel Bars ── */}
      <div className="space-y-3.5">
        {channels.map((ch, i) => {
          const isActive = activeChannel === i;
          const isHov = hovered === i;
          const highlighted = isHov || (hovered === null && isActive);
          const displayValue = entered ? values[i] : ch.base;
          const pct = (displayValue / MAX_VALUE) * 100;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease }}
              className="cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span
                  className={`text-sm transition-colors duration-300 ${
                    highlighted ? "text-gray-700 font-medium" : "text-gray-400"
                  }`}
                >
                  {ch.label}
                </span>
                {entered ? (
                  <SmoothValue
                    value={displayValue}
                    prefix="$"
                    className={`text-sm tabular-nums transition-colors duration-300 ${
                      highlighted ? "text-gray-700 font-medium" : "text-gray-300"
                    }`}
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className={`text-sm tabular-nums transition-colors duration-300 ${
                      highlighted ? "text-gray-700 font-medium" : "text-gray-300"
                    }`}
                  >
                    ${ch.base.toLocaleString()}
                  </motion.span>
                )}
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="h-full rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: highlighted ? ch.barActive : ch.bar,
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${pct}%` } : { width: 0 }}
                  transition={{
                    duration: entered ? 0.6 : 0.8,
                    delay: entered ? 0 : 0.5 + i * 0.1,
                    ease,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
