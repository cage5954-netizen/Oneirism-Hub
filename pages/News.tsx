
import React from 'react';
import { NEWS_ITEMS, PAGE_VARIANTS } from '../constants';
import { motion, Variants } from 'framer-motion';

const News: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      filter: 'blur(5px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-screen"
    >
      <div className="border-b border-white/5 pb-10 mb-16 relative overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-oneirism-orange via-white/20 to-transparent"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-cinematic font-black text-white uppercase tracking-[0.1em]"
        >
          Transmissions
        </motion.h1>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-10"
      >
        {NEWS_ITEMS.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={cardVariants}
            className="group relative grid md:grid-cols-5 gap-0 bg-[#08080a] border border-white/5 hover:border-oneirism-orange/40 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-oneirism-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Image Section */}
            <div className="md:col-span-2 h-64 md:h-auto relative overflow-hidden border-r border-white/5">
              <div className="absolute inset-0 bg-oneirism-orange/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100" 
              />
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center relative z-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-6 bg-oneirism-orange shadow-[0_0_8px_#ff5722]" />
                <span className="text-oneirism-orange text-[10px] font-bold uppercase tracking-[0.3em]">
                  Log: {item.date}
                </span>
              </div>
              
              <h2 className="text-3xl font-cinematic font-bold text-white mb-6 group-hover:text-oneirism-orange transition-colors duration-500 tracking-wide">
                {item.title}
              </h2>
              
              <p className="text-slate-400 text-base leading-relaxed max-w-2xl font-light">
                {item.excerpt}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default News;
