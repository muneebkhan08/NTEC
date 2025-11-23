/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Users } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-10 animate-in fade-in slide-in-from-bottom-4">
      <div className="glass-panel p-8 rounded-3xl space-y-6">
        <div className="flex items-center gap-4 mb-6">
           <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
             <Users className="w-6 h-6 text-emerald-300" />
           </div>
           <h2 className="text-3xl font-bold text-white font-sans">Our Team</h2>
        </div>
         <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
                <p className="text-slate-400 text-sm">Visionaries driving the NTEC mission forward with strategic planning and industry partnerships.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <p className="text-slate-400 text-sm">Engineers and architects building the next generation of visual intelligence tools.</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Mentors</h3>
                <p className="text-slate-400 text-sm">Industry veterans providing guidance, code reviews, and career advice to members.</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-slate-400 text-sm">A vibrant network of students, learners, and creators supporting each other.</p>
            </div>
         </div>
      </div>
    </div>
  );
};
export default Team;