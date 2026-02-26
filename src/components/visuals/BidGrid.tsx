"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { generateSmoothPath, generateAreaPath } from "@/lib/chart-utils";

const bids = [
  "$0.70", "$1.20", "$2.50", "$0.95", "$1.80",
  "$3.10", "$0.45", "$1.55", "$2.20", "$0.88",
  "$1.40", "$2.80", "$0.60", "$1.95", "$3.40",
  "$1.10", "$0.75", "$2.15", "$1.65", "$0.50",
  "$2.90", "$1.30", "$0.85", "$1.75", "$2.40",
  "$0.55", "$3.20", "$1.45", "$2.05", "$0.92",
];

const trendData = [20, 28, 25, 35, 32, 42, 48, 45, 55, 60];
const TREND_W = 320;
const TREND_H = 56;
const TREND_PAD = 6;

const ease = [0.22, 1, 0.36, 1] as const;

export default function BidGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set());

  const pickRandom = useCallback(() => {
    const count = 3 + Math.floor(Math.random() * 3);
    const indices = new Set<number>();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * bids.length));
    }
    setHighlighted(indices);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      pickRandom();
      interval = setInterval(pickRandom, 1500);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, pickRandom]);

  const trendPath = generateSmoothPath(trendData, TREND_W, TREND_H, TREND_PAD);
  const areaPath = generateAreaPath(trendData, TREND_W, TREND_H, TREND_PAD);

  // Tracking dot along trend line
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 40, damping: 18 });
  const [dotPos, setDotPos] = useState({ x: TREND_PAD, y: TREND_H - TREND_PAD });
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.002;
      if (t > 1) t = 0;
      progress.set(t);
      frame = requestAnimationFrame(animate);
    };
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 2000);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [isInView, progress]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        const pt = pathRef.current.getPointAtLength(v * len);
        setDotPos({ x: pt.x, y: pt.y });
      }
    });
    return unsubscribe;
  }, [smoothProgress]);

  // Interpolate value for tooltip
  const min = Math.min(...trendData);
  const max = Math.max(...trendData);
  const dotValue = Math.round(
    min + (1 - (dotPos.y - TREND_PAD) / (TREND_H - TREND_PAD * 2)) * (max - min)
  );
  const pctChange = Math.round(((dotValue - trendData[0]) / trendData[0]) * 100);

  return (
    <div ref={ref} className="relative w-full">
      {/* Bid Pills Grid */}
      <div className="flex flex-wrap justify-center gap-2.5 px-2">
        {bids.map((bid, i) => {
          const active = highlighted.has(i);
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.02,
                ease,
              }}
              className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-mono transition-all duration-500 ${
                active
                  ? "bg-white shadow-lg border border-emerald-200 text-emerald-600 font-bold scale-105"
                  : "bg-gray-50/80 border border-gray-100 text-gray-300"
              }`}
            >
              {bid}
            </motion.span>
          );
        })}
      </div>

      {/* Interactive Trend Line */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, delay: 0.8, ease }}
        className="mx-auto mt-8 flex justify-center"
      >
        <svg
          width={TREND_W}
          height={TREND_H + 28}
          viewBox={`0 0 ${TREND_W} ${TREND_H + 28}`}
          className="overflow-visible"
        >
          <defs>
            {/* Gradient fill under curve */}
            <linearGradient id="bidTrendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(5,150,105)" stopOpacity={0.15} />
              <stop offset="100%" stopColor="rgb(5,150,105)" stopOpacity={0} />
            </linearGradient>
            {/* Glow filter for dot */}
            <filter id="bidDotGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill="url(#bidTrendGrad)"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          />

          {/* Ghost line */}
          <path
            d={trendPath}
            fill="none"
            stroke="rgb(5,150,105)"
            strokeWidth={2}
            opacity={0.06}
          />

          {/* Animated line draw */}
          <motion.path
            ref={pathRef}
            d={trendPath}
            fill="none"
            stroke="rgb(5,150,105)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, delay: 1, ease }}
          />

          {/* Vertical tracking line */}
          {isInView && (
            <line
              x1={dotPos.x}
              y1={dotPos.y}
              x2={dotPos.x}
              y2={TREND_H}
              stroke="rgb(5,150,105)"
              strokeWidth={1}
              strokeDasharray="2 2"
              opacity={0.2}
            />
          )}

          {/* Tracking dot with glow */}
          {isInView && (
            <g filter="url(#bidDotGlow)">
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r={4}
                fill="rgb(5,150,105)"
              />
            </g>
          )}

          {/* Outer pulse ring */}
          {isInView && (
            <circle
              cx={dotPos.x}
              cy={dotPos.y}
              r={8}
              fill="none"
              stroke="rgb(5,150,105)"
              strokeWidth={1}
              opacity={0.15}
            />
          )}

          {/* Tooltip */}
          {isInView && (
            <g transform={`translate(${dotPos.x}, ${dotPos.y - 22})`}>
              <rect
                x={-36}
                y={-12}
                width={72}
                height={20}
                rx={10}
                fill="white"
                stroke="rgb(209,213,219)"
                strokeWidth={0.5}
                filter="url(#bidDotGlow)"
              />
              <text
                x={0}
                y={2}
                textAnchor="middle"
                fontSize={10}
                fontWeight={600}
                fill="rgb(5,150,105)"
                fontFamily="monospace"
              >
                +{pctChange}% · ${dotValue}
              </text>
            </g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
