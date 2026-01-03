import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Disc } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#030304] mt-20 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-oneirism-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-cinematic text-2xl font-bold text-white tracking-[0.2em]">ONEIRISM</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Things connect over time.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Explore</h4>
            <ul className="space-y-4 text-xs text-slate-500 uppercase tracking-widest font-medium">
              <li>
                <NavLink to="/gameplay" className="hover:text-oneirism-orange transition-colors">
                  Gameplay
                </NavLink>
              </li>
              <li>
                <NavLink to="/characters" className="hover:text-oneirism-orange transition-colors">
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-oneirism-orange transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="hover:text-oneirism-orange transition-colors">
                  News
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Community</h4>
            <ul className="space-y-4 text-xs text-slate-500 uppercase tracking-widest font-medium">
              <li>
                <a
                  href={SOCIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oneirism-orange transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-oneirism-orange transition-colors">
                  Reddit
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 opacity-70">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group"
              >
                <Disc size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-oneirism-orange hover:text-white transition-all duration-500 border border-white/5 hover:border-oneirism-orange group"
              >
                <Twitter size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-600 text-[10px] tracking-widest uppercase">
          <p>
            &copy; {new Date().getFullYear()} 2026 Oneirism.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
