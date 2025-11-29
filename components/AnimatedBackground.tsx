import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-oneirism-dark overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-oneirism-darker via-oneirism-dark to-[#1a1a20]" />

      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-oneirism-purple rounded-full mix-blend-screen filter blur-[100px] opacity-30"
      />

      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-oneirism-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />

      <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
         transition={{ duration: 15, repeat: Infinity }}
         className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-blue-900 rounded-full mix-blend-screen filter blur-[90px] opacity-10"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80" style={{ background: 'radial-gradient(circle, transparent 40%, #000 100%)'}} />
    </div>
  );
};

export default AnimatedBackground;