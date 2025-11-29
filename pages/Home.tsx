import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MOTTO_LINES, NEWS_ITEMS } from '../constants';
import Button from '../components/ui/Button';
import { Play, ArrowRight, ChevronRight, Gamepad2, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Cinematic Video/Image Background Placeholder */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-oneirism-dark via-transparent to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-b from-oneirism-darker via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
           {/* Animated Motto */}
           <div className="space-y-4 mb-12">
            {MOTTO_LINES.map((line, index) => (
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5 + index * 0.8, ease: "easeOut" }}
                className={`font-cinematic text-xl md:text-3xl lg:text-5xl tracking-widest font-bold uppercase ${
                  index === 1 || index === 3 ? 'text-oneirism-orange drop-shadow-[0_0_15px_rgba(255,87,34,0.6)]' : 'text-slate-200'
                }`}
              >
                {line}
              </motion.h2>
            ))}
           </div>

           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 4, duration: 1 }}
             className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
           >
             <Button size="lg" className="min-w-[200px]" onClick={scrollToTrailer}>
               Watch Trailer <Play size={18} fill="currentColor" />
             </Button>
             <Link to="/about">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Read The Story
              </Button>
             </Link>
           </motion.div>
        </div>
      </section>

      {/* --- GAMEPLAY HIGHLIGHTS --- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cinematic font-bold mb-4 text-white tracking-widest uppercase"
          >
            Gameplay Highlights
          </motion.h3>
          <div className="h-1 w-24 bg-oneirism-orange rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Spawn & Obstacle Arena", icon: <Layers />, desc: "Navigating the initial lava-drenched obstacles.", img: "https://picsum.photos/600/400?random=10" },
             { title: "Vertical Parkour Zone", icon: <Gamepad2 />, desc: "Ascending the shattered fragments of reality.", img: "https://picsum.photos/600/400?random=11" },
             { title: "Lightning Axe Trap Event", icon: <Zap />, desc: "Timing-based survival sequences.", img: "https://picsum.photos/600/400?random=12" },
           ].map((card, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.2 }}
               viewport={{ once: true }}
               className="group relative h-[300px] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg"
             >
               <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               
               <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                 <h4 className="text-lg font-bold font-cinematic mb-2 text-oneirism-orange uppercase tracking-wider">{card.title}</h4>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- TRAILER SECTION --- */}
      <section id="trailer-section" className="w-full bg-black/50 backdrop-blur-sm border-y border-white/5 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-3xl font-cinematic font-bold text-white mb-8 border-l-4 border-oneirism-orange pl-4 uppercase">
             Watch The Trailer
           </h3>
           
           <div 
             className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-oneirism-orange/10 group cursor-pointer bg-black"
             onClick={handlePlayClick}
           >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                src="assets/trailer.mp4"
                poster="https://picsum.photos/1920/1080?grayscale&blur=2"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={isPlaying}
              />

              {/* Play Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors z-10">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,87,34,0.3)]">
                    <Play className="ml-2 text-white fill-white" size={40} />
                  </div>
                </div>
              )}
              
              {/* Decorative overlay when paused */}
              {!isPlaying && (
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10">
                    <p className="text-white/60 font-mono text-sm uppercase tracking-widest">Official Gameplay Trailer</p>
                 </div>
              )}
           </div>
        </div>
      </section>

      {/* --- LATEST NEWS PREVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
          <h3 className="text-3xl font-cinematic font-bold text-oneirism-orange uppercase">Latest News</h3>
          <Link to="/news" className="text-white hover:text-oneirism-orange transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-sm">
            View Archive <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ x: 10 }}
              className="flex flex-col md:flex-row gap-6 p-6 bg-white/5 border-l-2 border-transparent hover:border-oneirism-orange hover:bg-white/10 transition-all rounded-r-xl"
            >
              <div className="min-w-[120px] pt-1">
                <div className="text-white font-bold text-lg">{item.date}</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-oneirism-orange mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;