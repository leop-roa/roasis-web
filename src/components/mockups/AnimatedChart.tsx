"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { generateSmoothPath, generateAreaPath } from "@/lib/chart-utils";

interface AnimatedChartLine {
  data: number[];
  color: string;
  fillOpacity?: number;
}

interface AnimatedChartProps {
  lines: AnimatedChartLine[];
  width?: number;
  height?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedChart({
  lines,
  width = 400,
  height = 150,
  delay = 0.6,
  className = "",
}: AnimatedChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${className}`}
      fill="none"
    >
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1={0}
          y1={height * ratio}
          x2={width}
          y2={height * ratio}
          stroke="rgb(55,65,81)"
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
      ))}

      {lines.map((line, i) => {
        const linePath = generateSmoothPath(line.data, width, height, 8);
        const areaPath = generateAreaPath(line.data, width, height, 8);

        return (
          <g key={i}>
            {line.fillOpacity !== undefined && line.fillOpacity > 0 && (
              <motion.path
                d={areaPath}
                fill={line.color}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: line.fillOpacity } : { opacity: 0 }}
                transition={{ duration: 1, delay: delay + i * 0.3 }}
              />
            )}
            <motion.path
              d={linePath}
              stroke={line.color}
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: delay + i * 0.3, ease: "easeInOut" }}
            />
          </g>
        );
      })}
    </svg>
  );
}
