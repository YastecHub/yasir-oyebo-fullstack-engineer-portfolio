import React, { useRef, useEffect, useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.experience-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-slate-950 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">
          <span className="border-b-4 border-violet-600 pb-2">Experience Timeline</span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-600 via-blue-600 to-slate-800 rounded-full opacity-30"></div>

          <div className="space-y-12 md:space-y-24">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  id={exp.id}
                  className={`experience-card relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6] z-10 mt-6 md:mt-0"></div>

                  {/* Spacer */}
                  <div className="w-full md:w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-8' : 'md:pl-12 pl-8'} mt-4 md:mt-0`}>
                    <div className="glass-panel p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border-l-4 border-l-violet-500 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-violet-400">
                          <Briefcase size={18} />
                          <span className="font-bold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-900/50 px-3 py-1 rounded-full">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{exp.role}</h3>
                      <p className="text-slate-400 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;