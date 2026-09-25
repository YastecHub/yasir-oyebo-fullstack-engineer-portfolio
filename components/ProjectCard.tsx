import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const content = (
    <article className="h-full rounded-2xl border border-[#ded6c8] bg-[#fffaf0]/70 p-5 transition-colors group hover:bg-[#fffaf0]">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-[#171412] group-hover:underline underline-offset-4">
          {project.title}
        </h3>
        <span className="rounded-full bg-[#eadfce] px-2.5 py-1 text-xs text-[#6f6256] shrink-0">{project.stats?.[0]?.value}</span>
      </div>
      <p className="text-sm text-[#8a7d6f] mt-2">{project.category}</p>
      <p className="text-[#4d443c] leading-7 mt-4">{project.impact}</p>
      <p className="text-sm text-[#8a7d6f] mt-4">{project.tech.join(' / ')}</p>
    </article>
  );

  if (!project.github) {
    return content;
  }

  return (
    <a href={project.github} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  );
};

export default ProjectCard;
