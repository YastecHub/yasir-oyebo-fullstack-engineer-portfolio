import { Project, ExperienceItem, Skill, SkillType } from './types';

export const HERO_DATA = {
  name: "Yasir Oyebo",
  fullName: "Yasir Oyebo Oladimeji",
  tagline: "Backend Software Engineer | Distributed Systems, Microservices, C#/.NET, Kafka, Redis, SQL",
  bio: "Backend Software Engineer specializing in event-driven microservices, distributed caching (Redis), Kafka event streaming, LLM API integration, and SQL performance optimization across fintech, e-commerce, and AI domains. Delivered production systems processing 10,000+ daily transactions using Clean Architecture, CQRS, DDD, and fault-tolerant microservice patterns.",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "yasiroyebo@gmail.com",
  phone: "+234 906 891 3009",
  resumeUrl: "/Yasir_Oyebo_Resume.pdf",
  googleDriveResumeUrl: "https://drive.google.com/file/d/1rXIhmDofBgO1s50vHLWsyqiZRzdSqr3A/view?usp=sharing",
  localResumeUrl: "/Yasir_Oyebo_Resume.pdf",
  github: "https://github.com/YastecHub",
  linkedin: "https://linkedin.com/in/yasir-oyebo0"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "whitteintel",
    role: "Software Engineer",
    company: "Whitteintel Limited",
    period: "Jan 2026 – Present",
    description: "Architecting high-concurrency backend services for enterprise and cooperative finance in Lagos, Nigeria.",
    highlights: [
      "Architected WhitteIntelCoop, a versioned (v1/v2) ASP.NET Core API applying CQRS + MediatR to decouple read and write workloads, reducing query latency under write-heavy load.",
      "Implemented role-based access control (RBAC) with JWT and layered middleware, enforcing fine-grained authorization across all API surfaces with EF Core Unit of Work for transactional integrity.",
      "Established an xUnit test strategy (unit + integration) covering critical paths; containerized with Docker Compose and introduced Serilog request-tracing for production observability."
    ]
  },
  {
    id: "codefactory",
    role: "Full Stack Engineer (Contract)",
    company: "Codefactory Innovative Hub",
    period: "Jun 2025 – Dec 2025",
    description: "Delivered scalable fintech ledger microservices and high-throughput commerce APIs in Lagos, Nigeria.",
    highlights: [
      "Engineered a production Wallet-as-a-Service (WaaS) platform on ASP.NET Core + Clean Architecture, delivering 15+ RESTful endpoints for wallet creation, KYC, balance management, and transaction history.",
      "Extracted the wallet ledger into an independent microservice, streaming transaction events via Apache Kafka to decouple ledger writes from WaaS core and enable independent scaling.",
      "Achieved 45% reduction in p95 API response times through targeted DB index design, query-plan analysis, and covering-index strategies on SQL Server hot paths across WaaS and GrowthGIA.",
      "Launched GrowthGIA to production with 25+ REST APIs across Commerce, Identity, and Logistics; integrated Redis caching to cut database read load by ~60% at peak volume."
    ]
  },
  {
    id: "teknikforce",
    role: ".NET Backend Developer (Contract)",
    company: "Teknikforce",
    period: "Jan 2025 – May 2025",
    description: "Modernized enterprise SaaS backends for international cross-timezone engineering teams in Delhi, India.",
    highlights: [
      "Modernized enterprise SaaS backend through a .NET 6 → .NET 8 migration, rebuilding JWT authentication, RBAC, and secure cookies with zero-downtime deployment across 5+ client projects.",
      "Shipped secure RESTful APIs in a hybrid .NET/Node.js architecture with structured validation and global exception-handling middleware, reducing production incidents by 30%."
    ]
  },
  {
    id: "hng",
    role: "Backend Developer (Intern)",
    company: "HNG Tech",
    period: "Feb 2024 – Mar 2024",
    description: "Developed resilient AI and communication integrations for Telex in Lagos, Nigeria.",
    highlights: [
      "Integrated GroqAI LLM API into Telex (telex.im) with retry logic, exponential backoff, and circuit-breaker patterns, cutting endpoint error rates by 40% under high-concurrency load.",
      "Advanced to the Finalist Stage of the HNG Backend Track within a 7-developer Agile team, placing in the top percentile of program participants using Clean Architecture."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "growthgia",
    title: "GrowthGIA API",
    category: "Production E-Commerce Platform",
    challenge: "High-volume catalog reads and multi-context transactions needed isolated domain boundaries without sacrificing ACID safety.",
    solution: "Structured a .NET 10 modular monolith across Commerce, Identity, and Logistics using DDD and Vertical Slice Architecture. Layered Redis TTL-based cache invalidation on product catalog and pricing endpoints.",
    impact: "Cut database round-trips by ~60% at peak traffic, maintained P99 latency SLA, and served 25+ production endpoints.",
    tech: [".NET 10", "PostgreSQL", "Redis", "DDD", "Vertical Slice Architecture"],
    imagePath: "/mansorySupplyHub.png",
    github: "https://github.com/YastecHub",
    mockupPrompt: "E-commerce architecture: domain modular monolith, Redis caching layer, PostgreSQL data store, and order fulfillment pipeline.",
    stats: [{ label: "APIs", value: "25+" }, { label: "DB Read Load", value: "~60% Cut" }, { label: "Architecture", value: "Modular Monolith" }]
  },
  {
    id: "waas",
    title: "WAAS: Wallet as a Service",
    category: "Fintech Ledger Microservice",
    challenge: "Real-time wallet transactions required zero ledger write contention, auditable trails, and prevention of duplicate charges upon message replay.",
    solution: "Implemented Unit of Work + Kafka event streaming in the production ledger microservice, with idempotent Kafka consumer handlers guaranteeing transactional consistency across broker restarts.",
    impact: "Supported 10,000+ daily transactions with auditable, at-least-once processing and 45% lower p95 latency.",
    tech: ["C#", ".NET 8", "Apache Kafka", "EF Core", "SQL Server", "Clean Architecture"],
    imagePath: "/waasImage.png",
    github: "https://github.com/YastecHub",
    mockupPrompt: "Wallet-as-a-Service architecture: Kafka stream, ledger ledger worker, SQL Server index execution plan, and audit logs.",
    stats: [{ label: "Daily Txns", value: "10,000+" }, { label: "Latency p95", value: "-45%" }, { label: "Guarantee", value: "At-least-once" }]
  },
  {
    id: "whitteintelcoop",
    title: "WhitteIntelCoop API",
    category: "Enterprise Cooperative Platform",
    challenge: "Cooperative operations suffered slow reporting queries due to resource contention between heavy operational writes and complex analytical reads.",
    solution: "Architected a versioned (v1/v2) ASP.NET Core API applying CQRS and MediatR to decouple query paths from command writes, enforced by fine-grained JWT RBAC and EF Core Unit of Work.",
    impact: "Eliminated read-write bottlenecks under peak load, established automated xUnit CI pipelines, and integrated Serilog tracing.",
    tech: ["ASP.NET Core", "CQRS", "MediatR", "EF Core", "Docker Compose", "Serilog"],
    github: "https://github.com/Whitteintel/AMJNReportSystem",
    imagePath: "/amjnReportSystem.png",
    mockupPrompt: "Enterprise cooperative API: CQRS separation, MediatR command handlers, EF Core Unit of Work, and Docker deployment.",
    stats: [{ label: "Pattern", value: "CQRS + MediatR" }, { label: "Auth", value: "JWT RBAC" }, { label: "Testing", value: "xUnit Unit+Int" }]
  },
  {
    id: "hostelsync-ai",
    title: "HostelSync AI",
    category: "Predictive Hostel Allocation Platform",
    challenge: "Manual university accommodation allocation created systemic delays and unfairly disadvantaged economically vulnerable students.",
    solution: "Engineered a two-stage AI allocation engine combining an algorithmic Housing Vulnerability Index with spatial optimization to evaluate student eligibility and bed distribution.",
    impact: "Processed 3,000+ applications in 0.34 seconds, achieving a 16x lift in bed-assignment rates for lowest-income students. Won 1st Place at the UNILAG Hackathon.",
    tech: ["FastAPI", "Python", "Spatial Optimization", "AI Scoring", "REST APIs"],
    mockupPrompt: "AI allocation engine: Housing Vulnerability Index scoring, spatial matrix distribution, and allocation queue metrics.",
    stats: [{ label: "Honor", value: "1st Place" }, { label: "Applications", value: "3,000+" }, { label: "Latency", value: "0.34s" }]
  },
  {
    id: "sentra",
    title: "Sentra",
    category: "AI Healthcare & Accessibility Platform",
    challenge: "Accessible medical intake needed a unified, low-latency backend supporting multi-modal inputs including text, audio, and visual documents.",
    solution: "Engineered an LLM-powered NestJS service combining symptom analysis, voice-to-diagnosis, OCR parsing, and obstacle detection behind 10+ Swagger-documented REST endpoints.",
    impact: "Delivered a production-ready accessibility backend; recognized with 3rd Place at the TOS Hub Hackathon.",
    tech: ["TypeScript", "NestJS", "GroqAI / LLM", "OCR", "Swagger / OpenAPI"],
    imagePath: "/telexImage.png",
    mockupPrompt: "AI accessibility platform: voice-to-diagnosis stream, OCR parser, symptom inference, and Swagger API documentation.",
    stats: [{ label: "Honor", value: "3rd Place" }, { label: "Endpoints", value: "10+ Swagger" }, { label: "Stack", value: "NestJS + AI" }]
  },
  {
    id: "telex-agents",
    title: "Telex AI Agents",
    category: "AI Communication & Webhook Systems",
    challenge: "High-volume chat channels experienced intermittent failures and dropped webhook events during LLM provider rate limits.",
    solution: "Integrated GroqAI into Telex with resilient retry policies, exponential backoff, and circuit-breaker patterns to gracefully absorb latency spikes and upstream API throttling.",
    impact: "Cut endpoint error rates by 40% under high concurrency and enabled real-time contextual bot responses.",
    tech: ["Node.js", "GroqAI", "WebSockets", "Telex API", "Resilience Patterns"],
    github: "https://github.com/telexintegrations/SocialMediaAgent",
    imagePath: "/faqResponderImage.png",
    mockupPrompt: "Chat agent integration: GroqAI inference pipeline, circuit-breaker health gauge, and webhook event streaming.",
    stats: [{ label: "Error Rate", value: "-40%" }, { label: "Pattern", value: "Circuit Breaker" }, { label: "Provider", value: "GroqAI" }]
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Backend Frameworks",
    skills: ["ASP.NET Core (.NET 6/8/10)", "NestJS", "Express.js", "FastAPI", "Dependency Injection", "Middleware Pipelines", "Background Services"]
  },
  {
    category: "Messaging & Caching",
    skills: ["Apache Kafka (Event Streaming)", "Redis (Cache Invalidation, TTL)", "Message Queues", "Microservices", "Event-Driven Architecture"]
  },
  {
    category: "Architecture & Patterns",
    skills: ["Clean Architecture", "Domain-Driven Design (DDD)", "CQRS", "MediatR", "Repository Pattern", "Unit of Work", "Vertical Slice", "SOLID"]
  },
  {
    category: "Databases & Performance",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "EF Core", "DB Indexing & Query-Plan Optimization", "ACID Transactions"]
  },
  {
    category: "AI, DevOps & Observability",
    skills: ["LLM API Integration (GroqAI, YarnGPT)", "Docker Compose", "Azure", "CI/CD Pipelines", "Serilog", "xUnit", "Swagger / OpenAPI", "JWT / RBAC"]
  }
];

