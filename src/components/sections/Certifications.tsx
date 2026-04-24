"use client";
import { SITE_DATA } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-24 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
      
      <div className="mb-16 flex items-center gap-8">
        <h2 className="font-clash text-5xl md:text-7xl uppercase font-semibold text-white">Recognition</h2>
        <div className="h-[1px] flex-1 bg-white/20 mt-4 md:mt-8 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
        {SITE_DATA.certifications.map((cert, i) => (
          <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/20 transition-colors duration-300">
            <div className="px-3 py-1.5 rounded-lg bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 font-mono text-[10px] text-[var(--cyan)] uppercase tracking-wider whitespace-nowrap flex-shrink-0">
              {cert.year}
            </div>
            <div>
              <div className="font-cabinet text-sm text-white/80 leading-snug mb-1">{cert.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/30">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Hackathons */}
      <div className="pt-12 border-t border-white/5">
        <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">{"// Competitions & Hackathons"}</h3>
        <div className="flex flex-wrap gap-4">
          {SITE_DATA.hackathons.map((h, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="font-mono text-[10px] text-[var(--cyan)] uppercase">{h.year}</span>
              <span className="font-cabinet text-sm text-white/70">{h.name}</span>
              {h.result !== "Participated" && (
                <span className="font-mono text-[10px] text-[var(--cyan)]/60 border border-[var(--cyan)]/20 px-2 py-0.5 rounded-full">{h.result}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
