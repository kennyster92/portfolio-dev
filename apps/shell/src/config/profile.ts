// Personal details shown by the shell. Edit freely.
export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible web apps — and break big frontends into small, independently shipped pieces.",
  location: "Uster, Switzerland",
  email: "kevinceni@gmail.com",
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
    { group: "Architecture", items: ["Microfrontends", "Module Federation", "Design Systems"] },
    { group: "Backend", items: ["Node.js", "REST", "PostgreSQL"] },
    { group: "Tooling", items: ["pnpm workspaces", "CI/CD", "Testing"] },
  ],
} as const;
