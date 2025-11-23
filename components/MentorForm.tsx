
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Briefcase, Mail, Phone, Building2, Linkedin, Send, CheckCircle, ArrowLeft } from 'lucide-react';

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
              <div className="glass-panel p-12 rounded-3xl flex flex-col items-center gap-6 border-emerald-500/30 shadow-neon-emerald">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-sans">Thank you for Applying!</h2>
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                      We appreciate your interest in guiding the next generation. Our team will review your profile and reach out to schedule a discussion.
                  </p>
                  <button 
                    onClick={onBack}
                    className="mt-4 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20"
                  >
                      Return Home
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="max-w-3xl mx-auto pt-10 pb-20 px-4 animate-in fade-in slide-in-from-bottom-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 font-mono text-sm"
      >
          <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
           <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30 shadow-neon-emerald">
             <Briefcase className="w-8 h-8 text-emerald-300" />
           </div>
           <div>
             <h2 className="text-3xl font-bold text-white font-sans">Mentor Application</h2>
             <p className="text-slate-400 font-mono text-sm mt-1">Lead the Industry Future</p>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                        <input required type="text" placeholder="Jane Smith" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Briefcase className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                        <input required type="email" placeholder="jane@company.com" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                        <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">LinkedIn Profile</label>
                    <div className="relative">
                        <input required type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Linkedin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Company / Org</label>
                    <div className="relative">
                        <input required type="text" placeholder="Tech Corp Inc." className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Role / Title</label>
                    <div className="relative">
                        <input required type="text" placeholder="Senior Engineer" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all pl-10" />
                        <Briefcase className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Why do you want to mentor?</label>
                <textarea required rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none" placeholder="Share your motivation for guiding students..."></textarea>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
                {loading ? 'Processing...' : <><Send className="w-5 h-5" /> Submit Application</>}
            </button>
        </form>
      </div>
    </div>
  );
};

export default MentorForm;
