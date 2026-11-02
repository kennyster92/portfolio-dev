// Personal details shown by the shell. Edit freely.
export const profile = {
  name: "Kevin Ceni",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible web apps — and break big frontends into small, independently shipped pieces.",
  location: "Uster, Switzerland",
  email: "kevinceni@gmail.com",
  links: {
    website: "https://kevinceni.ch",
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/kevin-ceni-232125149",
    instagram: "https://www.instagram.com/kevinceni_wildlife",
  },
  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Angular", "Redux", "GraphQL"] },
    { group: "Backend", items: ["Node.js", "Python", "FastAPI", "Spring Boot", "SQL"] },
    { group: "Medical imaging & AI", items: ["DICOM / PACS", "PyTorch", "ML pipelines", "Agentic workflows"] },
    { group: "Tooling", items: ["Docker", "Nginx", "CI/CD", "Azure DevOps", "Jest"] },
  ],
} as const;
