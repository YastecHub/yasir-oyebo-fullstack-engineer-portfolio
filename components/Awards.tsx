import React from 'react';
import { Trophy, GraduationCap } from 'lucide-react';
import { AWARDS, EDUCATION } from '../constants';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="section-block">
      <div className="section-heading">
        <span>Honors &amp; Education</span>
        <span className="text-xs font-mono opacity-60">Hackathons &amp; Academic Background</span>
      </div>

      <div className="awards-list">
        {AWARDS.map((award, idx) => (
          <div key={idx} className="award-item">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy size={16} className="text-amber-400" />
                <span className="award-name">{award.title}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-2">{award.description}</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono border border-line bg-badge-bg text-text whitespace-nowrap">
                {award.place} • {award.event}
              </span>
            </div>
          </div>
        ))}

        <div className="award-item">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={18} className="text-emerald-400" />
              <span className="award-name">{EDUCATION.degree}</span>
            </div>
            <p className="text-sm text-muted mt-1">{EDUCATION.institution} • {EDUCATION.location}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono border border-line bg-badge-bg text-faint">
              Education
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
