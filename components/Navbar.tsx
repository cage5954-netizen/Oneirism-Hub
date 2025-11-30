
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-8"
      )}
    >
      {/* Scrolled Glow Line */}
      <div className={clsx(
        "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-oneirism-orange/30 to-transparent transition-opacity duration-700",
        isScrolled ? "opacity-100" : "opacity-0"
      )} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-cinematic font-bold tracking-[0.2em] text-white hover:text-oneirism-orange transition-colors duration-500 drop-shadow-lg z-50"
        >
          ONEIRISM
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-500 relative group py-2",
                  isActive ? "text-oneirism-orange" : "text-slate-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Center Expanding Line */}
                  <span className={clsx(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-oneirism-orange transition-all duration-500 ease-out",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                  )} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-oneirism-orange transition-colors duration-300 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden fixed inset-0 z-40 bg-[#050507]/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            {/* Background Detail */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.1),transparent)] pointer-events-none" />
            
            <div className="flex flex-col space-y-8 items-center relative z-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        "text-3xl font-cinematic uppercase tracking-[0.15em] transition-all duration-500",
                        isActive ? "text-oneirism-orange scale-110 drop-shadow-[0_0_15px_rgba(255,87,34,0.4)]" : "text-slate-500 hover:text-white"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '100px' }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="h-[1px] bg-white/20 mt-12"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
