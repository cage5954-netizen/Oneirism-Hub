import React from 'react';
import Button from '../components/ui/Button';
import { Disc, Twitter } from 'lucide-react';
import { SOCIAL_LINKS, PAGE_VARIANTS } from '../constants';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

type CommunityCardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: string;
  buttonLabel?: string;
};

// Spotlight Card
const CommunityCard: React.FC<CommunityCardProps> = ({ children, onClick, color, buttonLabel = 'Connect' }) => {
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
      <div className="relative z-10 w-full flex flex-col items-center">{children}</div>

      {/* Button Container */}
      <div className="relative z-10 w-full mt-8">
        {onClick && (
          <Button className="w-full bg-white/5 hover:bg-white/10 border-white/10" onClick={onClick}>
            {buttonLabel}
          </Button>
        )}
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
        <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white mb-8 uppercase tracking-wider">
          The <span className="text-oneirism-orange">Collective</span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          A place to track development, share thoughts, and connect with the community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Discord Card */}
        <CommunityCard
          color="#5865F2"
          buttonLabel="Join"
          onClick={() => window.open(SOCIAL_LINKS.discord, '_blank')}
        >
          <div className="p-4 rounded-full bg-[#5865F2]/10 mb-6 border border-[#5865F2]/20 shadow-[0_0_20px_rgba(88,101,242,0.2)]">
            <Disc size={40} className="text-[#5865F2]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-cinematic uppercase tracking-widest">Discord</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            It’s just Discord. Updates and discussion live there.
          </p>
        </CommunityCard>

        {/* Twitter Card */}
        <CommunityCard
          color="#1DA1F2"
          buttonLabel="Follow"
          onClick={() => window.open(SOCIAL_LINKS.twitter, '_blank')}
        >
          <div className="p-4 rounded-full bg-[#1DA1F2]/10 mb-6 border border-[#1DA1F2]/20 shadow-[0_0_20px_rgba(29,161,242,0.2)]">
            <Twitter size={40} className="text-[#1DA1F2]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-cinematic uppercase tracking-widest">Twitter / X</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Follow for small updates and occasional highlights.
          </p>
        </CommunityCard>
      </div>
    </motion.div>
  );
};

export default Community;
