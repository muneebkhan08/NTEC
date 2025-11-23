/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, Suspense, lazy } from 'react';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import WhyExist from './components/WhyExist';
import Contact from './components/Contact';
import IntroAnimation from './components/IntroAnimation';
import DestroyerAnimation from './components/DestroyerAnimation';
import { PenTool, Menu, X, Info, Users, Target, UserPlus, Briefcase, MessageSquare } from 'lucide-react';

// Lazy load form components for better performance
const MemberForm = lazy(() => import('./components/MemberForm'));
const MentorForm = lazy(() => import('./components/MentorForm'));

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleNav = (view: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelfDestruct = () => {
    if (isDestroyed || isRestoring) return;
    setIsDestroyed(true);
  };

  const handleDestroyerComplete = () => {
    setIsDestroyed(false);
    setIsRestoring(true);
    // Restoration CSS animation duration
    setTimeout(() => setIsRestoring(false), 2000); 
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#020617]">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {/* Destruction Layer */}
      {isDestroyed && <DestroyerAnimation onComplete={handleDestroyerComplete} />}

      {/* Main App Container - Controls visibility during destruction and reconstruction */}
      <div 
        className={`flex flex-col min-h-screen transition-all duration-300 ${
            isDestroyed ? 'opacity-0 scale-90 filter blur-xl' : 
            isRestoring ? 'animate-reconstruct' : 'opacity-100 scale-100 blur-0'
        }`}
      >
          <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-[1400px]">
            <div className="glass-panel rounded-2xl px-4 md:px-6 py-3 md:py-4 flex justify-between items-center relative">
              <div 
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div 
                  className="relative flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-xl bg-slate-900/50 border border-white/10 shadow-inner transition-colors cursor-pointer"
                  onClick={() => handleNav('HOME')}
                >
                   <PenTool className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-lg md:text-xl font-extrabold text-white tracking-tight font-sans flex items-center gap-2">
                    NTEC 
                    <button 
                        onClick={handleSelfDestruct}
                        className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-red-500/20 text-[10px] font-mono text-slate-400 hover:text-red-400 border border-white/5 hover:border-red-500/30 inline-block transition-all active:scale-95 cursor-pointer select-none"
                        title="Do not press"
                    >
                        New
                    </button>
                  </h1>
                  <p className="text-xs font-mono text-slate-400 tracking-wider uppercase hidden sm:block">National Tech & Entrepreneurship Club</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-4">
                 <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 md:p-2.5 rounded-xl bg-slate-900/50 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 transition-all hover:shadow-neon-violet active:scale-95"
                  >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
              </div>

              {/* Navigation Dropdown */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 glass-panel rounded-2xl p-2 animate-in fade-in slide-in-from-top-4 shadow-2xl z-50 overflow-hidden flex flex-col bg-[#0f172a]/95 backdrop-blur-xl border border-white/10">
                    <nav className="flex flex-col gap-1 p-2">
                        <button onClick={() => handleNav('CONNECT')} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all text-left group">
                            <MessageSquare className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                            <span className="font-medium font-sans">Connect</span>
                        </button>
                        <button onClick={() => handleNav('ABOUT')} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all text-left group">
                            <Info className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
                            <span className="font-medium font-sans">About Us</span>
                        </button>
                        <button onClick={() => handleNav('TEAM')} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all text-left group">
                            <Users className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
                            <span className="font-medium font-sans">Team</span>
                        </button>
                        <button onClick={() => handleNav('WHY_EXIST')} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all text-left group">
                            <Target className="w-4 h-4 text-fuchsia-400 group-hover:text-fuchsia-300" />
                            <span className="font-medium font-sans">Why we exist</span>
                        </button>
                    </nav>
                    
                    <div className="h-px bg-white/5 mx-4 my-2"></div>
                    
                    <div className="p-4 space-y-3 bg-slate-900/30 rounded-xl m-2 border border-white/5">
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Apply now as:</p>
                        <div className="grid grid-cols-2 gap-3">
                             <button onClick={() => handleNav('MEMBER_APPLY')} className="flex flex-col items-center justify-center gap-2 p-3 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 hover:border-violet-500/40 rounded-xl transition-all group active:scale-95">
                                 <UserPlus className="w-5 h-5 text-violet-400 group-hover:text-white" />
                                 <span className="text-[10px] font-bold text-violet-300 group-hover:text-white font-mono">MEMBER</span>
                             </button>
                             <button onClick={() => handleNav('MENTOR_APPLY')} className="flex flex-col items-center justify-center gap-2 p-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl transition-all group active:scale-95">
                                 <Briefcase className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                                 <span className="text-[10px] font-bold text-emerald-300 group-hover:text-white font-mono">MENTOR</span>
                             </button>
                        </div>
                    </div>
                </div>
              )}
            </div>
          </header>

          <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 flex flex-col relative z-0">
            <div className="flex-1">
                {currentView === 'HOME' && <Home onNavigate={handleNav} />}
                {currentView === 'CONNECT' && <Contact />}
                {currentView === 'ABOUT' && <About />}
                {currentView === 'TEAM' && <Team />}
                {currentView === 'WHY_EXIST' && <WhyExist />}
                {currentView === 'MEMBER_APPLY' && (
                  <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]"><div className="text-slate-400">Loading...</div></div>}>
                    <MemberForm onBack={() => handleNav('HOME')} />
                  </Suspense>
                )}
                {currentView === 'MENTOR_APPLY' && (
                  <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]"><div className="text-slate-400">Loading...</div></div>}>
                    <MentorForm onBack={() => handleNav('HOME')} />
                  </Suspense>
                )}
            </div>
          </main>

          <footer className="py-6 mt-auto border-t border-white/5 relative z-0">
            <div className="max-w-7xl mx-auto text-center px-4">
              <p className="text-xs font-mono text-slate-600">
                <span className="text-violet-500/70">NTEC</span>:<span className="text-emerald-500/70">Systems</span>$ Powered by EduAI
              </p>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default App;