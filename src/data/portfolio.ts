export const personalInfo = {
  name: "Aditya Priyadarshi",
  firstName: "Aditya",
  title: "Full Stack Developer",
  tagline: "I craft elegant digital experiences that blend beautiful design with robust engineering.",
  email: "aditya.priyadarshi@email.com",
  location: "India",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/adityapriyadarshi",
    linkedin: "https://linkedin.com/in/adityapriyadarshi",
    twitter: "https://twitter.com/adityapriyadarshi",
  },
  resumeUrl: "#",
};

export const about = {
  bio: [
    "I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive solutions. With a keen eye for design and a deep understanding of modern web technologies, I build products that users love.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
  ],
  highlights: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies", value: "15+" },
    { label: "Happy Clients", value: "10+" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX", "Responsive Design", "Accessibility"],
  },
];

export const projects = [
  {
    title: "DevFlow",
    description:
      "A collaborative developer workspace with real-time code editing, integrated terminal, and team chat — built for remote-first engineering teams.",
    tags: ["Next.js", "WebSockets", "PostgreSQL", "Tailwind"],
    image: "/projects/devflow.svg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Aura Analytics",
    description:
      "Beautiful analytics dashboard with interactive charts, custom reports, and AI-powered insights for SaaS businesses.",
    tags: ["React", "D3.js", "Node.js", "Redis"],
    image: "/projects/aura.svg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "TaskForge",
    description:
      "Minimalist task management app with drag-and-drop boards, smart prioritization, and seamless calendar integration.",
    tags: ["TypeScript", "React", "Firebase", "Framer Motion"],
    image: "/projects/taskforge.svg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "WeatherLens",
    description:
      "Stunning weather application with animated backgrounds, 7-day forecasts, and location-based alerts.",
    tags: ["Next.js", "OpenWeather API", "CSS Animations"],
    image: "/projects/weather.svg",
    github: "#",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2024 — Present",
    description:
      "Leading frontend architecture for a SaaS platform serving 50K+ users. Implemented design system, improved performance by 40%, and mentored junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Craft Studio",
    period: "2022 — 2024",
    description:
      "Built and shipped 10+ client projects from concept to deployment. Specialized in React ecosystems and headless CMS integrations.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Labs",
    period: "2021 — 2022",
    description:
      "Contributed to MVP development, wrote unit tests, and collaborated on agile sprints. Gained foundational experience in modern web development.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
