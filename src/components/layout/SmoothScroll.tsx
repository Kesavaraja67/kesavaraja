"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger, gsap } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Only enable Lenis on touch devices (pointer: coarse)
    // Desktop users get native smooth scroll which is already optimized
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    
    if (!isTouch) {
      // Desktop: skip Lenis, let native scroll handle it
      gsap.ticker.lagSmoothing(0);
      return;
    }

    // Touch devices: use Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return <>{children}</>;
}
