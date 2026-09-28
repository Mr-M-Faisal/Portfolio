import { Reveal, SectionHeading } from "./Reveal";
import faisal from "@/assets/faisal.png.asset.json";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01 — About" title="A developer with a cloud-first mindset" />
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="group relative mx-auto w-fit">
              <div className="animate-spin-slow absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-accent),transparent_70%)] opacity-80 blur-[2px]" />
              <img
                src="/faisal.png"
                alt="Portrait of Muhammad Faisal"
                loading="lazy"
                className="relative h-36 w-36 rounded-full object-cover ring-4 ring-background transition-transform duration-500 group-hover:scale-105 sm:h-44 sm:w-44"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass-card rounded-2xl p-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a Software Engineering student at NUML Faisalabad specializing in Full-Stack
                Web Development and Cloud Computing. I enjoy building real-time applications, clean
                user interfaces, and scalable backend services. My primary focus is working with
                modern web stacks and AWS cloud tools.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border/70 pt-6 text-center">
                {[
                  { k: "3+", v: "Major Projects" },
                  { k: "6+", v: "AWS Services" },
                  { k: "6", v: "Languages" },
                ].map((s) => (
                  <div key={s.v}>
                    <p className="font-display text-2xl font-bold text-accent">{s.k}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
