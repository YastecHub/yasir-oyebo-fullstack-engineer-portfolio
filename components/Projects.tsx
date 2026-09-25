import React from 'react';

interface ProjectItem {
  title: string;
  description: string;
  url: string;
  award?: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "GrowthGIA API",
    description: "Modular monolith e-commerce platform with Redis TTL-based caching cutting database round-trips by ~60% at peak traffic.",
    url: "https://github.com/YastecHub"
  },
  {
    title: "WAAS: Wallet as a Service",
    description: "Fintech wallet platform with Unit of Work and Kafka event streaming guaranteeing auditable processing for 10,000+ daily transactions.",
    url: "https://github.com/YastecHub"
  },
  {
    title: "WhitteIntelCoop API",
    description: "Enterprise cooperative backend applying CQRS and MediatR to decouple query paths and eliminate write-heavy reporting bottlenecks.",
    url: "https://github.com/Whitteintel/AMJNReportSystem"
  }
];

const AWARD_WINNING_PROJECTS: ProjectItem[] = [
  {
    title: "HostelSync AI",
    award: "1st Place • UNILAG Hackathon",
    description: "Predictive hostel allocation engine combining a Housing Vulnerability Index with spatial optimization to process 3,000+ applications in 0.34s.",
    url: "https://github.com/YastecHub"
  },
  {
    title: "Sentra",
    award: "3rd Place • TOS Hub Hackathon",
    description: "AI healthcare backend unifying symptom analysis, voice-to-diagnosis, OCR, and obstacle detection across 10+ REST endpoints.",
    url: "https://github.com/telexintegrations/SocialMediaAgent"
  }
];

const Projects: React.FC = () => {
  return (
    <>
      {/* 1. Featured Projects Section */}
      <section id="work" className="section-block">
        <div className="section-heading">
          <span>Featured projects</span>
          <a
            href="https://github.com/YastecHub"
            target="_blank"
            rel="noreferrer"
            className="text-xs normal-case opacity-70 hover:opacity-100"
          >
            View GitHub
          </a>
        </div>

        <div className="compact-work-list">
          {FEATURED_PROJECTS.map((item, idx) => (
            <a
              key={idx}
              className="compact-work-item"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{item.title}</span>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 2. Award-Winning Projects Section */}
      <section id="awards" className="section-block">
        <div className="section-heading">
          <span>Award-winning projects</span>
          <span className="text-xs font-mono opacity-60">Hackathons &amp; Recognition</span>
        </div>

        <div className="compact-work-list">
          {AWARD_WINNING_PROJECTS.map((item, idx) => (
            <a
              key={idx}
              className="compact-work-item"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-award-row">
                <span>{item.title}</span>
                {item.award && (
                  <span className="work-award-badge">
                    {item.award}
                  </span>
                )}
              </div>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
