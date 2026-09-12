export const en = {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      role: "Computer Engineer & Fullstack Developer",
      tagline: "",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      status: "Open for opportunities",
    },
    about: {
      title: "About Me",
      p1: "Computer Engineer with solid experience architecting scalable, resilient solutions across JavaScript/TypeScript (React, Next.js, Node.js), Python, and PHP (Laravel).",
      p2: "Proven background in modernizing legacy systems, Docker containerization, and microservices implementation.",
      p3: "Currently preparing for the AWS Solutions Architect – Associate certification and interested in financial systems development, data engineering, and the integration of AI/ML models into production.",
    },
    projects: {
      title: "Featured Projects",
      featuredBadge: "Featured",
      viewRepo: "Repository",
      liveDemo: "Live Demo",
      list: [
        {
          title: "FraudRadar",
          subtitle: "Real-Time Fraud Detection with ML & Event Streaming",
          description: "A distributed fintech platform inspired by Stripe Radar. Powered by Isolation Forest (Python/FastAPI) for anomaly inference, Redpanda (Kafka) for event streaming, Node.js decision worker, and a live React dashboard.",
          tags: ["Python", "FastAPI", "Isolation Forest", "Kafka / Redpanda", "Node.js", "React", "Tailwind CSS"],
          repoUrl: "https://github.com/BrunoCarvalhoCagni/fraud-radar",
          demoUrl: "#",
        },
        {
          title: "Share a Game",
          subtitle: "Serverless Game Curation & Recommendation Platform",
          description: "Crowd-sourced platform built with Next.js (App Router, SSR/ISR), Supabase (PostgreSQL), high-speed in-memory cache and smart rate limiting with Upstash (Redis), deeply integrated with the Steam Web API.",
          tags: ["Next.js", "TypeScript", "Supabase", "Upstash Redis", "Steam API", "Tailwind CSS"],
          repoUrl: "#",
          demoUrl: "https://shareagame.vercel.app/",
        },
      ],
    },
    experience: {
      title: "Experience",
      list: [
        {
          role: "Fullstack Developer",
          company: "4Medic",
          period: "Jul 2023 – Jun 2026",
          description: "Led the full frontend modernization of a legacy healthcare platform with React, implemented Docker containerization for microservices architecture, and maintained critical APIs in Laravel and React Native.",
        },
        {
          role: "Trainee Developer",
          company: "Arcano Projetos de Tecnologia",
          period: "Aug 2021 – Jul 2023",
          description: "Built modern responsive interfaces with React, Next.js, and TypeScript. Implemented automated testing suites (Jest, Cypress, TDD) for custom industrial and enterprise retail applications.",
        },
      ],
    },
    skills: {
      title: "Technical Arsenal",
      categories: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Redux"] },
        { name: "Backend & ML", items: ["Node.js", "FastAPI", "Python", "PHP / Laravel", "Scikit-Learn", "Express", "NestJS"] },
        { name: "Data & DevOps", items: ["Docker", "Kafka / Redpanda", "PostgreSQL", "Supabase", "Upstash Redis", "AWS", "Git/CI-CD"] },
        { name: "Security & Testing", items: ["TDD / Jest / Cypress", "Google Cybersecurity Cert", "OAuth / JWT", "Linux"] },
      ],
    },
    contact: {
      title: "Let's Connect",
      description: "I am actively exploring opportunities as a Fullstack / Backend / Distributed Systems Engineer. Feel free to reach out.",
      button: "Send Email",
    },
  };