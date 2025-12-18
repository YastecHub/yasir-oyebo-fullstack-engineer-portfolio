import { Project, ExperienceItem, Skill, SkillType } from './types';
import { Database, Server, Code, Layout, Terminal, Coffee, Zap, MessageSquare, Shield, Box, Globe, Cpu } from 'lucide-react';

export const HERO_DATA = {
  name: "Yasir Oladimeji Oyebo",
  tagline: "Fullstack Engineer | C#/.NET Core + React/Node.js | 3+ Years Building End-to-End Apps",
  bio: "Lagos-based Fullstack Engineer with 3+ years crafting seamless backends (C#, ASP.NET, Node.js, SQL) and frontends (React UIs). Experiences include MGQS (AMJN reports), HNG (Telex AI), and Codefactory (WAAS wallets). Pharmacy-student-turned-dev solving real pains like fintech txns & AI integrations. Open to remote fullstack gigs.",
  cta: "Explore Fullstack Builds",
  email: "yasiroyebo@gmail.com",
  phone: "+234 9068913009",
  location: "Lagos, Nigeria"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codefactory",
    role: "Backend Developer (Fullstack)",
    company: "Codefactory Innovative Hub",
    period: "Mar 2025 – Present",
    description: "Built WAAS (Wallet as a Service) system—scalable fintech wallet APIs handling transactions, balances, and KYC at an agile software firm.",
    highlights: [
      "Engineered secure C#/.NET Core endpoints for real-time fund transfers",
      "Integrated React prototypes for wallet dashboards, ensuring fullstack cohesion",
      "Optimized SQL Server for high-volume operations",
      "Impact: Supported 10K+ simulated txns; boosted scalability 40%"
    ]
  },
  {
    id: "teknikforce",
    role: ".NET Backend Developer",
    company: "TekniKForce (Remote)",
    period: "Jan 2025 – Mar 2025",
    description: "Remote role in international team building marketing automation tools & SaaS web apps.",
    highlights: [
      "Contributed Node.js microservices alongside .NET for hybrid SaaS—fullstack API/UI sync",
      "Built/secured RESTful APIs for user mgmt & product licensing",
      "Delivered modules for 5+ client projects globally"
    ]
  },
  {
    id: "hng",
    role: "Backend Developer",
    company: "HNG Remote",
    period: "Feb 2024 – Mar 2024",
    description: "Developed Telex.im AI comms; integrated GroqAI securely.",
    highlights: [
      "Blended Node.js for comms endpoints with React hooks for AI chat previews",
      "Boosted team comms 30%",
      "Scalable C# feature sprints"
    ]
  },
  {
    id: "mgqs",
    role: "Fullstack Software Developer Intern",
    company: "MGQS Nigeria",
    period: "June 2023 – Present",
    description: "Teamed with 7 engineers on AMJNReportSystem—designed data/reporting enhancements.",
    highlights: [
      "Prototyped React reporting UIs to complement backend Razor Pages",
      "Streamlined reporting for 100+ users",
      "Reduced query time by 40%"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "C#", level: 95, type: SkillType.BACKEND },
  { name: "ASP.NET Core", level: 90, type: SkillType.BACKEND },
  { name: "Node.js", level: 80, type: SkillType.BACKEND },
  { name: "Microservices", level: 85, type: SkillType.BACKEND },
  { name: "React.js", level: 85, type: SkillType.FRONTEND },
  { name: "JavaScript/TS", level: 85, type: SkillType.FRONTEND },
  { name: "SQL Server", level: 85, type: SkillType.DATABASE },
  { name: "MongoDB", level: 75, type: SkillType.DATABASE },
  { name: "Problem Solving", level: 100, type: SkillType.SOFT },
];

