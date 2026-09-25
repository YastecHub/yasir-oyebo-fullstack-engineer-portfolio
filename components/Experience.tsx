import React from 'react';

interface MinimalRole {
  title: string;
  company: string;
  period: string;
  summary: string;
}

const ROLES: MinimalRole[] = [
  {
    title: "Software Engineer",
    company: "Whitteintel Limited",
    period: "2026 - Present",
    summary: "Architecting the WhitteIntelCoop API with CQRS and MediatR to decouple read/write workloads and reduce query latency under write-heavy loads."
  },
  {
    title: "Full Stack Engineer (Contract)",
    company: "Codefactory Innovative Hub",
    period: "2025",
    summary: "Built a production Wallet-as-a-Service (WaaS) platform and decoupled ledger writes with an Apache Kafka event streaming microservice."
  },
  {
    title: ".NET Backend Developer (Contract)",
    company: "Teknikforce",
    period: "2025",
    summary: "Modernized enterprise SaaS backends via a .NET 6 to .NET 8 migration, zero-downtime deployments, and hardened JWT/RBAC security."
  },
  {
    title: "Backend Developer (Intern)",
    company: "HNG Tech",
    period: "2024",
    summary: "Integrated GroqAI LLM API into Telex with retry logic, exponential backoff, and circuit-breaker patterns to cut error rates by 40%."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="roles" className="section-block">
      <div className="section-heading">
        <span>Roles</span>
      </div>

      <div className="roles-list">
        {ROLES.map((role, idx) => (
          <article key={idx} className="role-item">
            <div className="role-title-row">
              <h2>{role.title}</h2>
              <span>{role.period}</span>
            </div>

            <p className="role-company">
              <span>{role.company}</span>
            </p>

            <p className="text-muted text-[0.95rem] leading-relaxed">{role.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
