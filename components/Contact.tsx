
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter, MessageCircle, Send, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-10 animate-in fade-in slide-in-from-bottom-4 mb-20">
      <div className="glass-panel p-8 rounded-3xl space-y-8">
        <div className="flex items-center gap-4 mb-2">
           <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30 shadow-neon-violet">
             <MessageSquare className="w-6 h-6 text-indigo-300" />
           </div>
           <h2 className="text-3xl font-bold text-white font-sans">Connect With Us</h2>
        </div>
        
        <p className="text-slate-300 font-light text-lg leading-relaxed">
            Have questions about the club, partnerships, or upcoming events? Reach out to our team directly or join our community channels.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
                <h3 className="text-white font-bold font-mono uppercase tracking-wider text-sm mb-4">Direct Contact</h3>
                
                <a href="mailto:contact@ntec.edu" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all group">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300 group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-mono uppercase">Email Us</p>
                        <p className="text-slate-200 font-medium group-hover:text-white">contact@ntec.edu</p>
                    </div>
                </a>

                <a href="tel:+1234567890" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all group">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-mono uppercase">Call Us</p>
                        <p className="text-slate-200 font-medium group-hover:text-white">+1 (555) 123-4567</p>
                    </div>
                </a>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
                <h3 className="text-white font-bold font-mono uppercase tracking-wider text-sm mb-4">Social Handles</h3>
                <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-[#0077b5]/20 border border-white/5 hover:border-[#0077b5]/50 rounded-xl transition-all group">
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-[#0077b5]" />
                        <span className="text-sm text-slate-300 group-hover:text-white">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-[#E1306C]/20 border border-white/5 hover:border-[#E1306C]/50 rounded-xl transition-all group">
                        <Instagram className="w-5 h-5 text-slate-400 group-hover:text-[#E1306C]" />
                        <span className="text-sm text-slate-300 group-hover:text-white">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-[#1877F2]/20 border border-white/5 hover:border-[#1877F2]/50 rounded-xl transition-all group">
                        <Facebook className="w-5 h-5 text-slate-400 group-hover:text-[#1877F2]" />
                        <span className="text-sm text-slate-300 group-hover:text-white">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-slate-700 border border-white/5 hover:border-slate-500 rounded-xl transition-all group">
                        <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white" />
                        <span className="text-sm text-slate-300 group-hover:text-white">X / Twitter</span>
                    </a>
                </div>
            </div>
        </div>

        {/* WhatsApp Community */}
        <div className="pt-6 border-t border-white/5">
            <div className="bg-gradient-to-r from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <MessageCircle className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Join the Community</h3>
                        <p className="text-emerald-200/70 text-sm">Get instant updates on WhatsApp</p>
                    </div>
                </div>

                <a 
                    href="#"
                    className="px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 relative z-10 whitespace-nowrap"
                >
                    Join WhatsApp Group <Send className="w-4 h-4" />
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
