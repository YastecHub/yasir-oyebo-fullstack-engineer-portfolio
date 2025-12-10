import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';
import { Cpu, Database, Layout, Globe } from 'lucide-react';
import { SkillType } from '../types';

const Skills: React.FC = () => {
  // Transform skills for chart
  const radarData = SKILLS.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100
  }));

  const categories = [
    { title: "Backend & Systems", icon: <Cpu className="text-violet-500" />, skills: SKILLS.filter(s => s.type === SkillType.BACKEND) },
    { title: "Frontend & Frameworks", icon: <Globe className="text-emerald-500" />, skills: SKILLS.filter(s => s.type === SkillType.FRONTEND) },
    { title: "Database & Tools", icon: <Database className="text-blue-500" />, skills: SKILLS.filter(s => s.type === SkillType.DATABASE) },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Chart */}
          <div className="order-2 lg:order-1 h-[400px] w-full glass-panel rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 z-0"></div>
             
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#a78bfa' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
          </div>

          {/* Right: Lists */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Fullstack <span className="text-violet-500">Arsenal</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              3+ years pivoting from robust .NET backends to seamless React frontends.
            </p>

            <div className="space-y-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;