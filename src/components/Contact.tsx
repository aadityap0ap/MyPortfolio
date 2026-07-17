"use client";

import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message!"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="glass glass-hover flex items-center gap-4 rounded-xl p-4 transition-all"
                >
                  <div className="rounded-lg bg-accent/10 p-3 text-accent-light">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <p className="text-sm font-medium">{personalInfo.email}</p>
                  </div>
                </a>
                <div className="glass flex items-center gap-4 rounded-xl p-4">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent-light">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 sm:w-auto"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
