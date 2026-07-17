"use client";

import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Experience"
          title="My journey so far"
          subtitle="Professional milestones that shaped my career"
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-8" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.15}>
                <div className="relative pl-16 sm:pl-20">
                  <div className="absolute left-4 top-2 h-4 w-4 rounded-full border-2 border-accent bg-background sm:left-6" />
                  <div className="glass glass-hover rounded-2xl p-6 transition-all hover:border-accent/30">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold">
                          {job.role}
                        </h3>
                        <p className="text-accent-light">{job.company}</p>
                      </div>
                      <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {job.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
