import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04 — Education" title="Academic background" />
        <Reveal>
          <div className="glass-card rounded-2xl p-7 sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Software Engineering (BSSE)
                </h3>
                <p className="mt-2 text-muted-foreground">
                  National University of Modern Languages (NUML), Faisalabad Campus
                </p>
                <p className="mt-6 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  Core Focus
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Cloud Computing (AWS Infrastructure)",
                    "Software Engineering",
                    "Web Development",
                  ].map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
