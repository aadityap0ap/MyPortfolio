"use client";

import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isFeatured = project.featured;

  return (
    <FadeIn delay={index * 0.1} className={isFeatured ? "sm:col-span-2" : ""}>
      <article className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:border-accent/30">
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-accent/20 via-surface-elevated to-cyan/10 ${
            isFeatured ? "h-56" : "h-44"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
              {project.title}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent-light">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent-light"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={project.github}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Github size={16} />
              Code
            </a>
            <a
              href={project.live}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-light"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured work"
          subtitle="A selection of projects that showcase my skills and passion for development"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
