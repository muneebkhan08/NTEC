/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Target } from 'lucide-react';

const WhyExist: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-10 animate-in fade-in slide-in-from-bottom-4">
      <div className="glass-panel p-8 rounded-3xl space-y-6">
        <div className="flex items-center gap-4 mb-6">
           <div className="p-3 bg-fuchsia-500/20 rounded-xl border border-fuchsia-500/30">
             <Target className="w-6 h-6 text-fuchsia-300" />
           </div>
           <h2 className="text-3xl font-bold text-white font-sans">Why We Exist</h2>
        </div>
        <div className="space-y-6 text-slate-300">
           <p className="text-lg font-light leading-relaxed">
             The rapid evolution of technology has created a disconnect between learning and doing. Traditional education often lags behind industry needs, leaving aspiring technologists without a clear path to impact. NTEC exists to close that loop.
           </p>
           <div className="pl-6 border-l-2 border-fuchsia-500/50 space-y-4 py-2">
             <blockquote className="italic text-slate-400 text-xl font-serif">
               "To empower the next generation of tech leaders with the tools to visualize, understand, and create complex systems."
             </blockquote>
           </div>
           <p className="leading-relaxed">
             We exist to guide talent through structured pathways (Guide), enable deep skill acquisition (Grow), facilitate meaningful industry connections (Connect), and foster the confidence to build independent ventures (Lead).
           </p>
        </div>
      </div>
    </div>
  );
};
export default WhyExist;