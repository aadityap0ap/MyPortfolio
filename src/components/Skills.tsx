"use client";

import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          subtitle="A curated stack of tools and frameworks I use to bring ideas to life"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <div className="glass glass-hover group h-full rounded-2xl p-6 transition-all hover:border-accent/30">
                <h3 className="font-display text-lg font-semibold">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-surface-elevated/50 px-3 py-1.5 text-sm text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
