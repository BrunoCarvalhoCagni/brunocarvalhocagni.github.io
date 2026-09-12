export const pt = {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      role: "Engenheiro de Computação & Desenvolvedor Fullstack",
      tagline: "",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
      status: "Disponível para novos desafios",
    },
    about: {
      title: "Sobre Mim",
      p1: "Engenheiro de Computação com sólida experiência na construção de soluções escaláveis e resilientes no ecossistema JavaScript/TypeScript (React, Next.js, Node.js), Python e PHP (Laravel).",
      p2: "Com experiência prática na modernização de sistemas legados, conteinerização com Docker e implementação microserviços.",
      p3: "Atualmente em preparação para a certificação AWS Solutions Architect – Associate e interessado no desenvolvimento de sistemas financeiros, engenharia de dados e integração de modelos de IA/ML em produção.",
    },
    projects: {
      title: "Projetos em Destaque",
      featuredBadge: "Destaque",
      viewRepo: "Repositório",
      liveDemo: "Ver Demo",
      list: [
        {
          title: "FraudRadar",
          subtitle: "Detecção de Fraudes em Tempo Real com ML & Event Streaming",
          description: "Plataforma distribuída inspirada no Stripe Radar. Utiliza Isolation Forest (Python/FastAPI) para scoring de anomalias, Redpanda (Kafka) para mensageria assíncrona, worker Node.js para motor de decisão e dashboard React para monitoramento ao vivo.",
          tags: ["Python", "FastAPI", "Isolation Forest", "Kafka / Redpanda", "Node.js", "React", "Tailwind CSS"],
          repoUrl: "https://github.com/BrunoCarvalhoCagni/fraud-radar",
          demoUrl: "#",
        },
        {
          title: "Share a Game",
          subtitle: "Plataforma Serverless de Recomendação de Jogos",
          description: "Aplicação crowd-sourced com Next.js (App Router, SSR/ISR), Supabase (PostgreSQL), camada de cache e rate limiting inteligente com Upstash (Redis) e integração com a Steam Web API.",
          tags: ["Next.js", "TypeScript", "Supabase", "Upstash Redis", "Steam API", "Tailwind CSS"],
          repoUrl: "#",
          demoUrl: "https://shareagame.vercel.app/",
        },
      ],
    },
    experience: {
      title: "Experiência Profissional",
      list: [
        {
          role: "Desenvolvedor Fullstack",
          company: "4Medic",
          period: "Jul 2023 – Jun 2026",
          description: "Liderança na refatoração completa de front-end legado com React, conteinerização de ambiente com Docker em arquitetura de microsserviços e desenvolvimento fullstack com Laravel e React Native.",
        },
        {
          role: "Desenvolvedor Trainee",
          company: "Arcano Projetos de Tecnologia",
          period: "Ago 2021 – Jul 2023",
          description: "Desenvolvimento de interfaces modernas e responsivas com React, Next.js e TypeScript, aplicando testes automatizados (Jest, Cypress, TDD) em sistemas para os setores industrial e comercial.",
        },
      ],
    },
    skills: {
      title: "Arsenal Tecnológico",
      categories: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Redux"] },
        { name: "Backend & ML", items: ["Node.js", "FastAPI", "Python", "PHP / Laravel", "Scikit-Learn", "Express", "NestJS"] },
        { name: "Dados & DevOps", items: ["Docker", "Kafka / Redpanda", "PostgreSQL", "Supabase", "Upstash Redis", "AWS", "Git/CI-CD"] },
        { name: "Segurança & Testes", items: ["TDD / Jest / Cypress", "Google Cybersecurity Cert", "OAuth / JWT", "Linux"] },
      ],
    },
    contact: {
      title: "Vamos Conversar?",
      description: "Estou aberto a oportunidades como Engenheiro de Software Fullstack / Backend. Envie uma mensagem e vamos construir algo incrível.",
      button: "Enviar E-mail",
    },
  };