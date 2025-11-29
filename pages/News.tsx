import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="border-b border-white/10 pb-8 mb-12">
        <h1 className="text-5xl font-cinematic font-bold text-white">Transmissions</h1>
      </div>

      <div className="space-y-12">
        {NEWS_ITEMS.concat(NEWS_ITEMS).map((item, idx) => ( // Duplicating for demo length
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
          >
            <div className="md:col-span-1 h-64 md:h-auto">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-8 flex flex-col justify-center">
              <div className="text-oneirism-orange text-sm font-bold uppercase tracking-widest mb-3">{item.date}</div>
              <h2 className="text-3xl font-bold text-white mb-4 hover:text-oneirism-orange transition-colors cursor-pointer">{item.title}</h2>
              <p className="text-slate-400 text-lg mb-6 max-w-3xl">{item.excerpt}</p>
              <button className="flex items-center text-white font-bold hover:text-oneirism-orange transition-colors self-start group">
                Read Full Article 
                <span className="ml-2 group-hover:translate-x-2 transition-transform"><ChevronRight /></span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;