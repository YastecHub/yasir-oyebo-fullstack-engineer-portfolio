export interface Project {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  imagePath?: string;
  mockupPrompt: string;
  stats?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export enum SkillType {
  BACKEND = 'Backend',
  DATABASE = 'Database',
  FRONTEND = 'Frontend',
  SOFT = 'Soft Skills'
}

export interface Skill {
  name: string;
  level: number;
  type: SkillType;
  icon?: any;
}