export const PROJECTS: Project[] = [
  {
    id: "birthday-buddy",
    title: "Birthday Buddy (Fullstack MVP)",
    category: "Fullstack Automation",
    challenge: "Seamless reminders across email/WhatsApp/groups.",
    solution: ".NET Core backend (cron jobs, Twilio) + React frontend (group modals, memory boards).",
    impact: "Interactive UI for 50+ users; automated 100+ celebrations.",
    tech: ["React", ".NET 8", "Node.js", "Twilio"],
    github: "https://github.com/YastecHub/BirthdayBuddy",
    imagePath: "/birthdayBuddyImage.png",
    mockupPrompt: "Fullstack app screenshot: React dashboard with birthday calendar, group chat modals, backend API flow diagram in purple-blue gradient—vibrant, user-friendly.",
    stats: [{ label: "Users", value: "50+" }, { label: "Events", value: "100+" }]
  },
  {
    id: "waas",
    title: "WAAS (Wallet as a Service)",
    category: "Fintech Fullstack",
    challenge: "Secure real-time wallets & KYC compliance.",
    solution: "C#/.NET Core + SQL + React wallet UI prototypes.",
    impact: "Supported 10K+ simulated txns; Boosted scalability 40%.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Microservices"],
    github: "https://github.com/YastecHub",
    imagePath: "/waasImage.png",
    mockupPrompt: "Fullstack wallet: React balance charts + .NET backend endpoints in dark mode with professional purple-blue gradient.",
    stats: [{ label: "Txns", value: "10K+" }, { label: "Scale", value: "+40%" }]
  },
  {
    id: "paystack",
    title: "Paystack Integration",
    category: "Fintech Payments",
    challenge: "Compliance & secure transaction verification.",
    solution: "End-to-end .NET implementation of Paystack API with security checks.",
    impact: "Reusable fintech library; 100+ tests passed.",
    tech: ["ASP.NET Core", "C#", "Paystack API"],
    github: "https://github.com/YastecHub/PayStackImplementationTesting",
    imagePath: "/paystackIntegrations.png",
    mockupPrompt: "Payment gateway simulator: Transaction timelines, verification badges, secure lock icons.",
    stats: [{ label: "Tests", value: "100+" }, { label: "Rating", value: "A+" }]
  },
  {
    id: "telex",
    title: "Telex.im Integration",
    category: "AI Fullstack",
    challenge: "Enhancing team interactions with context.",
    solution: "GroqAI + Node.js endpoints + React previews.",
    impact: "Secure AI features; Boosted team comms 30%.",
    tech: ["Node.js", "React", "GroqAI", "WebSockets"],
    github: "https://github.com/telexintegrations/SocialMediaAgent",
    imagePath: "/telexImage.png",
    mockupPrompt: "Chat API flow: Message threads with AI responses, endpoint logs, purple gradient UI.",
    stats: [{ label: "Comms Boost", value: "30%" }]
  },
  {
    id: "amjn",
    title: "AMJN Report System",
    category: "Enterprise Reporting",
    challenge: "Data overload and slow reporting in organizations.",
    solution: "ASP.NET Core backend + Razor Pages frontend with dynamic SQL generation.",
    impact: "Streamlined reporting for 100+ users.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "Razor"],
    github: "https://github.com/YastecHub",
    imagePath: "/amjnReportSystem.png",
    mockupPrompt: "Professional report dashboard screenshot: Filter panels, dynamic charts in SQL queries, green success badges.",
    stats: [{ label: "Users", value: "100+" }, { label: "Query Speed", value: "+40%" }]
  },
  {
    id: "mansory",
    title: "Mansory Supply Hub",
    category: "E-Commerce Backend",
    challenge: "Secure operations and supply chain validation.",
    solution: "Braintree payments + EF role-based access + Node.js scale prototypes.",
    impact: "Streamlined supplier orders; Robust endpoints for 500+ items.",
    tech: ["ASP.NET Core", "Entity Framework", "Braintree"],
    github: "https://github.com/YastecHub/MansorySupplyHub",
    imagePath: "/mansorySupplyHub.png",
    mockupPrompt: "E-commerce backend admin panel: Order flow diagram, payment gateway viz, blue .NET theme.",
    stats: [{ label: "Items", value: "500+" }, { label: "Uptime", value: "99.9%" }]
  }
];