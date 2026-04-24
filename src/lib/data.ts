export const SITE_DATA = {
  name: "Kesavaraja M",
  role: "AI Engineer & Full Stack Developer",
  tagline: "Building the intersection of Intelligence and Interaction.",
  location: "Tiruchirappalli, India",
  email: "krkesavaraja67@gmail.com",
  github: "github.com/Kesavaraja67",
  linkedin: "linkedin.com/in/kesavaraja-m",
  twitter: "https://x.com/KesavaRaja70355",
  available: true,
  cgpa: "9.02",
  university: "SRMIST Trichy",
  degree: "B.Tech CSE",
  expectedGrad: "May 2027",
  yearsExp: "1+",
  projectsCount: "15+",
  openSourceCount: "2",
  linesOfCode: "1,896+",
  certCount: "8+",
  about: "I build systems that are as rigorous as they are beautiful. From production SaaS platforms serving real users to open-source contributions merged into AI operating systems — I obsess over the full stack: schema design, security architecture, performance, and the last pixel. CGPA 9.02 at SRMIST Trichy. Currently looking for my next challenge.",

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology (SRMIST), Tiruchirappalli",
    duration: "June 2023 – May 2027 (Expected)",
    cgpa: "9.02 / 10.0",
    status: "2nd Year (Junior)",
    courses: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"]
  },

  projects: [
    {
      id: "75-club",
      number: "01",
      title: "75 Club",
      category: "SaaS / Productivity",
      year: "2026",
      outcome: "Production SaaS PWA — 95+ Lighthouse score.",
      description: "A full-stack production SaaS platform for Indian college students. Architected end-to-end: multi-tenant PostgreSQL schemas, FastAPI backend, OCR + AI timetable scanner, Razorpay payment integration, and a safe bunk calculator. Deployed on Vercel with full CI/CD.",
      tech: ["Next.js 15", "TypeScript", "FastAPI", "PostgreSQL", "Supabase", "Docker", "Razorpay", "OCR", "PWA"],
      metrics: ["95+ Lighthouse Score", "Multi-tenant", "CI/CD on Vercel"],
      link: "https://75club.vercel.app/",
      github: "https://github.com/Kesavaraja67/75-club"
    },
    {
      id: "compliance-sentinel",
      number: "02",
      title: "Compliance Sentinel",
      category: "Security / Microservice",
      year: "2025",
      outcome: "100% attack block rate. Sub-ms API latency.",
      description: "A production-ready RESTful compliance microservice with a 3-layer backend defense architecture. Built for the Archestra.ai 'Two Fast Two MCP' Hackathon. Features PII redaction, audit logging, SQL read-only enforcement, and full containerization.",
      tech: ["Java", "Python", "FastAPI", "Docker", "SQLite", "Pytest"],
      metrics: ["100% Attack Block Rate", "Sub-ms Latency", "Hackathon Project"],
      link: "https://github.com/Kesavaraja67/compliance-sentinel-mcp",
      github: "https://github.com/Kesavaraja67/compliance-sentinel-mcp"
    },
    {
      id: "cube-buddy",
      number: "03",
      title: "Cube Buddy",
      category: "Computer Vision",
      year: "2025",
      outcome: "Real-time Rubik's cube solver — 95% detection accuracy.",
      description: "Real-time Rubik's cube state detection and solver. Detects cube face colors from a live camera stream using OpenCV, maps them into a structured state model, and computes optimal solution paths using BFS and A* graph traversal in Java.",
      tech: ["Java", "Python", "OpenCV", "BFS", "A* Algorithm", "TypeScript"],
      metrics: ["95% Detection Accuracy", "Real-time 30FPS", "Optimal Path Finding"],
      link: "https://github.com/Kesavaraja67/Cube-Buddy",
      github: "https://github.com/Kesavaraja67/Cube-Buddy"
    },
    {
      id: "nextgen-traffic",
      number: "04",
      title: "NextGen Traffic Insights",
      category: "AI / Computer Vision",
      year: "2024",
      outcome: "52+ vehicles classified per session at stable 30 FPS.",
      description: "AI-powered real-time traffic analysis system. Fine-tuned a YOLOv8 model for traffic-specific vehicle classification. Implemented priority queues and spatial hash maps to eliminate performance bottlenecks and achieve stable real-time inference.",
      tech: ["Python", "YOLOv8", "OpenCV", "Priority Queues", "Spatial Hash Maps"],
      metrics: ["30 FPS Stable", "52+ Vehicles/Session", "Fine-tuned YOLOv8"],
      link: "https://github.com/Kesavaraja67/NextGen-Traffic-Insights",
      github: "https://github.com/Kesavaraja67/NextGen-Traffic-Insights"
    },
    {
      id: "infinite-whiteboard",
      number: "05",
      title: "Infinite Whiteboard",
      category: "Full Stack / Real-Time",
      year: "2024",
      outcome: "Low-latency collaborative space for real-time team brainstorms.",
      description: "Highly performant virtual whiteboard with WebSocket-driven real-time collaboration. Infinite panning, dynamic zooming, multi-user cursors, and instant state synchronization across distributed clients.",
      tech: ["TypeScript", "React", "WebSockets", "Node.js"],
      metrics: ["Real-time Sync", "Multi-user", "Infinite Canvas"],
      link: "https://infinite-whiteboard.vercel.app",
      github: "https://github.com/Kesavaraja67/Infinite-Whiteboard"
    }
  ],

  openSource: [
    {
      id: "cx-core-521",
      repo: "cxlinux-ai/cx-core",
      repoDescription: "AI-Native Operating System",
      pr: "#521",
      prTitle: "feat: implement Docker permission fixer and diagnosis tool",
      prLink: "https://github.com/cxlinux-ai/cx-core/pull/521",
      mergedDate: "January 6, 2026",
      linesAdded: "+582",
      tech: ["Python", "Docker", "Linux", "Pytest", "YAML", "WSL2"],
      summary: "Implemented a PermissionManager module to diagnose Docker root-owned file lockouts. Engineered ARG_MAX-safe batching logic, YAML structural parsing for docker-compose.yml, and real UID/GID detection in WSL2. Wrote 6/6 Pytest tests. Passed all SonarQube gates.",
      highlights: ["6/6 Pytest Tests", "+582 Lines", "SonarQube Passed", "Zero Security Hotspots"]
    },
    {
      id: "cx-core-542",
      repo: "cxlinux-ai/cx-core",
      repoDescription: "AI-Native Operating System",
      pr: "#542",
      prTitle: "feat: system role management and package recommendations",
      prLink: "https://github.com/cxlinux-ai/cx-core/pull/542",
      mergedDate: "January 14, 2026",
      linesAdded: "+1,314",
      tech: ["Python", "FastAPI", "SQLite", "Pytest", "YAML", "Linux"],
      summary: "Full RoleManager architecture — AI-driven system role detection, privacy-hardened shell history parsing with PII redaction and path anonymization, deterministic cross-platform file locking, and audit-compliant SQLite persistence. 20/20 tests, 86.63% coverage.",
      highlights: ["20/20 Pytest Tests", "86.63% Coverage", "+1,314 Lines", "7-Commit Review Cycle"]
    }
  ],

  certifications: [
    { name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle University", year: "2025", badge: "OCI GenAI" },
    { name: "SQL (Advanced)", issuer: "HackerRank", year: "2025", badge: "SQL Advanced" },
    { name: "Introduction to Artificial Intelligence", issuer: "IBM / Coursera", year: "2025", badge: "IBM AI" },
    { name: "Google Advanced Data Analytics Capstone", issuer: "Google / Coursera", year: "2025", badge: "Google DA" },
    { name: "Discrete Mathematics for CS and Engineering", issuer: "BITS Pilani / Coursera", year: "2025", badge: "BITS Pilani" },
    { name: "Advanced Probability and Statistical Methods", issuer: "Johns Hopkins / Coursera", year: "2025", badge: "JHU Stats" },
  ],

  hackathons: [
    { name: "Archestra.ai — 2 Fast 2 MCP Hackathon", result: "Built Compliance Sentinel", year: "2025" },
    { name: "GEO HACK 1.0 — IEEE GRSS Geospatial Hackathon", result: "Participated", year: "2025" },
    { name: "Amazon ML Challenge 2024", result: "Participated", year: "2024" },
    { name: "TATA Crucible Campus Quiz 2025", result: "Participated", year: "2025" },
  ],

  skills: {
    languages: ["Java", "TypeScript", "Python", "JavaScript", "C++", "SQL"],
    frontend: ["React.js", "Next.js 15", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
    backend: ["Node.js", "FastAPI", "Spring Boot", "RESTful APIs", "Microservices"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Supabase"],
    devops: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux", "WSL2", "SonarQube"],
    ai: ["YOLOv8", "OpenCV", "TensorFlow", "BFS/A*", "OCR Pipelines", "LLM Integration"],
  },

  process: [
    { id: "01", title: "Understand", description: "Mapping constraints, users, and edge cases before writing a single line." },
    { id: "02", title: "Architect", description: "Schema design, API contracts, component hierarchy — in that order." },
    { id: "03", title: "Build", description: "Performant, tested, documented. SOLID principles. Zero shortcuts on quality gates." },
    { id: "04", title: "Ship", description: "CI/CD, Lighthouse 95+, then iterate. Launched is always better than perfect." }
  ]
};
