export interface Project {
  id: string;
  title: string;
  category: string;
  /** Where the project appears on the site; omit to keep it out of the page. */
  section?: 'featured' | 'award';
  /** e.g. "1st Place • UNILAG Hackathon" */
  award?: string;
  /** One-line description shown on the site. */
  summary?: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  /** Repo link; the card falls back to the GitHub profile when omitted. */
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  /** e.g. "Jun 2025 – Dec 2025" or "Jan 2026 – Present" */
  period: string;
  /** One-line summary shown on the site. */
  summary: string;
  description: string;
  highlights: string[];
}
