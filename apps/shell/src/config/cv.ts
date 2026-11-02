// CV content shown on /cv, mirroring the downloadable PDF. Keep the two in sync.
export const cv = {
  // Served from apps/shell/public.
  pdf: { href: "/downloads/CV_KevinCeni.pdf", fileName: "CV_KevinCeni.pdf" },
  updated: "2026-09",
  headline: "Full-Stack Developer for Clinical and Biomedical Software",
  summary:
    "Full-stack developer with about six years of professional experience in TypeScript (React, Node.js) and Python, building and running data-intensive web platforms for hospital and biomedical research. At the Inselspital I work daily with DICOM data, clinical system integration and patient-data protection requirements; before that I led the frontend of a research platform at IRB. Dual background in Computer Engineering (BSc) and Biomedical Engineering (MSc). Currently preparing the AWS Certified Cloud Practitioner exam.",
  experience: [
    {
      role: "Full Stack Developer — Focus Frontend",
      company: "Inselspital — Neuroradiology",
      location: "Bern",
      period: "10/2022 — Present",
      highlights: [
        "Designed and developed responsive data-driven interfaces for the Medical Blocks Platform using React, GraphQL, and Node.js, enabling efficient exploration and analysis of medical imaging datasets.",
        "Architected frontend components and UI workflows for complex visualization tools used in biomedical research.",
        "Collaborated with backend teams to integrate APIs and optimize data flow for performance and usability.",
        "Containerized and developed Python-based services and AI/ML pipelines with Docker and integrated them into the platform.",
        "Built a Random Forest classifier that labels MRI and CT scans by sequence type from DICOM metadata, applied to real clinical data.",
        "Leveraged AI-assisted development tools (LLM-based) for prototyping, refactoring, and documentation within approved data-handling boundaries.",
      ],
    },
    {
      role: "Full Stack Developer — Focus Frontend",
      company: "Institute for Research in Biomedicine — Infection and Immunity",
      location: "Bellinzona",
      period: "05/2020 — 06/2022",
      highlights: [
        "Led frontend development of the Immunemap Platform, building scalable Angular interfaces for visualization and analysis of microscopy video data.",
        "Implemented interactive UI tools for tracking and exploring biological cell behavior in large datasets.",
        "Built and ran CI/CD pipelines with Azure DevOps for the platform's build, test and deployment process.",
      ],
    },
  ],
  education: [
    {
      degree: "MSc Biomedical Engineering",
      school: "University of Bern",
      location: "Bern",
      period: "09/2017 — 03/2020",
      highlights: [
        "Specialization in Image-Guided Therapy.",
        'Thesis: "Augmentation of Optical Coherence Tomography Biomarker detection with sparse labels" — trained a convolutional neural network to classify and locate biological markers in the eye, helping clinicians diagnose eye-related diseases.',
      ],
    },
    {
      degree: "BSc Computer Engineering",
      school: "SUPSI — Scuola universitaria professionale della Svizzera italiana",
      location: "Manno",
      period: "09/2012 — 07/2016",
      highlights: [
        'Thesis: "2D & 3D image processing for industrial application" — an application that recognizes a device and detects whether it is mounted correctly on a rotating table.',
      ],
    },
    {
      degree: "Apprenticeship — Mediamatic (Federal Diploma, with Technical High School Diploma)",
      school: "Swisscom SA",
      location: "Bellinzona",
      period: "09/2008 — 06/2012",
      highlights: [
        "Provided IT assistance, troubleshooting, and user support for staff and students.",
        "Assisted human resources operations and prepared technical documentation for field technicians.",
        "Delivered customer support for home technology products (TV, internet and mobile services).",
        'Thesis: "Configuration of Notebooks" — a simplified, partially automated installation and first setup of students\' notebooks.',
      ],
    },
  ],
  projects: [
    {
      title: "Website — kevinceni.ch",
      period: undefined,
      description:
        "Developed and maintained a personal website to strengthen my skills in TypeScript and Java Spring Boot. Built a responsive frontend and implemented backend services featuring JPA-based database integration, as well as authentication and authorization mechanisms.",
    },
    {
      title: "AI Agent — Autonomous Social Media Automation",
      period: "2025 — Present",
      description:
        "Designed and built an autonomous agent to manage a wildlife photography Instagram account. The agent monitors a folder for new shots, generates fitting captions using Claude's image analysis (Vision), and publishes posts automatically. A Next.js interface enables reviewing, manually editing, and regenerating content before approval.",
    },
  ],
  // level: 1–5
  languages: [
    { name: "Italian", label: "Native", level: 5 },
    { name: "English", label: "B2+", level: 4 },
    { name: "German", label: "B2", level: 4 },
    { name: "French", label: "B1", level: 3 },
  ],
  skills: [
    {
      group: "Technical",
      items: [
        "TypeScript", "React", "Node.js", "Python", "FastAPI", "REST API", "GraphQL", "SQL", "Docker", "Nginx",
        "JavaScript", "HTML", "CSS", "Redux", "Jest", "DICOM / PACS", "Java", "Spring Boot", "Angular", "PyTorch",
        "PHP", "Symfony", "BabylonJS", "CI/CD", "Azure DevOps",
      ],
    },
    { group: "AI", items: ["AI-Assisted Development", "Agentic Workflows", "Prompt Engineering"] },
    {
      group: "Tools",
      items: ["Visual Studio Code", "GitHub", "Jira", "Unix", "macOS", "Windows", "Lightroom", "Photoshop", "Final Cut Pro"],
    },
    {
      group: "Soft skills",
      items: [
        "Client Communication", "Teamwork", "Analytical Thinking", "Problem Solving", "Creativity", "Reliability",
        "Initiative", "Attention to Detail", "Adaptability",
      ],
    },
  ],
  certificates: [
    { title: "Cambridge First Certificate (FCE)", detail: "Language course in Dublin, Ireland (02/2017 — 06/2017) · B2" },
    { title: "Test Deutsch als Fremdsprache (TestDaF)", detail: "Language course in Münster, Germany (10/2016 — 02/2017) · B2+" },
    { title: "Swiss Mediamatic's Thesis", detail: "9th position for best Mediamatic thesis in Switzerland (2012)" },
  ],
  interests: ["Photography", "Video editing", "Birdwatching", "Hiking", "Kayaking", "Drawing", "Cycling"],
} as const;
