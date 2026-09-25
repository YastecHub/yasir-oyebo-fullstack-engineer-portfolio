import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div>
        <span className="opacity-60">Copyright 2026 / </span>
        <span className="text-text font-medium">{HERO_DATA.name}</span>
      </div>

      <div className="footer-socials">
        <a
          className="icon-button"
          href={HERO_DATA.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github size={16} />
        </a>

        <a
          className="icon-button"
          href={HERO_DATA.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>

        <a
          className="icon-button"
          href={`mailto:${HERO_DATA.email}`}
          aria-label="Email"
          title="Email"
        >
          <Mail size={16} />
        </a>

        <a
          className="icon-button"
          href={HERO_DATA.resumeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
          title="Resume"
        >
          <FileText size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
