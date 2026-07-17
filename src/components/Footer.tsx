import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold">
            {personalInfo.firstName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted sm:justify-start">
            Built with <Heart size={14} className="text-rose" /> using Next.js
            & Tailwind
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leetcode"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-sm text-muted">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
