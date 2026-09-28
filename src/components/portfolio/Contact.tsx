import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05 — Contact" title="Let's build something together" />
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/30 blur-[90px]" />
            <p className="relative mx-auto max-w-lg text-lg text-muted-foreground">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <a
              href="mailto:mfaisalking68@gmail.com"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Send Mail: mfaisalking68@gmail.com
            </a>
            <div className="relative mt-8 flex justify-center gap-3">
              {[
                { href: "https://github.com/Mr-M-Faisal", Icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/muhammad-faisal-715080338/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="mx-auto mt-20 max-w-5xl border-t border-border/70 pt-8 text-center text-sm text-muted-foreground">
        © 2026 Muhammad Faisal. All rights reserved.
      </footer>
    </section>
  );
}
