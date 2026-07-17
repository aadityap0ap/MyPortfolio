"use client";

import { MapPin, Download } from "lucide-react";
import { about, personalInfo } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Passionate about building great products"
          subtitle="A glimpse into who I am and what drives me"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-cyan/20 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-2xl p-8">
                <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 via-surface-elevated to-cyan/20">
                  <span className="font-display text-6xl font-bold text-gradient">
                    {personalInfo.firstName.charAt(0)}
                    {personalInfo.name.split(" ")[1]?.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold">
                  {personalInfo.name}
                </h3>
                <p className="mt-1 text-accent-light">{personalInfo.title}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={16} />
                  {personalInfo.location}
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm transition-all hover:border-accent/50 hover:bg-accent/10"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {about.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
              </FadeIn>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {about.highlights.map((item, i) => (
                <FadeIn key={item.label} delay={0.2 + i * 0.1}>
                  <div className="glass glass-hover rounded-xl p-4 text-center transition-all">
                    <div className="font-display text-2xl font-bold text-gradient">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{item.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
