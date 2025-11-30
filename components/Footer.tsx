import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Youtube, Gamepad2, Disc } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#030304] mt-20 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-oneirism-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          <div className="space-y-6">
            <h3 className="font-cinematic text-2xl font-bold text-white tracking-[0.2em]">ONEIRISM</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Explore the boundaries of reality in this surreal UE5 experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Explore</h4>
            <ul className="space-y-4 text-xs text-slate-500 uppercase tracking-widest font-medium">
              <li><NavLink to="/gameplay" className="hover:text-oneirism-orange transition-colors">Gameplay</NavLink></li>
              <li><NavLink to="/characters" className="hover:text-oneirism-orange transition-colors">Characters</NavLink></li>
              <li><NavLink to="/about" className="hover:text-oneirism-orange transition-colors">Story</NavLink></li>
              <li><NavLink to="/news" className="hover:text-oneirism-orange transition-colors">Devlog</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Community</h4>
            <ul className="space-y-4 text-xs text-slate-500 uppercase tracking-widest font-medium">
              <li><a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-oneirism-orange transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Reddit</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Steam Forums</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Connect</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group">
                <Disc size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group">
                <Twitter size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group">
                <Youtube size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group">
                <Gamepad2 size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-600 text-[10px] tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Oneirism Game Studios. All rights reserved. Powered by Unreal Engine 5.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;