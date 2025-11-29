import React from 'react';
import { motion } from 'framer-motion';
import { CHARACTERS } from '../constants';

const Characters: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">Faces of the Dream</h1>
        <p className="text-slate-400 text-lg">Meet the fragments of a shattered psyche.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CHARACTERS.map((char, index) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black"
          >
            {/* Image */}
            <img 
              src={char.image} 
              alt={char.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale" 
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-oneirism-orange uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                {char.role}
              </span>
              <h2 className="text-4xl font-cinematic font-bold text-white mb-4">{char.name}</h2>
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                <p className="text-slate-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-4">
                  {char.desc}
                </p>
              </div>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-oneirism-orange opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Characters;