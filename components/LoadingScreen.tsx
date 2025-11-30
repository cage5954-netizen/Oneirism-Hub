
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: 'blur(20px)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020203] text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.05),transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        {/* Cinematic Logo Animation */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1em", scale: 0.9 }}
          animate={{ opacity: 1, letterSpacing: "0.2em", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <h1 className="text-4xl md:text-6xl font-cinematic font-bold text-white uppercase tracking-widest relative z-10">
            ONEIRISM
          </h1>
          {/* Logo Reflection/Glow */}
          <div className="absolute top-0 left-0 w-full h-full text-oneirism-orange blur-lg opacity-30 animate-pulse-slow">
             ONEIRISM
          </div>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-96 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-oneirism-orange shadow-[0_0_15px_#ff5722]"
          />
        </div>

        {/* Status Text */}
        <div className="mt-6 h-6 overflow-hidden flex flex-col items-center">
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] font-mono text-oneirism-orange tracking-[0.3em] uppercase"
            >
                SYCHRONIZING DREAM STATE...
            </motion.p>
        </div>
      </div>

      {/* Footer System Text */}
      <div className="absolute bottom-12 text-[9px] text-slate-700 font-mono tracking-widest uppercase">
        <span className="mr-4">System: UE5_Core</span>
        <span>Status: Online</span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
