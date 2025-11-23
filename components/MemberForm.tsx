
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { UserPlus, Mail, Phone, School, Send, CheckCircle, ArrowLeft, Code2, Briefcase, Calculator, Landmark, Sparkles, Coins } from 'lucide-react';

interface MemberFormProps {
    onBack: () => void;
}

const MemberForm: React.FC<MemberFormProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
    }, 1500);
  };

  const toggleInterest = (id: string) => {
      setSelectedInterests(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
  };

  const INTERESTS = [
    { id: 'tech', label: 'Tech', icon: Code2 },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'maths_science', label: 'Maths & Science', icon: Calculator },
    { id: 'politics', label: 'Politics', icon: Landmark },
    { id: 'finance', label: 'Finance', icon: Coins },
  ];

  if (submitted) {
      return (
          <div className="max-w-2xl mx-auto pt-20 animate-in fade-in slide-in-from-bottom-8 text-center px-6">
              <div className="glass-panel p-12 rounded-[2rem] flex flex-col items-center gap-8 border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none"></div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-20 rounded-full"></div>
                    <div className="w-24 h-24 bg-gradient-to-tr from-violet-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    <h2 className="text-4xl font-bold text-white font-sans tracking-tight">Welcome Aboard!</h2>
                    <p className="text-violet-200/70 font-mono text-sm uppercase tracking-widest">Application Successfully Sent</p>
                  </div>
                  
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed text-lg font-light">
                      You've taken the first step towards the future. Our team is reviewing your profile and will send an onboarding packet to your email shortly.
                  </p>

                  <button 
                    onClick={onBack}
                    className="mt-4 px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all flex items-center gap-2 group"
                  >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Studio
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="max-w-4xl mx-auto pt-8 pb-20 px-4 animate-in fade-in slide-in-from-bottom-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-mono text-sm group"
      >
          <div className="p-1 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
             <ArrowLeft className="w-4 h-4" /> 
          </div>
          <span>Back to Studio</span>
      </button>

      <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
          {/* Left Panel: Info */}
          <div className="space-y-6">
              <div className="glass-panel p-8 rounded-[2rem] relative overflow-hidden border-violet-500/20 h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                 
                 <div className="w-14 h-14 bg-violet-500/10 rounded-2xl border border-violet-500/20 flex items-center justify-center mb-6 shadow-neon-violet">
                    <UserPlus className="w-7 h-7 text-violet-300" />
                 </div>

                 <h1 className="text-4xl font-bold text-white font-sans leading-tight mb-4">
                    Join the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">NTEC</span> Ecosystem
                 </h1>
                 
                 <div className="space-y-6 text-slate-300 leading-relaxed font-light flex-1">
                    <p>
                        Connect with like-minded innovators, get access to exclusive hackathons, and build your career with guidance from industry leaders.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Access to Premium Events</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>1:1 Mentorship Sessions</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Tech Workshops</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Networking</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Online sessions</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Hackathons</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Skill development</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>Resources worth thousands</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>and much more...</span>
                        </div>
                    </div>
                 </div>
              </div>
          </div>

          {/* Right Panel: Form */}
          <div className="glass-panel p-8 rounded-[2rem] border-white/5 bg-slate-900/40">
            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Info Group */}
                <div className="space-y-5">
                    <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-700"></span>
                        Candidate Profile
                    </h3>

                    <div className="space-y-4">
                        <div className="group relative">
                            <label className="text-xs font-mono text-violet-300 mb-1.5 block ml-1">Full Name</label>
                            <div className="relative">
                                <input required type="text" placeholder="John Doe" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-violet-500 focus:border-violet-500/50 transition-all group-hover:border-white/20" 
                                />
                                <UserPlus className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-violet-400 transition-colors" />
                            </div>
                        </div>

                        <div className="group relative">
                            <label className="text-xs font-mono text-violet-300 mb-1.5 block ml-1">Email Address</label>
                            <div className="relative">
                                <input required type="email" placeholder="john@university.edu" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-violet-500 focus:border-violet-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Mail className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-violet-400 transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="group relative">
                                <label className="text-xs font-mono text-violet-300 mb-1.5 block ml-1">Phone</label>
                                <div className="relative">
                                    <input required type="tel" placeholder="+1 (555)..." 
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-violet-500 focus:border-violet-500/50 transition-all group-hover:border-white/20" 
                                    />
                                    <Phone className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-violet-400 transition-colors" />
                                </div>
                            </div>
                             <div className="group relative">
                                <label className="text-xs font-mono text-violet-300 mb-1.5 block ml-1">Institution</label>
                                <div className="relative">
                                    <input required type="text" placeholder="University..." 
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-violet-500 focus:border-violet-500/50 transition-all group-hover:border-white/20" 
                                    />
                                    <School className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-violet-400 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interests Group */}
                <div className="space-y-5">
                    <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-700"></span>
                        Primary Focus (Select all that apply)
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {INTERESTS.map((item) => (
                            <label 
                                key={item.id} 
                                className={`cursor-pointer group ${item.id === 'maths_science' ? 'col-span-2' : ''}`}
                            >
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    value={item.id}
                                    checked={selectedInterests.includes(item.id)}
                                    onChange={() => toggleInterest(item.id)}
                                    className="peer hidden" 
                                />
                                <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-slate-950/30 border border-white/5 peer-checked:bg-violet-500/10 peer-checked:border-violet-500/50 peer-checked:shadow-neon-violet transition-all hover:bg-white/5 group-hover:border-white/10 h-full">
                                    <div className={`p-2 rounded-lg ${selectedInterests.includes(item.id) ? 'bg-violet-500 text-white' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'} transition-colors`}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-sm font-medium ${selectedInterests.includes(item.id) ? 'text-violet-300' : 'text-slate-400'} transition-colors`}>{item.label}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Motivation */}
                <div className="space-y-2 group">
                    <label className="text-xs font-mono text-violet-300 mb-1.5 block ml-1">Your Goals</label>
                    <textarea required rows={4} 
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-violet-500 focus:border-violet-500/50 transition-all resize-none leading-relaxed group-hover:border-white/20" 
                        placeholder="Tell us about your ambitions and what you hope to achieve with NTEC..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? (
                         <span className="flex items-center gap-2">Processing <Sparkles className="w-4 h-4 animate-spin" /></span>
                    ) : (
                        <><Send className="w-5 h-5" /> Submit Application</>
                    )}
                </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default MemberForm;
