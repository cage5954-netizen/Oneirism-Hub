
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PAGE_VARIANTS } from '../constants';

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 pb-24 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24"
      >
        {/* Origin Story */}
        <motion.section variants={sectionVariants}>
          <h1 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-10 border-b border-white/10 pb-6 relative inline-block">
            BORN FROM A <span className="text-oneirism-orange">BURN</span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '33%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-0 left-0 h-[2px] bg-oneirism-orange" 
            />
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 font-light leading-relaxed">
            <p>
              Oneirism wasn’t conceived as a story — it was sparked by an event, a single moment of searing clarity that split wakefulness from dream. Somewhere between pain and sleep, a world surfaced: molten, shifting, stitched together from fragments that didn’t quite belong. Objects half-remembered. Places never visited. Echoes without sources.
            </p>
            <p className="italic text-slate-400 pl-6 border-l border-white/20">
              A landscape built from the logic of dreams, indifferent to explanation.
            </p>
            <p>
              Later came the word <span className="text-oneirism-orange font-semibold">oneirism</span> — a state where someone drifts through chained dreams, aware enough to notice the seams yet unable to break free from the fog that binds them. That definition became the anchor. The rest grew around it.
            </p>
            <p>
              Oneirism didn’t begin as a “project.” It unfolded on its own terms. A sequence became an idea; an idea became a path; the path kept rearranging itself. What exists now is simply what the dream insisted on becoming.
            </p>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section 
          variants={sectionVariants}
          className="bg-white/5 p-10 rounded-sm border-l-2 border-oneirism-orange backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute top-0 right-0 p-32 bg-oneirism-orange/5 blur-3xl rounded-full pointer-events-none group-hover:bg-oneirism-orange/10 transition-colors duration-1000" />
          
          <h2 className="text-3xl font-cinematic font-bold text-white mb-8 uppercase tracking-widest relative z-10">What It’s Trying To Be</h2>
          
          <div className="space-y-8 text-slate-300 text-lg relative z-10">
            <p className="font-medium text-white border-l-2 border-white/20 pl-4">
              Oneirism isn’t a traditional game.
              <br />
              There are no enemies. No guidance. No prompts.
              <br />
              Nothing is here to teach you what to do.
            </p>
            <p>
              It’s a surreal traversal — a sketchbook of movement, perception, and dream-logic. Every element is designed to suggest, not explain; to respond, not to direct. The world doesn’t speak plainly, but it watches. It shifts. It remembers.
            </p>
            <p className="text-oneirism-orange/90 font-cinematic text-2xl pt-2">
              Sometimes it repeats. Sometimes it misleads.
              <br />
              It isn’t trying to be fair.
              <br />
              It’s trying to be honest.
            </p>
          </div>
        </motion.section>

        {/* Technical Info */}
        <motion.section variants={sectionVariants}>
          <h2 className="text-2xl font-cinematic font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-4">
            Making It Real <div className="h-[1px] flex-grow bg-white/10" />
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              The game was built using UE5’s Blueprint scripting, Niagara VFX, and motion-matching tools. Development was iterative — new mechanics were added, 
              tested, and refined as ideas evolved.
            </p>
            <p>
              Visual elements were frequently revised or removed entirely if they didn’t serve the intended feeling. Each feature, camera cut, and traversal event 
              was tested until the environment felt responsive and deliberate.
            </p>
            <p className="italic text-slate-500 text-sm mt-6">
              Oneirism remains a work-in-progress, but at its core, it’s a consistent effort to simulate dreamlike logic using responsive level design and 
              real-time rendering.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default About;
