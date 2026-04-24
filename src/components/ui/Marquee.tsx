"use client";

import { useRef, ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // base velocity
  reverseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({ children, speed = 1, reverseOnHover = true, className = "", itemClassName = "pr-12" }: MarqueeProps) {
  // Use CSS animation instead of useAnimationFrame for better performance
  const marqueeSpeed = Math.max(20, 40 - speed * 5); // Convert to CSS duration

  return (
    <div 
      className={`overflow-hidden m-0 flex whitespace-nowrap flex-nowrap ${className}`}
      style={{
        animation: `marquee ${marqueeSpeed}s linear infinite`,
      } as React.CSSProperties}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="flex whitespace-nowrap shrink-0 flex-nowrap">
        {/* Render 2 copies for seamless loop */}
        <div className={`flex items-center shrink-0 ${itemClassName}`}>{children}</div>
        <div className={`flex items-center shrink-0 ${itemClassName}`}>{children}</div>
      </div>
    </div>
  );
}
