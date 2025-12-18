import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize("G-WMBDKJWP3L");

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Portfolio Home"
    });
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
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;