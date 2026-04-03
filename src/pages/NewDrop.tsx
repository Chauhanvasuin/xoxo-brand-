import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import FeaturedCollection from '../components/FeaturedCollection';
import { Zap, Sparkles } from 'lucide-react';

export default function NewDrop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="px-6 max-w-7xl mx-auto mb-24">
        <div className="relative rounded-[40px] overflow-hidden aspect-21/9 flex items-center justify-center text-center p-12">
          <div className="absolute inset-0 bg-linear-to-r from-brand-pink/40 via-brand-purple/40 to-brand-blue/40 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-widest text-brand-pink mb-6"
            >
              <Zap size={14} fill="currentColor" />
              SEASON 01: THE AWAKENING
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">NEW DROPS</h1>
            <p className="text-white/60 max-w-xl mx-auto">The latest evolution of XOXO. Limited quantities, infinite style.</p>
          </div>
        </div>
      </div>

      <FeaturedCollection />
      
      <div className="px-6 max-w-7xl mx-auto mt-24">
        <div className="glass p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <Sparkles className="text-brand-pink mb-6" size={48} />
            <h2 className="text-4xl font-display font-bold tracking-tighter mb-4">WANT EARLY ACCESS?</h2>
            <p className="text-white/60 mb-8">Join the elite circle and get notified 24 hours before the next drop hits the store.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 glass px-6 py-4 rounded-2xl" />
              <button className="bg-brand-pink px-8 py-4 rounded-2xl font-bold">JOIN</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-32 h-32 glass rounded-2xl overflow-hidden">
                <img src={`https://picsum.photos/seed/drop${i}/200/200`} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
