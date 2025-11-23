
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Briefcase, Mail, Phone, Building2, Linkedin, Send, CheckCircle, ArrowLeft, Globe, Award, Users } from 'lucide-react';

interface MentorFormProps {
    onBack: () => void;
}

const MentorForm: React.FC<MentorFormProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
      return (
          <div className="max-w-2xl mx-auto pt-20 animate-in fade-in slide-in-from-bottom-8 text-center px-6">
              <div className="glass-panel p-12 rounded-[2rem] flex flex-col items-center gap-8 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none"></div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 rounded-full"></div>
                    <div className="w-24 h-24 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg relative z-10">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    <h2 className="text-4xl font-bold text-white font-sans tracking-tight">Thank You</h2>
                    <p className="text-emerald-200/70 font-mono text-sm uppercase tracking-widest">Application Received</p>
                  </div>
                  
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed text-lg font-light">
                      We appreciate your willingness to guide the next generation. Our leadership team will review your credentials and reach out shortly.
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
         {/* Left Panel */}
         <div className="space-y-6">
            <div className="glass-panel p-8 rounded-[2rem] relative overflow-hidden border-emerald-500/20 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-6 shadow-neon-emerald">
                    <Briefcase className="w-7 h-7 text-emerald-300" />
                </div>

                <h1 className="text-4xl font-bold text-white font-sans leading-tight mb-4">
                    Shape the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Future</span> Industry
                </h1>
                
                <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                    <p>
                        Share your expertise, mentor promising talent, and give back to the tech community through NTEC's mentorship program.
                    </p>
                    
                    <div className="space-y-4 pt-4">
                         <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-white">Recognized Impact</h4>
                                <p className="text-xs text-slate-400 mt-1">Get featured as a key contributor in our network.</p>
                            </div>
                         </div>
                         <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                            <Users className="w-5 h-5 text-emerald-400 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-white">Talent Pipeline</h4>
                                <p className="text-xs text-slate-400 mt-1">Connect with top-tier students for potential recruitment.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Right Panel: Form */}
         <div className="glass-panel p-8 rounded-[2rem] border-white/5 bg-slate-900/40">
            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Contact */}
                <div className="space-y-5">
                     <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-700"></span>
                        Personal Details
                    </h3>
                    <div className="space-y-4">
                         <div className="group relative">
                            <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Full Name</label>
                            <div className="relative">
                                <input required type="text" placeholder="Jane Smith" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Briefcase className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                        <div className="group relative">
                            <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Email Address</label>
                            <div className="relative">
                                <input required type="email" placeholder="jane@company.com" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Mail className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                         <div className="group relative">
                            <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Phone Number</label>
                            <div className="relative">
                                <input required type="tel" placeholder="+1 (555)..." 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Phone className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Professional */}
                <div className="space-y-5">
                    <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-700"></span>
                        Professional Profile
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="group relative">
                            <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Current Company</label>
                            <div className="relative">
                                <input required type="text" placeholder="Tech Corp" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Building2 className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                        <div className="group relative">
                            <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Role / Title</label>
                            <div className="relative">
                                <input required type="text" placeholder="Senior Engineer" 
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                                />
                                <Briefcase className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">LinkedIn URL</label>
                        <div className="relative">
                            <input required type="url" placeholder="https://linkedin.com/in/..." 
                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all group-hover:border-white/20" 
                            />
                            <Linkedin className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Section 3: Motivation */}
                 <div className="space-y-2 group">
                    <label className="text-xs font-mono text-emerald-300 mb-1.5 block ml-1">Why Mentor?</label>
                    <textarea required rows={4} 
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500/50 transition-all resize-none leading-relaxed group-hover:border-white/20" 
                        placeholder="Briefly describe your motivation and what you can offer to the community..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                     {loading ? (
                         <span className="flex items-center gap-2">Processing...</span>
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

export default MentorForm;
