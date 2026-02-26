"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  delay?: number;
}

export default function AnimatedBar({
  label,
  value,
  maxValue = 100,
  color = "bg-emerald-400",
  delay = 0,
}: AnimatedBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const pct = Math.min((value / maxValue) * 100, 100);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-400">{label}</span>
        <span className="font-mono text-white">{value.toLocaleString()}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
