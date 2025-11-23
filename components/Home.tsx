
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Sparkles, ArrowRight, UserPlus, Briefcase, Compass, TrendingUp, Network, Rocket, GraduationCap, Building2, Globe, Landmark, Cpu } from 'lucide-react';

interface HomeProps {
    onNavigate: (view: string) => void;
}

const UNIVERSITIES = [
  "Stanford University", "MIT", "Harvard University", "University of Oxford", 
  "ETH Zürich", "Cambridge University", "Tsinghua University", "NUS Singapore", 
  "Imperial College", "Caltech", "Princeton", "Yale University"
];

const INDUSTRIES = [
  "Google DeepMind", "OpenAI", "NVIDIA", "SpaceX", "Tesla", "Microsoft Research", 
  "Amazon AWS", "Meta AI", "Anthropic", "IBM Quantum", "Apple", "Intel"
];

const ORGANIZATIONS = [
  "IEEE", "ACM", "United Nations", "NASA", "CERN", "World Economic Forum", 
  "National Science Foundation", "Royal Society", "WHO", "World Bank"
];

const ScrollTag = ({ text, icon: Icon, theme }: { text: string, icon: any, theme: 'violet' | 'emerald' | 'blue' }) => {
  const themeStyles = {
    violet: "border-white/5 hover:border-violet-500/30 text-violet-400 group-hover:text-violet-300",
    emerald: "border-white/5 hover:border-emerald-500/30 text-emerald-400 group-hover:text-emerald-300",
    blue: "border-white/5 hover:border-blue-500/30 text-blue-400 group-hover:text-blue-300"
  };
  
  return (
    <div className={`flex items-center gap-4 px-8 py-4 rounded-2xl border backdrop-blur-md transition-all bg-slate-900/40 hover:bg-white/5 group ${themeStyles[theme]}`}>
       <Icon className="w-6 h-6 transition-colors" />
       <span className="text-lg font-mono text-slate-400 group-hover:text-slate-200 transition-colors whitespace-nowrap font-medium tracking-tight">
         {text}
       </span>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-24 mb-20 overflow-x-hidden">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 60s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
          .mask-fade {
             mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
             -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }
        `}</style>

      {/* Hero Section */}
      <div className="text-center space-y-6 -mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 pd-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-slate-300 mb-2">
            <span>Driving the Change from Scratch</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-sans leading-tight">
          NTEC
        </h1>
        
        <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Events, Workshops, Networking, 1:1 Mentorship, Online sessions, Hackathons, Skill development, Resources worth thousands and much more...
        </p>

        {/* Vertical Action Stack */}
        <div className="flex flex-col items-center gap-6 pt-8 w-full max-w-[480px] mx-auto">
            
            {/* Member Option */}
            <div className="w-full flex items-center gap-4 group relative">
                <div className="hidden md:flex flex-col items-end w-40 shrink-0 absolute -left-44 top-1/2 -translate-y-1/2">
                    <span className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1 text-right">Join Now</span>
                    <ArrowRight className="w-5 h-5 text-violet-500" />
                </div>
                
                <button 
                    onClick={() => onNavigate('MEMBER_APPLY')}
                    className="w-full glass-panel p-5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-violet-500/50 text-left group-hover:translate-x-1 group-hover:shadow-neon-violet relative overflow-hidden active:scale-98"
                >
                    <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <UserPlus className="w-24 h-24 -rotate-12" />
                    </div>
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="p-3.5 bg-violet-500/20 rounded-xl text-violet-300 border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                            <UserPlus className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">Apply as a MEMBER</h3>
                            <p className="text-xs text-slate-400 font-mono mt-1 group-hover:text-slate-300">Join our community</p>
                        </div>
                    </div>
                </button>
            </div>

            {/* Mentor Option */}
            <div className="w-full flex items-center gap-4 group relative">
                 <div className="hidden md:flex flex-col items-end w-40 shrink-0 absolute -left-44 top-1/2 -translate-y-1/2">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 text-right">Guide Others</span>
                    <ArrowRight className="w-5 h-5 text-emerald-500" />
                </div>

                <button 
                    onClick={() => onNavigate('MENTOR_APPLY')}
                    className="w-full glass-panel p-5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-emerald-500/50 text-left group-hover:translate-x-1 group-hover:shadow-neon-emerald relative overflow-hidden active:scale-98"
                >
                     <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Briefcase className="w-24 h-24 -rotate-12" />
                    </div>
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="p-3.5 bg-emerald-500/20 rounded-xl text-emerald-300 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">Apply as a MENTOR</h3>
                            <p className="text-xs text-slate-400 font-mono mt-1 group-hover:text-slate-300">Share your expertise</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
      </div>

      {/* Affiliation Scrollers */}
      <div className="space-y-12 py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
        
        {/* Row 1: Institutions */}
        <div className="space-y-4">
            <div className="flex items-center justify-center px-4 md:px-12">
                <h3 className="text-2xl font-bold text-slate-400 font-sans tracking-tight">Institutions</h3>
            </div>
            <div className="w-full overflow-hidden mask-fade relative z-10">
                <div className="flex gap-6 animate-scroll-left w-fit pause-on-hover px-4">
                    {[...UNIVERSITIES, ...UNIVERSITIES].map((item, idx) => (
                        <ScrollTag key={`uni-${idx}`} text={item} icon={Landmark} theme="violet" />
                    ))}
                </div>
            </div>
        </div>

        {/* Row 2: Industry */}
        <div className="space-y-4">
            <div className="flex items-center justify-center px-4 md:px-12">
                 <h3 className="text-2xl font-bold text-slate-400 font-sans tracking-tight">Industry</h3>
            </div>
            <div className="w-full overflow-hidden mask-fade relative z-10">
                <div className="flex gap-6 animate-scroll-right w-fit pause-on-hover px-4">
                    {[...INDUSTRIES, ...INDUSTRIES].map((item, idx) => (
                        <ScrollTag key={`ind-${idx}`} text={item} icon={Building2} theme="emerald" />
                    ))}
                </div>
            </div>
        </div>

        {/* Row 3: Organizations */}
        <div className="space-y-4">
             <div className="flex items-center justify-center px-4 md:px-12">
                 <h3 className="text-2xl font-bold text-slate-400 font-sans tracking-tight">Organizations</h3>
             </div>
             <div className="w-full overflow-hidden mask-fade relative z-10">
                <div className="flex gap-6 animate-scroll-left w-fit pause-on-hover px-4">
                    {[...ORGANIZATIONS, ...ORGANIZATIONS].map((item, idx) => (
                        <ScrollTag key={`org-${idx}`} text={item} icon={Globe} theme="blue" />
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Vision of EduAI Section */}
      <div className="relative pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 border-t border-white/5 max-w-6xl mx-auto px-4">
         <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sans tracking-tight">Vision</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 relative">
             
             {/* Connector Dots (Desktop) */}
             <div className="hidden md:block absolute top-[2rem] left-0 w-full pointer-events-none z-0">
                 {/* Between 1 and 2 (25%) */}
                 <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-20">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
                 {/* Between 2 and 3 (50%) */}
                 <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-20">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
                 {/* Between 3 and 4 (75%) */}
                 <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-20">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
             </div>

             {/* 1. Guide */}
             <div className="flex flex-col items-center text-center space-y-3 group relative z-10">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center shadow-glass-lg group-hover:border-violet-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon-violet">
                     <Compass className="w-4 h-4 md:w-6 md:h-6 text-slate-300 group-hover:text-violet-300 transition-colors" />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-base md:text-lg font-sans mb-0.5">Guide</h3>
                     <p className="text-violet-400 text-[10px] md:text-[10px] font-mono uppercase tracking-wider mb-1.5">Planning</p>
                     <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-[160px] mx-auto">
                        Mindset Mapping towards an impact
                     </p>
                 </div>
             </div>

             {/* 2. Grow */}
             <div className="flex flex-col items-center text-center space-y-3 group relative z-10">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900/50 border border-emerald-500/30 flex items-center justify-center shadow-neon-emerald transition-all duration-300 group-hover:scale-105">
                     <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-emerald-300" />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-base md:text-lg font-sans mb-0.5">Grow</h3>
                     <p className="text-emerald-400 text-[10px] md:text-[10px] font-mono uppercase tracking-wider mb-1.5">Learning</p>
                     <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-[160px] mx-auto">
                        Enabling continuous learning and skill advancement
                     </p>
                 </div>
             </div>

             {/* 3. Connect */}
             <div className="flex flex-col items-center text-center space-y-3 group relative z-10">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center shadow-glass-lg group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon-blue">
                     <Network className="w-4 h-4 md:w-6 md:h-6 text-slate-300 group-hover:text-blue-300 transition-colors" />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-base md:text-lg font-sans mb-0.5">Connect</h3>
                     <p className="text-blue-400 text-[10px] md:text-[10px] font-mono uppercase tracking-wider mb-1.5">Earning</p>
                     <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-[160px] mx-auto">
                        Linking students with industry and opportunities
                     </p>
                 </div>
             </div>

             {/* 4. Lead */}
             <div className="flex flex-col items-center text-center space-y-3 group relative z-10">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center shadow-glass-lg group-hover:border-fuchsia-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon-fuchsia">
                     <Rocket className="w-4 h-4 md:w-6 md:h-6 text-slate-300 group-hover:text-fuchsia-300 transition-colors" />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-base md:text-lg font-sans mb-0.5">Lead</h3>
                     <p className="text-fuchsia-400 text-[10px] md:text-[10px] font-mono uppercase tracking-wider mb-1.5">Building</p>
                     <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-[160px] mx-auto">
                        Change the Game and start someting at your own
                     </p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
