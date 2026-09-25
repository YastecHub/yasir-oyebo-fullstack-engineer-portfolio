import React from 'react';
import { TECHNICAL_SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="stack" className="section-block">
      <div className="section-heading">
        <span>Technical Arsenal</span>
        <span className="text-xs font-mono opacity-60">Architecture &amp; Core Stack</span>
      </div>

      <div className="stack-grid">
        {TECHNICAL_SKILLS.map((group, idx) => (
          <div key={idx} className="stack-category">
            <h3>{group.category}</h3>
            <ul>
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx}>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
