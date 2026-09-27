export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  techs: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  featured: boolean;
  accentColor: string;
  year?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon: string }[];
}

export const DEVELOPER_INFO = {
  name: "Davi Linhares",
  tagline: "Desenvolvedor Web & Mobile",
  location: "Natal, RN — Brasil",
  institution: "IFRN (Campus Natal)",
  course: "Análise e Desenvolvimento de Sistemas (TADS)",
  status: "Disponível para Projetos & Estágio/Júnior",
  bio: "Estudante de Análise e Desenvolvimento de Sistemas no IFRN. Apaixonado por transformar ideias complexas em interfaces fluidas, aplicativos responsivos e arquiteturas de software sólidas — da tela ao banco de dados.",
  links: {
    instagram: "https://www.instagram.com/linharessdavi",
    linkedin: "https://www.linkedin.com/in/linharessdavi/",
    github: "https://github.com/DaviLinharess",
    whatsapp: "https://wa.me/5584981128912",
    email: "davimedeiroslinhares14@gmail.com",
  },
  stats: [
    { label: "Formação", value: "TADS IFRN" },
    { label: "Foco Principal", value: "Web & Mobile" },
    { label: "GitHub Badges", value: "Pull Shark x2" },
    { label: "Status", value: "Online 🟢" },
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "lp-winner-run",
    title: "Winner Run",
    category: "Landing Page Comercial",
    subtitle: "Assessoria Esportiva & Performance",
    description: "Landing Page institucional e de conversão projetada para a Assessoria de Corridas Winner Run. Possui estrutura responsiva mobile-first, apresentação de treinos, tabela de planos e CTA com foco em conversão.",
    techs: ["HTML5 Semântico", "Tailwind CSS", "JavaScript", "SEO", "Design Responsivo"],
    metrics: [
      { label: "Lighthouse", value: "98/100" },
      { label: "Tempo de Carregamento", value: "0.6s" },
      { label: "Conversão", value: "Alta" }
    ],
    githubUrl: "https://github.com/DaviLinharess/LP-Winner-Run",
    liveUrl: "https://winnerrun.com.br/",
    badge: "Web Comercial",
    featured: true,
    accentColor: "from-emerald-500/20 to-teal-600/10 border-emerald-500/40",
    year: "2025 - 2026",
    image: "/projects/winner-run.webp"
  },
  {
    id: "big-burgs-joao",
    title: "Big Burgs do João",
    category: "Landing Page Comercial",
    subtitle: "Hamburgueria Artesanal & Cardápio Digital",
    description: "Landing page institucional e cardápio digital de alta conversão desenvolvido para a hamburgueria Big Burgs do João. Focado em velocidade extrema, interface responsiva mobile-first e direcionamento dinâmico de pedidos.",
    techs: ["HTML5 Semântico", "Tailwind CSS", "JavaScript", "SEO", "Design Responsivo"],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Carregamento", value: "0.5s" },
      { label: "Conversão", value: "Otimizada" }
    ],
    githubUrl: "https://github.com/DaviLinharess",
    liveUrl: "https://bigburgsdojoao.netlify.app/",
    badge: "Web Comercial",
    featured: true,
    accentColor: "from-amber-500/20 to-orange-600/10 border-amber-500/40",
    year: "2025 - 2026",
    image: "/projects/big-burgs.webp"
  },
  {
    id: "paceweather",
    title: "PaceWeather",
    category: "Mobile Application",
    subtitle: "Sincronização de Clima & Ritmo Esportivo",
    description: "Aplicativo mobile desenvolvido em Flutter e Dart para corredores e atletas que buscam dados meteorológicos precisos (temperatura, vento, sensação térmica e umidade) aliados à análise de ritmo de treino e preparação física.",
    techs: ["Flutter", "Dart", "OpenWeather API", "Mobile UX", "Clean Architecture"],
    metrics: [
      { label: "Plataforma", value: "iOS / Android" },
      { label: "Arquitetura", value: "Modular" },
      { label: "Tempo Real", value: "< 1.2s" }
    ],
    githubUrl: "https://github.com/DaviLinharess/PaceWeather",
    badge: "Mobile • Flutter",
    featured: true,
    accentColor: "from-cyan-500/20 to-blue-600/10 border-cyan-500/40",
    year: "2026",
    image: "/projects/paceweather.webp"
  },
  {
    id: "ibf-natal",
    title: "Igreja Batista Filadélfia",
    category: "Portal Web Institucional",
    subtitle: "Plataforma Web & Comunicação Comunitária",
    description: "Portal institucional moderno para a Igreja Batista Filadélfia em Natal/RN. Desenvolvido com Angular e Tailwind CSS, integrando programação de cultos, ministérios, canais de transmissão e comunicação acolhedora.",
    techs: ["Angular", "Tailwind CSS", "TypeScript", "Design Responsivo", "Componentização"],
    metrics: [
      { label: "Ecossistema", value: "Angular" },
      { label: "Design", value: "Mobile-First" },
      { label: "Produção", value: "Ativo" }
    ],
    githubUrl: "https://github.com/DaviLinharess",
    liveUrl: "https://www.ibfnatal.com.br/",
    badge: "Web • Angular",
    featured: true,
    accentColor: "from-blue-500/20 to-indigo-600/10 border-blue-500/40",
    year: "2025 - 2026",
    image: "/projects/ibf-natal.webp"
  },
  {
    id: "ria-lab",
    title: "RIA - Aplicações com Interfaces Ricas",
    category: "Web Application",
    subtitle: "Reatividade & Micro-Interações Modernas",
    description: "Repositório de interfaces dinâmicas explorando padrões reativos de componentização, controle de estado avançado e animações.",
    techs: ["Angular", "TypeScript", "Tailwind CSS", "PrimeNG", "Componentização"],
    metrics: [
      { label: "Tipagem", value: "100% Strict" },
      { label: "Componentes", value: "Modulares" }
    ],
    githubUrl: "https://github.com/DaviLinharess/RIA",
    badge: "Web • TypeScript",
    featured: true,
    accentColor: "from-purple-500/20 to-pink-600/10 border-purple-500/40",
    year: "2025"
  },
  {
    id: "dsd-sistemas",
    title: "DSD - Desenvolvimento a Sistemas Distribuídos",
    category: "Backend & Redes",
    subtitle: "Comunicação em Nós, Sockets & Concorrência",
    description: "Sistema distribuído abordando conceitos essenciais de arquitetura de uma API REST, SOAP, Sockets, etc.",
    techs: ["Python", "Sockets TCP/UDP", "APIs REST", "Multithreading"],
    metrics: [
      { label: "Protocolo", value: "TCP / UDP" },
      { label: "Comunicação", value: "Assíncrona" },
      { label: "Consistência", value: "Validada" }
    ],
    githubUrl: "https://github.com/DaviLinharess/DSD",
    badge: "Backend & Redes",
    featured: true,
    accentColor: "from-amber-500/20 to-orange-600/10 border-amber-500/40",
    year: "2024 - 2025"
  },
  {
    id: "pa-bd",
    title: "PA-BD - Database Architecture",
    category: "Banco de Dados & Dados",
    subtitle: "Modelagem Relacional & Otimização SQL",
    description: "Soluções completas de banco de dados: modelagem entidade-relacionamento (DER), programação e administração em um banco de dados.",
    techs: ["SQL", "Python", "Express", "PostgreSQL"],
    metrics: [
      { label: "Normalização", value: "3FN / BCNF" },
      { label: "Integridade", value: "Relacional" }
    ],
    githubUrl: "https://github.com/DaviLinharess/PA-BD",
    badge: "Database",
    featured: false,
    accentColor: "from-sky-500/20 to-indigo-600/10 border-sky-500/40",
    year: "2024"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & UI",
    description: "Criação de interfaces responsivas, rápidas e visualmente marcantes.",
    skills: [
      { name: "Angular", level: "Avançado", icon: "hexagon" },
      { name: "React", level: "Intermediário", icon: "atom" },
      { name: "TypeScript", level: "Sólido", icon: "file-code" },
      { name: "JavaScript (ES6+)", level: "Avançado", icon: "code" },
      { name: "Tailwind CSS", level: "Avançado", icon: "palette" },
      { name: "HTML5 / CSS3 Semântico", level: "Especialista", icon: "layout" },
      { name: "Vite", level: "Sólido", icon: "zap" }
    ]
  },
  {
    title: "Mobile Development",
    description: "Aplicações nativas multiplataforma com foco em experiência do usuário.",
    skills: [
      { name: "Flutter", level: "Sólido", icon: "smartphone" },
      { name: "Dart", level: "Sólido", icon: "terminal" },
      { name: "Mobile UX/UI", level: "Avançado", icon: "sparkles" },
      { name: "Consumo de APIs REST", level: "Avançado", icon: "globe" }
    ]
  },
  {
    title: "Backend & Bancos de Dados",
    description: "Lógica de servidor, modelagem de dados e sistemas distribuídos.",
    skills: [
      { name: "Python", level: "Sólido", icon: "binary" },
      { name: "Node.js", level: "Intermediário", icon: "coffee" },
      { name: "Java", level: "Intermediário", icon: "coffee" },
      { name: "SQL", level: "Avançado", icon: "database" },
      { name: "Sistemas Distribuídos", level: "Acadêmico / Prático", icon: "network" },
      { name: "PostgreSQL", level: "Sólido", icon: "server" }
    ]
  },
  {
    title: "Ferramentas & Fluxo de Trabalho",
    description: "Ferramentas essenciais para desenvolvimento contínuo e qualidade de código.",
    skills: [
      { name: "Git & GitHub", level: "Avançado", icon: "git-branch" },
      { name: "VS Code / Ambiente Linux", level: "Avançado", icon: "terminal" },
      { name: "Postman", level: "Sólido", icon: "send" },
      { name: "Figma (Prototipação)", level: "Intermediário", icon: "figma" },
      { name: "Clean Code & Refatoração", level: "Prática Contínua", icon: "check-circle" }
    ]
  }
];

export const HIGHLIGHTS_METRICS = [
  { number: "5+", label: "Projetos em Destaque", desc: "Web, Mobile e Backend" },
  { number: "100%", label: "Dedicação & Aprendizado", desc: "Evolução técnica contínua" },
  { number: "TADS", label: "IFRN Natal", desc: "Ensino técnico & superior de excelência" },
  { number: "24/7", label: "Mentalidade Construtora", desc: "Foco em entrega e qualidade" },
];
