
import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, PAGE_VARIANTS } from '../constants';
import CinematicText from '../components/ui/CinematicText';

const Gameplay: React.FC = () => {
  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-32 px-6 max-w-7xl mx-auto overflow-hidden relative"
    >
      
      {/* Background Horizon Line */}
      <div className="fixed top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-40 relative">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-8xl font-cinematic font-black text-white mb-8 tracking-[0.1em] uppercase leading-none drop-shadow-2xl">
            Traversal <br /> <span className="text-transparent bg-clip-text bg-gradient-to-t from-oneirism-orange to-red-600">Gauntlet</span>
          </h1>
        </motion.div>
        <motion.div 
           initial={{ width: 0 }} 
           animate={{ width: '120px' }} 
           transition={{ delay: 0.8, duration: 1 }}
           className="h-[2px] bg-oneirism-orange mx-auto mb-10 shadow-[0_0_10px_#ff5722]" 
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          No enemies. No tutorials. Just you and the shifting dreamscape.
        </motion.p>
      </div>

      {/* Feature 1 - Alternating Layout */}
      <section className="grid md:grid-cols-2 gap-20 items-center mb-48 relative">
        {/* Connecting Line Vertical */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative group perspective-1000"
        >
          {/* Back Glow */}
          <div className="absolute -inset-8 bg-oneirism-orange/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-1000" />
          
          <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
             <img src={IMAGES.gameplay1} alt="Obstacle Course" className="w-full h-full object-cover aspect-[4/3] opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
             {/* Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
          </div>

          <div className="absolute -bottom-10 -right-10 text-[120px] font-cinematic font-black text-white/5 z-0 leading-none select-none">01</div>
        </motion.div>
        
        <div className="space-y-8 pl-0 md:pl-12 relative z-10">
          <CinematicText text="Sensory Movement" className="text-4xl font-cinematic font-bold text-white uppercase tracking-widest" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-lg border-l border-oneirism-orange pl-8 py-2">
              Movement in Oneirism is about flow. The environment is a physical puzzle. 
              Navigate vertical parkour zones, time your dashes through lightning traps, and adapt to gravity that feels heavier the deeper you sleep.
            </p>
            <p className="text-slate-500 leading-relaxed font-light">
              It's not about fighting; it's about overcoming the terrain itself. Every jump must be calculated, every landing precise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="grid md:grid-cols-2 gap-20 items-center mb-48 relative">
        <div className="space-y-8 pr-0 md:pr-12 md:text-right md:order-1 order-2 relative z-10">
          <CinematicText text="Dream Logic" className="text-4xl font-cinematic font-bold text-blue-100 uppercase tracking-widest" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col md:items-end"
          >
            <p className="text-slate-300 leading-relaxed text-lg border-l md:border-l-0 md:border-r border-blue-500/50 pl-8 md:pl-0 md:pr-8 py-2">
              The world doesn't explain itself. Corridors loop. Landmarks shift. 
              You are walking through a sensory sketchbook of perception.
            </p>
            <p className="text-slate-500 leading-relaxed font-light">
              Every element exists to ask a question, not give an answer. The logic is internal, consistent only to the dream itself.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:order-2 order-1 relative group"
        >
          <div className="absolute -inset-8 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-1000" />
          
           <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
            <img src={IMAGES.gameplay2} alt="Dream Logic" className="w-full h-full object-cover aspect-[4/3] opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
          </div>
          
          <div className="absolute -bottom-10 -left-10 text-[120px] font-cinematic font-black text-white/5 z-0 leading-none select-none">02</div>
        </motion.div>
      </section>

      {/* Mechanics Grid - Monolith Style */}
      <div className="relative py-20">
        <div className="relative z-10">
            <h3 className="text-3xl font-cinematic font-bold text-white mb-20 text-center tracking-[0.3em] uppercase opacity-80">Core Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { title: "Atmosphere First", text: "Visuals and audio drive the experience, creating a heavy, drowsy fog that anchors you.", color: "border-oneirism-orange" },
                    { title: "Responsive World", text: "The environment watches you. It shifts. Sometimes it repeats. It responds to your presence.", color: "border-blue-500" },
                    { title: "Unforgiving", text: "It's not trying to be fair. It's trying to be honest. Precision is your only tool.", color: "border-red-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`bg-[#0a0a0c] p-12 border-t-2 ${item.color} relative group overflow-hidden`}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <h4 className="text-2xl font-bold mb-6 text-white font-cinematic uppercase tracking-wider relative z-10">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-8 font-light relative z-10">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gameplay;
