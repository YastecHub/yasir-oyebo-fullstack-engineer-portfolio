import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'dark';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Mouse move listener for subtle spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Analytics
  useEffect(() => {
    try {
      ReactGA.initialize("G-WMBDKJWP3L");
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Yasir Oyebo | Backend Software Engineer"
      });
    } catch {}

    (async () => {
      try {
        const mod = await import('@vercel/analytics');
        if (mod && typeof (mod as any).inject === 'function') {
          (mod as any).inject();
        }
      } catch (err) {
        console.warn('Vercel Analytics injection failed:', err);
      }
    })();
  }, []);

  return (
    <div className="site-shell">
      {/* Background (Solid Black + Subtle Grid & Pointer Spotlight) */}
      <div className="animated-background" aria-hidden="true">
        <div className="background-grid"></div>
        <div className="background-spotlight"></div>
      </div>

      {/* Floating Pill Nav */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Streamlined Content */}
      <main className="page-main">
        <Hero />
        <Experience />
        <Projects />
      </main>

      {/* Minimal Footer with Socials */}
      <Footer />
    </div>
  );
};

export default App;
