import React, { useState, useEffect } from 'react';
import { House, Briefcase, FolderGit2, Trophy, FileText, Sun, Moon } from 'lucide-react';
import { HERO_DATA } from '../constants';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [lagosTime, setLagosTime] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const ids = ['hero', 'roles', 'work', 'awards'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((el) => observer.observe(el));

    // The last section is short, so it never reaches the observer band; treat
    // "scrolled to the bottom" as being in it.
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) setActiveSection(ids[ids.length - 1]);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = (id: string) => `nav-button${activeSection === id ? ' active' : ''}`;

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date());
        setLagosTime(timeStr);
      } catch {
        setLagosTime('Lagos, NG');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-header">
      {/* Left side: Timezone */}
      <div className="header-side header-left">
        <span className="font-mono text-xs tracking-tight">Africa/Lagos</span>
        {lagosTime && (
          <>
            <span className="opacity-40">•</span>
            <span className="font-mono text-xs">{lagosTime}</span>
          </>
        )}
      </div>

      {/* Center: Minimal Floating Pill Navigation */}
      <nav className="floating-nav" aria-label="Main navigation">
        <div className="nav-cluster">
          <a className={navClass('hero')} href="#hero" aria-current={activeSection === 'hero' ? 'location' : undefined} title="Home">
            <House size={15} />
            <span className="hidden sm:inline">Home</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className={navClass('roles')} href="#roles" aria-current={activeSection === 'roles' ? 'location' : undefined} title="Roles">
            <Briefcase size={15} />
            <span className="hidden sm:inline">Roles</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className={navClass('work')} href="#work" aria-current={activeSection === 'work' ? 'location' : undefined} title="Featured Work">
            <FolderGit2 size={15} />
            <span className="hidden sm:inline">Work</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className={navClass('awards')} href="#awards" aria-current={activeSection === 'awards' ? 'location' : undefined} title="Awards">
            <Trophy size={15} />
            <span className="hidden sm:inline">Awards</span>
          </a>
        </div>

        <span className="nav-divider" aria-hidden="true"></span>

        <div className="nav-cluster">
          <a
            className="nav-button"
            href={HERO_DATA.resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Open Resume"
          >
            <FileText size={15} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>

        <span className="nav-divider" aria-hidden="true"></span>

        {/* Theme Toggle Button */}
        <button
          className="nav-button theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </nav>

      {/* Right side: Minimal Status */}
      <div className="header-side header-right">
        <span className="status-pill">
          <span className="status-dot" aria-hidden="true"></span>
          <span className="status-label">Open to work</span>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
