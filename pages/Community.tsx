
import React, { useRef } from 'react';
import Button from '../components/ui/Button';
import { Disc, Twitter, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, PAGE_VARIANTS } from '../constants';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// Spotlight Card
const CommunityCard = ({ children, onClick, color }: { children: React.ReactNode, onClick?: () => void, color: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }

    return (
        <div 
            onMouseMove={onMouseMove}
            className="group relative bg-[#0a0a0c] border border-white/5 p-12 rounded-sm flex flex-col items-center text-center overflow-hidden hover:border-white/10 transition-colors duration-500"
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        ${color}15,
                        transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 w-full flex flex-col items-center">
                {children}
            </div>
            {/* Button Container */}
            <div className="relative z-10 w-full mt-8">
                 {onClick && <Button className="w-full bg-white/5 hover:bg-white/10 border-white/10" onClick={onClick}>Connect</Button>}
            </div>
        </div>
    );
};

const Community: React.FC = () => {
  return (
    <motion.div 
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center"
    >
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white mb-8 uppercase tracking-wider">The <span className="text-oneirism-orange">Collective</span></h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          The dream is shared. Connect with fellow travelers, share your theories, and report anomalies directly to the developers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full">
        {/* Discord Card */}
        <CommunityCard color="#5865F2" onClick={() => window.open(SOCIAL_LINKS.discord, '_blank')}>
          <div className="p-4 rounded-full bg-[#5865F2]/10 mb-6 border border-[#5865F2]/20 shadow-[0_0_20px_rgba(88,101,242,0.2)]">
            <Disc size={40} className="text-[#5865F2]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-cinematic uppercase tracking-widest">Discord</h2>
          <p className="text-slate-500 text-sm leading-relaxed">Chat with devs, share fan art, and get instant updates.</p>
        </CommunityCard>

        {/* Twitter Card */}
        <CommunityCard color="#1DA1F2" onClick={() => window.open(SOCIAL_LINKS.twitter, '_blank')}>
          <div className="p-4 rounded-full bg-[#1DA1F2]/10 mb-6 border border-[#1DA1F2]/20 shadow-[0_0_20px_rgba(29,161,242,0.2)]">
            <Twitter size={40} className="text-[#1DA1F2]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-cinematic uppercase tracking-widest">Twitter / X</h2>
          <p className="text-slate-500 text-sm leading-relaxed">Follow for bite-sized updates, teasers, and community highlights.</p>
        </CommunityCard>

        {/* Support Card */}
        <CommunityCard color="#ff5722">
          <div className="p-4 rounded-full bg-oneirism-orange/10 mb-6 border border-oneirism-orange/20 shadow-[0_0_20px_rgba(255,87,34,0.2)]">
            <MessageCircle size={40} className="text-oneirism-orange" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-cinematic uppercase tracking-widest">Feedback</h2>
          <p className="text-slate-500 text-sm leading-relaxed">Found a glitch in the matrix? Let us know on our forums.</p>
        </CommunityCard>
      </div>
      
      <div className="mt-32 p-16 bg-[#0a0a0c] border border-white/5 rounded-sm w-full text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-oneirism-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <h2 className="text-3xl font-cinematic font-bold mb-6 text-white uppercase tracking-[0.2em] relative z-10">Newsletter</h2>
        <p className="text-slate-500 mb-10 max-w-lg mx-auto font-light relative z-10">Subscribe to get a weekly digest of development progress and lore drops.</p>
        <div className="flex flex-col sm:flex-row gap-0 justify-center max-w-lg mx-auto relative z-10">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="px-6 py-4 bg-black border border-white/10 text-white focus:outline-none focus:border-oneirism-orange/50 w-full tracking-widest placeholder:text-slate-700 uppercase text-xs"
          />
          <Button className="border-l-0">Subscribe</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;
