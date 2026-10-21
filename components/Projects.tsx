import React from 'react';
import { HERO_DATA, PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectList: React.FC<{ items: Project[] }> = ({ items }) => (
  <div className="compact-work-list">
    {items.map((item) => (
      <a
        key={item.id}
        className="compact-work-item"
        href={item.github ?? HERO_DATA.github}
        target="_blank"
        rel="noreferrer"
      >
        {item.award ? (
          <div className="work-award-row">
            <span>{item.title}</span>
            <span className="work-award-badge">{item.award}</span>
          </div>
        ) : (
          <span>{item.title}</span>
        )}
        <p>{item.summary ?? item.impact}</p>
      </a>
    ))}
  </div>
);

const Projects: React.FC = () => {
  const featured = PROJECTS.filter((p) => p.section === 'featured');
  const awardWinning = PROJECTS.filter((p) => p.section === 'award');

  return (
    <>
      <section id="work" className="section-block">
        <div className="section-heading">
          <span>Featured projects</span>
          <a
            href={HERO_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs normal-case opacity-70 hover:opacity-100"
          >
            View GitHub
          </a>
        </div>
        <ProjectList items={featured} />
      </section>

      <section id="awards" className="section-block">
        <div className="section-heading">
          <span>Award-winning projects</span>
          <span className="text-xs font-mono opacity-60">Hackathons &amp; Recognition</span>
        </div>
        <ProjectList items={awardWinning} />
      </section>
    </>
  );
};

export default Projects;
