import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [embers, setEmbers] = useState<Array<{id: number, left: number, duration: number, delay: number, size: number}>>([]);

  useEffect(() => {
    const particleCount = 25;
    const newEmbers = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 25, // Slower, zero-g feel
      delay: Math.random() * 10,
      size: 1 + Math.random() * 3, // Smaller, finer ash
    }));
    setEmbers(newEmbers);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-oneirism-dark overflow-hidden">
      {/* Deep Space Base - Cool Blue/Black Tone Blend */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#050507] to-black" />
      
      {/* Global Ambient Haze - Subtle Orange/Blue Mix */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-oneirism-orange/5 mix-blend-screen pointer-events-none" />

      {/* The Architect's Grid - Rotating Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-[0.05]">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-[1px] border-blue-500/10 rounded-full border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border-[1px] border-white/5 rounded-full"
        />
      </div>

      {/* Atmospheric Fog Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-oneirism-purple/20 rounded-full mix-blend-screen filter blur-[120px]"
      />

      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-oneirism-orange/10 rounded-full mix-blend-screen filter blur-[150px]"
      />

      {/* Zero-G Embers/Ash */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 150, 0]
          }}
          transition={{ 
            duration: ember.duration, 
            repeat: Infinity, 
            delay: ember.delay,
            ease: "linear"
          }}
          className="absolute bg-oneirism-orange/80 rounded-full mix-blend-screen blur-[0.5px]"
          style={{
            left: `${ember.left}%`,
            width: ember.size,
            height: ember.size,
            boxShadow: `0 0 ${ember.size * 4}px rgba(255, 87, 34, 0.8)`
          }}
        />
      ))}

      {/* Film Grain Texture - High Quality */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,7,0.4)_70%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;