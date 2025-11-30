
import React from 'react';
import { motion } from 'framer-motion';
import { CHARACTERS, PAGE_VARIANTS } from '../constants';
import CinematicText from '../components/ui/CinematicText';

const Characters: React.FC = () => {
  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-32 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-32">
        <h1 className="text-5xl md:text-8xl font-cinematic font-black text-white mb-6 uppercase tracking-[0.05em] drop-shadow-2xl">
          Faces of the <span className="text-transparent bg-clip-text bg-gradient-to-br from-oneirism-orange to-red-900">Void</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg tracking-[0.4em] uppercase font-light">Fragments of a shattered psyche</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CHARACTERS.map((char, index) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className="group relative h-[700px] bg-[#050505] overflow-hidden border border-white/5 hover:border-oneirism-orange/40 transition-colors duration-700"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
                <img 
                src={char.image} 
                alt={char.name} 
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100" 
                />
            </div>
            
            {/* Hologram Scanlines Effect on Hover */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-500 z-10" />
            
            {/* Deep Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 z-10" />
            
            {/* Hover Frame Effect */}
            <div className="absolute inset-6 border border-white/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none z-20" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-10 z-30 flex flex-col justify-end h-full">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex items-center gap-4 mb-5">
                    <div className="h-[2px] w-10 bg-oneirism-orange shadow-[0_0_10px_#ff5722]" />
                    <span className="text-oneirism-orange uppercase tracking-[0.25em] text-[10px] font-bold">
                    {char.role}
                    </span>
                </div>
                
                <h2 className="text-4xl font-cinematic font-bold text-white mb-6 uppercase tracking-wider">{char.name}</h2>
                
                <div className="overflow-hidden max-h-0 group-hover:max-h-[300px] transition-all duration-1000 delay-100 ease-in-out">
                    <p className="text-slate-300 leading-relaxed text-sm pb-4 border-t border-white/10 pt-6 font-light">
                    {char.desc}
                    </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Characters;
