import React from 'react';
import { EXPERIENCES } from '../constants';

/** "Jan 2026 – Present" → "2026 - Present", "Jun 2025 – Dec 2025" → "2025". */
const shortPeriod = (period: string): string => {
  const years = period.match(/\d{4}/g) ?? [];
  if (/present/i.test(period)) return `${years[0] ?? ''} - Present`.trim();
  const [start, end] = [years[0], years[years.length - 1]];
  if (!start) return period;
  return start === end ? start : `${start} - ${end}`;
};

const Experience: React.FC = () => {
  return (
    <section id="roles" className="section-block">
      <div className="section-heading">
        <span>Roles</span>
      </div>

      <div className="roles-list">
        {EXPERIENCES.map((role) => (
          <article key={role.id} className="role-item">
            <div className="role-title-row">
              <h2>{role.role}</h2>
              <span title={role.period}>{shortPeriod(role.period)}</span>
            </div>

            <p className="role-company">
              <span>{role.company}</span>
            </p>

            <p className="role-description">{role.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
