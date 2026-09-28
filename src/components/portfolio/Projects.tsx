import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    title: "Smart Public Transit Tracking System (FYP)",
    description:
      "Cloud-native Progressive Web Application for real-time transit tracking and updates.",
    tech: ["Next.js", "React", "Node.js", "Socket.IO", "MongoDB Atlas", "AWS Cloud"],
  },
  {
    title: "Internet Speed Test Tool",
    description:
      "Desktop & CLI application for measuring ping, network speed, and ISP details.",
    tech: ["Java", "C++", "Networking Protocols"],
  },
  {
    title: "Full-Stack E-Commerce Interface",
    description:
      "Responsive web app featuring database integration, custom UI design, and backend Web APIs.",
    tech: ["React.js", "C#", "ADO.NET", "SQL Server", "REST API"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Featured work"
          description="Selected builds that combine real-time systems, clean interfaces and cloud infrastructure."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
                <span className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="chip font-mono !text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2 pt-7">
                  <a
                    href="#contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/Mr-M-Faisal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
