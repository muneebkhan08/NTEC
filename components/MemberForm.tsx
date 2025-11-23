
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { UserPlus, Mail, Phone, School, BookOpen, Send, CheckCircle, ArrowLeft } from 'lucide-react';

interface MemberFormProps {
    onBack: () => void;
}

const MemberForm: React.FC<MemberFormProps> = ({ onBack }) => {
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
              <div className="glass-panel p-12 rounded-3xl flex flex-col items-center gap-6 border-violet-500/30 shadow-neon-violet">
                  <div className="w-20 h-20 bg-violet-500/20 rounded-full flex items-center justify-center border border-violet-500/50">
                      <CheckCircle className="w-10 h-10 text-violet-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-sans">Application Received!</h2>
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                      Welcome to the queue. Our team is reviewing your application to join NTEC. You will hear from us shortly via email.
                  </p>
                  <button 
                    onClick={onBack}
                    className="mt-4 px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/20"
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
           <div className="p-3 bg-violet-500/20 rounded-xl border border-violet-500/30 shadow-neon-violet">
             <UserPlus className="w-8 h-8 text-violet-300" />
           </div>
           <div>
             <h2 className="text-3xl font-bold text-white font-sans">Member Application</h2>
             <p className="text-slate-400 font-mono text-sm mt-1">Join the NTEC Ecosystem</p>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                        <input required type="text" placeholder="John Doe" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all pl-10" />
                        <UserPlus className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                        <input required type="email" placeholder="john@university.edu" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all pl-10" />
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                        <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all pl-10" />
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Current Institution</label>
                    <div className="relative">
                        <input required type="text" placeholder="University / College Name" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all pl-10" />
                        <School className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Primary Interest</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Software Dev', 'UI/UX Design', 'Product Mgmt', 'Data Science'].map((interest) => (
                        <label key={interest} className="cursor-pointer group">
                            <input type="radio" name="interest" className="peer hidden" />
                            <div className="px-3 py-2 rounded-lg bg-slate-950/50 border border-white/10 text-slate-400 text-sm text-center peer-checked:bg-violet-500/20 peer-checked:text-violet-300 peer-checked:border-violet-500/50 transition-all hover:bg-white/5">
                                {interest}
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-violet-300 uppercase tracking-wider">Why do you want to join?</label>
                <textarea required rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none" placeholder="Tell us about your goals and what you hope to achieve with NTEC..."></textarea>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
                {loading ? 'Processing...' : <><Send className="w-5 h-5" /> Submit Application</>}
            </button>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
