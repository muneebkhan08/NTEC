/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Info } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-10 animate-in fade-in slide-in-from-bottom-4">
      <div className="glass-panel p-8 rounded-3xl space-y-6">
        <div className="flex items-center gap-4 mb-6">
           <div className="p-3 bg-violet-500/20 rounded-xl border border-violet-500/30">
             <Info className="w-6 h-6 text-violet-300" />
           </div>
           <h2 className="text-3xl font-bold text-white font-sans">About Us</h2>
        </div>
        <div className="space-y-4 text-slate-300 leading-relaxed font-light text-lg">
           <p>
             NTEC (National Tech & Entrepreneurship Club) is a forward-thinking organization dedicated to bridging the gap between theoretical knowledge and practical application in the technology sector.
           </p>
           <p>
             We believe in the power of visual intelligence and automated architecture to simplify complexity. Our platform serves as a beacon for developers, students, and industry leaders to collaborate, visualize, and build the future.
           </p>
           <p>
              By combining state-of-the-art AI analysis with intuitive visual tools, we empower our members to see the bigger picture—literally transforming codebases into blueprints and articles into insights.
           </p>
        </div>
      </div>
    </div>
  );
};
export default About;