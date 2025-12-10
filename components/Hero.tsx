import React, { useEffect, useState } from 'react';
import { ArrowDown, Server, Database, Code2, MapPin, Globe } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* 1. TEXT SIDE */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left z-20">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-xs font-bold tracking-wide uppercase">Open to Work</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-slate-200 transition-colors cursor-default">
                <MapPin size={14} className="text-violet-400" />
                <span className="text-xs font-medium">{HERO_DATA.location}</span>
              </div>
            </div>
            
            {/* NAME - Optimized for One Line */}
            {/* usage of whitespace-nowrap forces it to one line on Desktop (lg) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold mb-6 tracking-tight leading-tight lg:whitespace-nowrap">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {HERO_DATA.name}
              </span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-violet-400/90 mb-6 font-medium">
              {HERO_DATA.tagline}
            </h2>

            <p className="max-w-2xl lg:max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-slate-400 mb-8 leading-relaxed border-l-4 border-violet-500/30 pl-6">
              {HERO_DATA.bio}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects"
                className="group relative px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] w-full sm:w-auto text-center overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                {HERO_DATA.cta}
              </a>
              
              <a 
                href="#contact"
                className="px-8 py-3.5 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-lg font-semibold transition-all hover:border-white/30 w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* 2. IMAGE SIDE (The "Peak" Design) */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[420px] lg:w-[400px] lg:h-[480px] group transition-all duration-500">
                
                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600 to-emerald-500 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

                {/* Rotated Border */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] rotate-6 group-hover:rotate-3 transition duration-500 bg-slate-900/50 backdrop-blur-sm"></div>

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800 -rotate-3 group-hover:rotate-0 transition duration-500 z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-20"></div>
                  <img
                    src="/portfolio_pics.jpg"
                    alt="Yasir Oladimeji Oyebo"
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>

                {/* Floating Badge: .NET */}
                <div className="absolute -right-8 top-12 z-20 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                    <Server className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200 text-sm font-bold">.NET Core</span>
                  </div>
                </div>

                {/* Floating Badge: React */}
                <div className="absolute -left-12 bottom-24 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                    <Code2 className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-200 text-sm font-bold">React.js</span>
                  </div>
                </div>

                {/* Floating Badge: Database */}
                <div className="absolute -right-4 bottom-8 z-20 animate-float" style={{ animationDelay: '2.5s' }}>
                   <div className="p-3 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full shadow-xl hover:scale-110 transition-transform">
                      <Database className="w-6 h-6 text-blue-400" />
                   </div>
                </div>

             </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-slate-500 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll for Proof of Work</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;