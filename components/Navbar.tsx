import React, { useState, useEffect } from 'react';
import { House, Briefcase, FolderGit2, Trophy, FileText, Sun, Moon } from 'lucide-react';
import { HERO_DATA } from '../constants';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [lagosTime, setLagosTime] = useState<string>('');

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
          <a className="nav-button active" href="#hero" title="Home">
            <House size={15} />
            <span className="hidden sm:inline">Home</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className="nav-button" href="#roles" title="Roles">
            <Briefcase size={15} />
            <span className="hidden sm:inline">Roles</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className="nav-button" href="#work" title="Featured Work">
            <FolderGit2 size={15} />
            <span className="hidden sm:inline">Work</span>
          </a>
        </div>

        <div className="nav-cluster">
          <a className="nav-button" href="#awards" title="Awards">
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
            <span>Resume</span>
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
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="hidden md:inline">Open to work</span>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
