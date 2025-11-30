
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { NEWS_ITEMS, GAMEPLAY_HIGHLIGHTS, IMAGES, VIDEOS, PAGE_VARIANTS, MOTTO_LINES } from '../constants';
import Button from '../components/ui/Button';
import CinematicText from '../components/ui/CinematicText';
import { Play, ArrowRight, Layers, Gamepad2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - left - width / 2) / 25;
    const yPos = (event.clientY - top - height / 2) / 25;
    x.set(xPos);
    y.set(yPos);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateY: mouseX, rotateX: Number(mouseY) * -1 }}
      className={`preserve-3d transition-shadow duration-500 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollY } = useScroll();
  
  // Refined Parallax effects
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToTrailer = () => {
    const trailerSection = document.getElementById('trailer-section');
    trailerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Helper to get icon
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Layers size={20} />;
      case 1: return <Gamepad2 size={20} />;
      case 2: return <Zap size={20} />;
      default: return <Layers size={20} />;
    }
  };

  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={containerRef} 
      className="flex flex-col relative overflow-hidden"
    >
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 scale-110" 
        >
           <img 
            src={IMAGES.hero} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 brightness-90 saturate-[1.1]"
           />
           {/* Gradients to blend image into the dark background */}
           <div className="absolute inset-0 bg-gradient-to-t from-oneirism-dark via-transparent to-transparent opacity-100" />
           <div className="absolute inset-0 bg-gradient-to-b from-oneirism-darker via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 bg-oneirism-purple/20 mix-blend-overlay" />
           
           {/* Scanlines / Noise Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40" />
        </motion.div>

        <motion.div 
          style={{ y: textY }}
          className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center w-full"
        >
           {/* MOTTO SECTION - SLOW DREAM ANIMATION */}
           <div className="flex flex-col items-center justify-center w-full mb-20 relative space-y-10">
              {MOTTO_LINES.map((line, index) => {
                const isHighlight = index === 1 || index === 3;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ 
                      duration: 2.5, // Very slow reveal
                      delay: 0.5 + (index * 1.8), // Staggered heavily
                      ease: [0.22, 1, 0.36, 1] // Dream-like ease
                    }}
                    className={`animate-float`} 
                    style={{ animationDelay: `${index * 1.5}s` }} // Desynchronized floating
                  >
                     <h2 className={`font-cinematic uppercase tracking-[0.15em] text-center transition-all duration-1000 ${
                       isHighlight 
                         ? "text-3xl md:text-5xl lg:text-7xl font-bold text-oneirism-orange drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]" 
                         : "text-lg md:text-2xl text-slate-300 font-medium drop-shadow-lg"
                     }`}>
                       {line}
                     </h2>
                  </motion.div>
                );
              })}
           </div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 7.5, duration: 1.5 }} // Appears only after text is mostly done
             className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8"
           >
             <Button size="lg" className="min-w-[240px]" onClick={scrollToTrailer}>
                Watch Trailer <Play size={16} fill="currentColor" className="ml-1" />
             </Button>
             
             <Link to="/about">
              <Button variant="secondary" size="lg" className="min-w-[240px]">
                Read The Story
              </Button>
             </Link>
           </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 10, 0] }}
          transition={{ delay: 8, duration: 3, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-3"
        >
          Descend
          <div className="w-[1px] h-16 bg-gradient-to-b from-oneirism-orange to-transparent" />
        </motion.div>
      </section>

      {/* --- GAMEPLAY HIGHLIGHTS (3D TILT) --- */}
      <section className="relative py-40 px-6 max-w-7xl mx-auto w-full z-20">
        <div className="mb-24 text-center relative">
          <motion.div 
             initial={{ scaleX: 0, opacity: 0 }}
             whileInView={{ scaleX: 1, opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.2 }}
             className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"
          />
          <CinematicText 
            text="Gameplay Highlights" 
            className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-[0.2em] uppercase bg-oneirism-dark px-10 inline-block drop-shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 perspective-1000">
           {GAMEPLAY_HIGHLIGHTS.map((card, idx) => (
             <TiltCard
               key={idx}
               className="group relative h-[450px] rounded-sm bg-[#0a0504]/50 border border-white/5 backdrop-blur-sm"
             >
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.2, duration: 0.8 }}
                 viewport={{ once: true, margin: "-50px" }}
                 className="h-full w-full relative overflow-hidden"
               >
                 {/* Image */}
                 <div className="absolute inset-0 overflow-hidden">
                   <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-70 group-hover:opacity-50 grayscale group-hover:grayscale-0" 
                   />
                 </div>
                 
                 {/* Gradients */}
                 <div className="absolute inset-0 bg-gradient-to-t from-oneirism-dark via-transparent to-transparent opacity-90" />
                 
                 {/* Hover Glow Border */}
                 <div className="absolute inset-0 border border-white/0 group-hover:border-oneirism-orange/40 transition-colors duration-500 z-20" />
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-oneirism-orange/5 to-transparent pointer-events-none" />

                 {/* Content */}
                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center z-30 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="mb-6 text-oneirism-orange p-3 rounded-full bg-black/50 border border-oneirism-orange/30 shadow-[0_0_20px_rgba(255,87,34,0.2)] group-hover:scale-110 group-hover:bg-oneirism-orange group-hover:text-white transition-all duration-500">
                      {getIcon(idx)}
                   </div>
                   
                   <h4 className="text-lg font-bold font-cinematic mb-4 text-white uppercase tracking-[0.15em]">{card.title}</h4>
                   
                   <div className="h-[1px] w-0 bg-oneirism-orange mb-4 transition-all duration-700 group-hover:w-20" />
                   
                   <p className="text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed max-w-[240px]">
                     {card.desc}
                   </p>
                 </div>
               </motion.div>
             </TiltCard>
           ))}
        </div>
      </section>

      {/* --- TRAILER SECTION --- */}
      <section id="trailer-section" className="w-full bg-transparent border-y border-white/5 py-32 relative overflow-hidden scroll-mt-20">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-oneirism-purple/20 to-transparent pointer-events-none blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-2/3 h-full bg-gradient-to-r from-oneirism-orange/10 to-transparent pointer-events-none blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
             <h3 className="text-3xl font-cinematic font-bold text-white mb-4 border-b-2 border-oneirism-orange inline-block pb-2 uppercase tracking-widest">
               Watch The Trailer
             </h3>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full max-w-5xl mx-auto"
           >
             <div 
                className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group cursor-pointer bg-black"
                onClick={handlePlayClick}
             >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={VIDEOS.trailer}         
                    poster={IMAGES.hero}             
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    controls={isPlaying}
                />
                
                {/* Play Overlay */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors z-30">
                        <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-oneirism-orange group-hover:border-oneirism-orange transition-all duration-500 shadow-2xl">
                            <Play className="ml-2 text-white fill-white" size={36} />
                        </div>
                    </div>
                )}
                
                {/* Vignette */}
                {!isPlaying && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,black_120%)] z-20 pointer-events-none opacity-80" />
                )}
                
                {/* Footer UI */}
                {!isPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center gap-4 text-xs font-mono text-slate-300 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-oneirism-orange font-bold uppercase tracking-widest">Official Gameplay Trailer</span>
                        <div className="flex-grow h-[1px] bg-white/20"><div className="w-1/3 h-full bg-oneirism-orange shadow-[0_0_10px_#ff5722]"></div></div>
                    </div>
                )}
             </div>
           </motion.div>
        </div>
      </section>

      {/* --- LATEST NEWS PREVIEW --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8 gap-6">
          <CinematicText text="Transmissions" className="text-4xl md:text-5xl font-cinematic font-bold text-white uppercase tracking-[0.15em]" />
          <Link to="/news" className="text-slate-500 hover:text-white transition-colors flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-[10px] group mb-2">
            View Archive <div className="w-8 h-[1px] bg-slate-700 group-hover:w-16 group-hover:bg-oneirism-orange transition-all duration-300" />
          </Link>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-10 p-10 bg-[#0a0504]/60 border border-white/5 hover:border-oneirism-orange/30 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-oneirism-orange/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

              <div className="min-w-[160px] pt-1 relative z-10 border-r border-white/5 md:pr-8">
                <div className="text-oneirism-orange font-bold text-[10px] tracking-[0.3em] uppercase mb-2">Log Date</div>
                <div className="text-white font-cinematic text-xl tracking-widest">{item.date}</div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-oneirism-orange transition-colors duration-300 font-cinematic tracking-wide">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl font-light">{item.excerpt}</p>
              </div>
              
              <div className="md:ml-auto relative z-10 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="text-oneirism-orange" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
