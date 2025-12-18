import React, { useRef, MouseEvent, useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="relative group rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-colors h-full flex flex-col overflow-hidden shadow-xl"
    >
      {/* Static Mockup Area */}
      <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800 group-hover:border-violet-500/30 transition-colors">
        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
           {project.imagePath ? (
             <img
               src={project.imagePath}
               alt={project.title}
               className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition duration-700 filter grayscale-[20%] group-hover:grayscale-0"
             />
           ) : (
             <ProjectMockup type={project.id} />
           )}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/90 backdrop-blur text-xs font-bold text-violet-400 border border-violet-500/30 rounded-full z-10 shadow-lg">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
            {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.challenge} {project.solution}
        </p>

        {/* Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-2 mb-4">
             {project.stats.map((stat, idx) => (
               <div key={idx} className="bg-slate-800/50 p-2 rounded border border-slate-700 flex flex-col items-center justify-center hover:bg-slate-800 transition-colors">
                 <span className="text-lg font-bold text-white">{stat.value}</span>
                 <span className="text-[10px] uppercase tracking-wider text-slate-500">{stat.label}</span>
               </div>
             ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
             {project.github ? (
               <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                 <Github size={16} /> Code
               </a>
             ) : (
                <span className="text-xs text-slate-600 italic flex items-center gap-1"><Github size={12} /> Private</span>
             )}
             <button className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors ml-auto group-hover:translate-x-1 transition-transform font-medium">
               Details <ExternalLink size={16} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
