import React from 'react';
import Button from '../components/ui/Button';
import { Disc, Twitter, MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">Join the Collective</h1>
        <p className="text-xl text-slate-400">
          The dream is shared. Connect with fellow travelers, share your theories, and report anomalies (bugs) directly to the developers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full">
        {/* Discord Card */}
        <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 p-10 rounded-2xl flex flex-col items-center text-center hover:bg-[#5865F2]/20 transition-all">
          <Disc size={64} className="text-[#5865F2] mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Official Discord</h2>
          <p className="text-slate-400 mb-8">Chat with devs, share fan art, and get instant updates.</p>
          <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">Join Server</Button>
        </div>

        {/* Twitter Card */}
        <div className="bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 p-10 rounded-2xl flex flex-col items-center text-center hover:bg-[#1DA1F2]/20 transition-all">
          <Twitter size={64} className="text-[#1DA1F2] mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Twitter / X</h2>
          <p className="text-slate-400 mb-8">Follow for bite-sized updates, teasers, and community highlights.</p>
          <Button className="w-full bg-[#1DA1F2] hover:bg-[#0c85d0]">Follow Us</Button>
        </div>

        {/* Support Card */}
        <div className="bg-oneirism-orange/10 border border-oneirism-orange/30 p-10 rounded-2xl flex flex-col items-center text-center hover:bg-oneirism-orange/20 transition-all">
          <MessageCircle size={64} className="text-oneirism-orange mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Support & Feedback</h2>
          <p className="text-slate-400 mb-8">Found a glitch in the matrix? Let us know on our forums.</p>
          <Button variant="outline" className="w-full">Get Help</Button>
        </div>
      </div>
      
      <div className="mt-24 p-12 bg-white/5 rounded-3xl w-full text-center border border-white/5">
        <h2 className="text-3xl font-cinematic font-bold mb-6">Newsletter</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Subscribe to get a weekly digest of development progress and lore drops.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 bg-black/50 border border-white/20 rounded-none text-white focus:outline-none focus:border-oneirism-orange w-full"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Community;