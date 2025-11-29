import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Youtube, Gamepad2, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-cinematic text-xl font-bold text-white tracking-widest">ONEIRISM</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Explore the boundaries of reality in this surreal UE5 experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><NavLink to="/gameplay" className="hover:text-oneirism-orange transition-colors">Gameplay</NavLink></li>
              <li><NavLink to="/characters" className="hover:text-oneirism-orange transition-colors">Characters</NavLink></li>
              <li><NavLink to="/about" className="hover:text-oneirism-orange transition-colors">Story</NavLink></li>
              <li><NavLink to="/news" className="hover:text-oneirism-orange transition-colors">Devlog</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Community</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Reddit</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Steam Forums</a></li>
              <li><a href="#" className="hover:text-oneirism-orange transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-300">
                <Disc size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-300">
                <Gamepad2 size={18} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Oneirism Game Studios. All rights reserved. Powered by Unreal Engine 5.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;