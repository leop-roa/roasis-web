"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Channels with brand colors ── */
const channels = [
  { label: "Amazon", base: 5400, color: "#FF9900", lightBg: "bg-orange-50", lightText: "text-orange-600" },
  { label: "Shopify", base: 3500, color: "#95BF47", lightBg: "bg-lime-50", lightText: "text-lime-600" },
  { label: "Meta", base: 2000, color: "#0081FB", lightBg: "bg-blue-50", lightText: "text-blue-600" },
  { label: "Google", base: 1800, color: "#4285F4", lightBg: "bg-sky-50", lightText: "text-sky-600" },
];

const MAX_VALUE = 6200;

/* ── Smooth number display ── */
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

  useEffect(() => {
    mv.set(value);
  }, [value, mv]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (spanRef.current) {
        spanRef.current.textContent =
          prefix +
          v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          suffix;
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

  // After entrance, start fluctuating
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
      {/* ── Hero ROAS ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease }}
        className="mb-8 text-center"
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
          Blended ROAS
        </p>
        <div className="flex items-baseline justify-center gap-1">
          {entered ? (
            <SmoothValue
              value={roas}
              suffix="x"
              decimals={1}
              className="text-5xl font-bold tabular-nums text-emerald-600"
            />
          ) : (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="text-5xl font-bold tabular-nums text-emerald-600"
            >
              4.8x
            </motion.span>
          )}
        </div>
        {/* Total revenue line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-1.5 text-sm text-gray-400"
        >
          {entered ? (
            <SmoothValue
              value={total}
              prefix="$"
              suffix=" / week"
              className="text-sm tabular-nums text-gray-400"
            />
          ) : (
            "$12,700 / week"
          )}
        </motion.p>
      </motion.div>

      {/* ── Channel Bars ── */}
      <div className="space-y-4">
        {channels.map((ch, i) => {
          const isActive = activeChannel === i;
          const displayValue = entered ? values[i] : ch.base;
          const pct = (displayValue / MAX_VALUE) * 100;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease }}
            >
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-md transition-transform duration-500 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                    style={{ backgroundColor: ch.color + "18" }}
                  >
                    <div
                      className="h-2 w-2 rounded-sm"
                      style={{ backgroundColor: ch.color }}
                    />
                  </div>
                  <span
                    className={`text-sm transition-all duration-500 ${
                      isActive ? "text-gray-800 font-medium" : "text-gray-500"
                    }`}
                  >
                    {ch.label}
                  </span>
                </div>
                {entered ? (
                  <SmoothValue
                    value={displayValue}
                    prefix="$"
                    className="text-sm font-semibold tabular-nums text-gray-700"
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className="text-sm font-semibold tabular-nums text-gray-700"
                  >
                    ${ch.base.toLocaleString()}
                  </motion.span>
                )}
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: ch.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${pct}%` } : { width: 0 }}
                  transition={{
                    duration: entered ? 0.6 : 0.8,
                    delay: entered ? 0 : 0.5 + i * 0.1,
                    ease,
                  }}
                />
                {/* Shimmer on active */}
                {isActive && entered && (
                  <motion.div
                    className="absolute inset-y-0 w-16"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    }}
                    initial={{ left: "-20%" }}
                    animate={{ left: "120%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Channel pills summary ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-6 flex flex-wrap justify-center gap-2"
      >
        {channels.map((ch, i) => {
          const isActive = activeChannel === i;
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium transition-all duration-500 ${
                isActive
                  ? "border-gray-200 bg-white text-gray-700 shadow-sm"
                  : "border-transparent bg-gray-50 text-gray-400"
              }`}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ch.color }}
              />
              {ch.label}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
