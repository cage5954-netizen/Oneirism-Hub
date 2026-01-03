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
              Oneirism began when a burn injury prompted me to think differently about perception and narrative continuity. Since then, the project has grown through a range of other influences and continued exploration. The result is a world built from connected pieces rather than a single linear story.
            </p>
            <p className="italic text-slate-400 pl-6 border-l border-white/20">
              A landscape welded together by dream-like logic, where coherence emerges without explicit explanation
            </p>
            <p>
              The word <span className="text-oneirism-orange font-semibold">oneirism</span> refers to a state of awareness within layered dreams, where structure is sensed before it is understood. This idea provided an anchor.
            </p>
            <p>
              Individual sequences were made independently and later connected, with structure forming gradually through testing and refinement.
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
              Oneirism is structured as an exploratory experience
              <br />
              There are no enemies, guidance is indirect.
              <br />
              Nothing here tells you exactly what to do.
            </p>
            <p>
              Movement is central to the experience. Spaces respond subtly, encouraging exploration through motion rather than instruction.
            </p>
            <p className="text-oneirism-orange/90 font-cinematic text-2xl pt-2">
              The world doesn't guide you step by step.
              <br />
              Patterns emerge through repetition.
              <br />
              Meaning is something you notice, not something you're told.
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
              This is built using UE5’s Blueprint scripting, Niagara VFX, and motion-matching tools. Development follows an iterative process, with new mechanics were added, 
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
