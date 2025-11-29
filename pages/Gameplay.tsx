import React from 'react';
import { motion } from 'framer-motion';

const Gameplay: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">A Surreal Traversal Gauntlet</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          No enemies. No tutorials. Just you and the shifting dreamscape.
        </p>
      </div>

      {/* Feature 1 */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src="https://picsum.photos/800/600?random=20" alt="Obstacle Course" className="rounded-xl shadow-2xl shadow-oneirism-orange/20 border border-white/10" />
        </motion.div>
        <div className="space-y-6">
          <h2 className="text-3xl font-cinematic font-bold text-oneirism-orange">Sensory Movement</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            Movement in Oneirism is about flow. The environment is a physical puzzle. 
            Navigate vertical parkour zones, time your dashes through lightning traps, and adapt to gravity that feels heavier the deeper you sleep.
            It's not about fighting; it's about overcoming the terrain itself.
          </p>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="space-y-6 md:order-1 order-2">
          <h2 className="text-3xl font-cinematic font-bold text-blue-400">Dream Logic</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            The world doesn't explain itself. Corridors loop. Landmarks shift. 
            You are walking through a sensory sketchbook of perception.
            Every element exists to ask a question, not give an answer.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:order-2 order-1"
        >
          <img src="https://picsum.photos/800/600?random=21" alt="Dream Logic" className="rounded-xl shadow-2xl shadow-blue-500/20 border border-white/10" />
        </motion.div>
      </section>

      {/* Mechanics Grid */}
      <h3 className="text-3xl font-cinematic font-bold text-white mb-12 text-center">Core Pillars</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
          <h4 className="text-xl font-bold mb-2 text-oneirism-orange">Atmosphere First</h4>
          <p className="text-slate-400 text-sm">Visuals and audio drive the experience, creating a heavy, drowsy fog that anchors you to the world.</p>
        </div>
        <div className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
          <h4 className="text-xl font-bold mb-2 text-oneirism-orange">Responsive World</h4>
          <p className="text-slate-400 text-sm">The environment watches you. It shifts. Sometimes it repeats. It responds to your presence.</p>
        </div>
        <div className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
          <h4 className="text-xl font-bold mb-2 text-oneirism-orange">Unforgiving Platforming</h4>
          <p className="text-slate-400 text-sm">It's not trying to be fair. It's trying to be honest. Precision is your only tool.</p>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;