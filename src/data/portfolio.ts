export const personalInfo = {
  name: "Aditya Priyadarshi",
  firstName: "Aditya",
  title: "Software Engineer",
  tagline: "Portfolio of Aditya Priyadarshi — Software Engineer passionate about building scalable applications, solving complex problems, and continuously exploring new technologies.",
  email: "priyadarshiaditya450@gmail.com",
  location: "India",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/aadityap0ap",
    linkedin: "https://www.linkedin.com/in/aditya-priyadarshi-962737279/",
    leetcode: "https://leetcode.com/u/aaditya0805ap/",
  },
  resumeUrl: "#",
};

export const about = {
  bio: [
    "I'm a Software Engineer who enjoys building reliable, scalable, and user-focused software. I love transforming complex ideas into clean, efficient solutions while combining strong computer science fundamentals with modern development practices. Whether it's designing intuitive user experiences, developing robust backend systems, or solving challenging algorithmic problems, I strive to build software that creates real impact . Beyond writing code, I'm constantly learning and exploring new technologies, sharpening my engineering skills, contributing to meaningful projects, and sharing knowledge with the developer community. I believe that great engineering is driven by curiosity, continuous improvement, and a commitment to building better software every day.",
  ],
  highlights: [
    { label: "Years Experience", value: "Fresher" },
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies", value: "9+" },
    { label: "Happy Clients", value: "4+" },
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
