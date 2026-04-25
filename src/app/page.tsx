import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const MarqueeBand = dynamic(() => import("@/components/sections/MarqueeBand"));
const About = dynamic(() => import("@/components/sections/About"));
const Work = dynamic(() => import("@/components/sections/Work"));
const OpenSource = dynamic(() => import("@/components/sections/OpenSource"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Certifications = dynamic(() => import("@/components/sections/Certifications"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MarqueeBand />
      <About />
      <Work />
      <OpenSource />
      <Skills />
      <Certifications />
      <Process />
      <section id="education" className="relative w-full py-20 bg-[var(--bg)] z-10 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan)] mb-4">// Education</div>
            <div className="font-clash text-2xl md:text-3xl font-semibold text-white mb-2">B.Tech Computer Science</div>
            <div className="font-cabinet text-white/50 mb-1">SRMIST Tiruchirappalli</div>
            <div className="font-mono text-xs text-white/30 mb-6">June 2023 – May 2027</div>
            <div className="text-5xl font-clash font-semibold text-[var(--cyan)]">9.02<span className="text-xl text-white/30"> / 10.0</span></div>
            <div className="font-mono text-xs uppercase tracking-widest text-white/40 mt-1">CGPA</div>
          </div>
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan)] mb-4">// Quick Stats</div>
            <div className="flex flex-col gap-4">
              {[
                { label: "PRs Merged to Production OS", value: "2" },
                { label: "Lines of Code Contributed", value: "+1,896" },
                { label: "Test Pass Rate", value: "100%" },
                { label: "Lighthouse Performance", value: "95+" },
                { label: "Attack Block Rate (Compliance)", value: "100%" },
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="font-cabinet text-sm text-white/50">{stat.label}</span>
                  <span className="font-clash text-xl font-semibold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
