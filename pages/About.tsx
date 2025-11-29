import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-12 border-b border-white/10 pb-6">
          BORN FROM A <span className="text-oneirism-orange">BURN</span>
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          {/* Origin Story */}
          <section>
            <p className="text-slate-300 leading-relaxed text-lg">
              Oneirism began about a year and a half ago. At the first year of university, I was having troubles with sleeping long hours. 
              I accidentally burned my left hand one evening. The sharp pain lingered as I drifted into a medicated sleep, and I was pulled into a 
              vivid, relentless series of dreams — a surreal, lava-drenched world where familiar objects and echoes of my past flickered like 
              half-remembered memories.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mt-4">
              When I woke, the burn’s sting clung to me, but then the discomfort ignited something. Later on, I found out there's the existence of 
              <span className="text-oneirism-orange font-bold"> “oneirism”</span>: a state where someone is caught in a chain of dreams, 
              semi-aware of their unreality yet anchored by a heavy, drowsy fog that blocks escape from sleep, endlessly cycling through shifting dreamscapes.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mt-4">
              Now I don't know if I fully experienced this, but I felt a shred of resemblance to what it's trying to say. It compelled me to find a way 
              to recreate that experience — to shape it, render it, and walk through it. Unreal Engine 5 felt like the only tool I needed. 
              I didn’t plan for this to become a “project.” It just... evolved. One sequence, one obstacle, one feeling at a time.
            </p>
          </section>

          {/* Philosophy */}
          <section className="bg-white/5 p-8 rounded-xl border border-white/5">
            <h2 className="text-2xl font-cinematic font-bold text-white mb-4 uppercase tracking-wider">What It's Trying To Be</h2>
            <p className="text-slate-400 mb-4">
              Oneirism isn’t trying to be a game in the traditional sense. <span className="text-white font-bold">There are no enemies.</span> No tutorials. 
              No pop-ups telling you what to do. It’s more of a surreal traversal gauntlet — a sensory sketchbook of movement, perception, and dream-logic.
            </p>
            <p className="text-slate-400">
              Every element exists to ask a question, not give an answer. The world doesn’t explain itself — but it responds to you. It watches. It shifts. 
              Sometimes it repeats. It’s not trying to be fair. It’s trying to be honest.
            </p>
          </section>

          {/* Technical Info */}
          <section>
            <h2 className="text-2xl font-cinematic font-bold text-white mb-4 uppercase tracking-wider">Making It Real</h2>
            <p className="text-slate-300">
              The game was built using UE5’s Blueprint scripting, Niagara VFX, and motion-matching tools. Development was iterative — new mechanics were added, 
              tested, and refined as ideas evolved.
            </p>
            <p className="text-slate-300 mt-4">
              Visual elements were frequently revised or removed entirely if they didn’t serve the intended feeling. Each feature, camera cut, and traversal event 
              was tested until the environment felt responsive and deliberate.
            </p>
            <p className="text-slate-300 mt-4 italic border-l-2 border-oneirism-orange pl-4">
              Oneirism remains a work-in-progress, but at its core, it’s a consistent effort to simulate dreamlike logic using responsive level design and 
              real-time rendering.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;