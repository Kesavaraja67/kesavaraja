"use client";
import { useRef } from "react";
import Link from "next/link";
import { useGSAP, gsap } from "@/lib/gsap";
import { SITE_DATA } from "@/lib/data";

export default function OpenSource() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".os-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="open-source" ref={containerRef} className="relative w-full py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
      
      <div className="mb-16 flex items-center gap-8">
        <h2 className="font-clash text-5xl md:text-7xl uppercase font-semibold text-white">Open Source</h2>
        <div className="h-[1px] flex-1 bg-white/20 mt-4 md:mt-8 hidden md:block"></div>
      </div>

      {/* Summary bar */}
      <div className="flex flex-wrap gap-8 mb-20 font-mono text-xs uppercase tracking-widest">
        <span className="text-[var(--cyan)]">2 PRs Merged</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">+1,896 Lines Added</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">26 Tests Passing</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">86.63% Coverage</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">All SonarQube Gates Cleared</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SITE_DATA.openSource.map((contrib) => (
          <Link 
            key={contrib.id} 
            href={contrib.prLink} 
            target="_blank"
            className="os-card group relative flex flex-col gap-6 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-[var(--cyan)]/60 hover:bg-[var(--cyan)]/[0.03] transition-all duration-500 cursor-none"
          >
            {/* Repo header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                  {contrib.repoDescription}
                </div>
                <div className="font-mono text-sm text-[var(--cyan)] mb-1">{contrib.repo}</div>
                <div className="font-mono text-xs text-white/50">
                  {contrib.pr} · Merged {contrib.mergedDate}
                </div>
              </div>
              <div className="font-clash text-3xl md:text-4xl font-semibold text-[var(--cyan)] opacity-40 group-hover:opacity-100 transition-opacity">
                {contrib.linesAdded}
              </div>
            </div>

            {/* PR Title */}
            <div className="font-cabinet text-base md:text-lg text-white/80 leading-relaxed">
              {contrib.prTitle}
            </div>

            {/* Summary */}
            <div className="font-cabinet text-sm text-white/50 leading-relaxed">
              {contrib.summary}
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
              {contrib.highlights.map((h) => (
                <span key={h} className="px-3 py-1 rounded-full border border-[var(--cyan)]/20 bg-[var(--cyan)]/5 font-mono text-[10px] uppercase tracking-wider text-[var(--cyan)]/80">
                  {h}
                </span>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {contrib.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white/40">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
