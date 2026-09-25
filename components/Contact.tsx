import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-block">
      <div className="section-heading">
        <span>Connect</span>
        <span className="text-xs font-mono opacity-60">Open to Full-Time &amp; Contract Roles</span>
      </div>

      <div className="contact-grid">
        <a href={`mailto:${HERO_DATA.email}`} className="contact-card">
          <div className="flex items-center justify-between mb-2">
            <Mail size={16} className="text-faint" />
            <ExternalLink size={13} className="text-faint opacity-50" />
          </div>
          <div className="contact-label">Email</div>
          <div className="contact-value">{HERO_DATA.email}</div>
        </a>

        <a href={`tel:${HERO_DATA.phone.replace(/\s+/g, '')}`} className="contact-card">
          <div className="flex items-center justify-between mb-2">
            <Phone size={16} className="text-faint" />
            <ExternalLink size={13} className="text-faint opacity-50" />
          </div>
          <div className="contact-label">Phone</div>
          <div className="contact-value">{HERO_DATA.phone}</div>
        </a>

        <div className="contact-card cursor-default">
          <div className="flex items-center justify-between mb-2">
            <MapPin size={16} className="text-faint" />
          </div>
          <div className="contact-label">Location</div>
          <div className="contact-value">{HERO_DATA.location} (WAT)</div>
        </div>

        <a href={HERO_DATA.linkedin} target="_blank" rel="noreferrer" className="contact-card">
          <div className="flex items-center justify-between mb-2">
            <Linkedin size={16} className="text-faint" />
            <ExternalLink size={13} className="text-faint opacity-50" />
          </div>
          <div className="contact-label">LinkedIn</div>
          <div className="contact-value">in/yasir-oyebo0</div>
        </a>

        <a href={HERO_DATA.github} target="_blank" rel="noreferrer" className="contact-card">
          <div className="flex items-center justify-between mb-2">
            <Github size={16} className="text-faint" />
            <ExternalLink size={13} className="text-faint opacity-50" />
          </div>
          <div className="contact-label">GitHub</div>
          <div className="contact-value">github.com/YastecHub</div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