export const AWARDS = [
  {
    title: "HostelSync AI: Predictive Hostel Allocation Platform",
    place: "1st Place",
    event: "UNILAG Hackathon",
    description: "Built a two-stage AI allocation engine (Housing Vulnerability Index + spatial optimization) processing 3,000+ applications in 0.34s, achieving a 16× lift in bed-assignment rates for lowest-income students."
  },
  {
    title: "Sentra: AI Healthcare & Accessibility Platform",
    place: "3rd Place",
    event: "TOS Hub Hackathon",
    description: "Built an LLM-powered healthcare backend unifying symptom analysis, voice-to-diagnosis, OCR, and obstacle detection across 10+ Swagger-documented REST endpoints in a TypeScript (NestJS) service."
  }
];

export const EDUCATION = {
  degree: "Doctor of Pharmacy (PharmD)",
  institution: "University of Lagos",
  location: "Lagos, Nigeria"
};

// Retained for backward-compatibility if needed
export const SKILLS: Skill[] = [
  { name: "C#", level: 95, type: SkillType.BACKEND },
  { name: "ASP.NET Core", level: 94, type: SkillType.BACKEND },
  { name: "Apache Kafka", level: 88, type: SkillType.BACKEND },
  { name: "Redis", level: 86, type: SkillType.BACKEND },
  { name: "Clean Architecture", level: 94, type: SkillType.ARCHITECTURE },
  { name: "CQRS / MediatR", level: 90, type: SkillType.ARCHITECTURE },
  { name: "DDD", level: 88, type: SkillType.ARCHITECTURE },
  { name: "SQL Server", level: 90, type: SkillType.DATABASE },
  { name: "PostgreSQL", level: 86, type: SkillType.DATABASE },
  { name: "Docker", level: 84, type: SkillType.DEVOPS }
];
