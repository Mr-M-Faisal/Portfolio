import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Faisal — Full-Stack Cloud Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Faisal, Software Engineering student and full-stack cloud developer building scalable apps with Next.js, Node.js and AWS.",
      },
      { property: "og:title", content: "Muhammad Faisal — Full-Stack Cloud Developer" },
      {
        property: "og:description",
        content:
          "Real-time apps, clean interfaces and AWS cloud infrastructure. Explore projects, skills and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
