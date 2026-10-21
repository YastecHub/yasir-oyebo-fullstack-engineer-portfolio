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

  // Pointer spotlight: at most one CSS update per animation frame
  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;
    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        document.documentElement.style.setProperty('--pointer-x', `${x}px`);
        document.documentElement.style.setProperty('--pointer-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Analytics
  useEffect(() => {
    try {
      ReactGA.initialize("G-WMBDKJWP3L");
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Yasir Oladimeji | Software Engineer"
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
