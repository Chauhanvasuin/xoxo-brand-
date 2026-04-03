import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Zap, Heart } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[60px] overflow-hidden aspect-21/9 mb-24 flex items-center justify-center text-center p-12">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20">
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-6">OUR STORY</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Redefining luxury for the digital generation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">BORN IN THE <span className="text-brand-pink">METAVERSE</span>, MADE FOR REALITY.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            XOXOBRAND started as a digital-first experiment in 2024. We wanted to bridge the gap between high-fashion aesthetics and the raw energy of internet culture. 
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Every piece we create is a fusion of technical innovation and artistic expression. We don't follow trends; we create the frequency that others tune into.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Sparkles, title: 'Innovation', desc: 'Cutting-edge fabrics and tech.' },
            { icon: Globe, title: 'Global', desc: 'Worn in over 50 countries.' },
            { icon: Zap, title: 'Speed', desc: 'Fast drops, faster shipping.' },
            { icon: Heart, title: 'Culture', desc: 'By Gen-Z, for Gen-Z.' }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center">
              <item.icon className="text-brand-pink mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass p-16 rounded-[60px] text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">THE FUTURE IS <span className="gradient-text">XOXO</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-12">
          Join us as we continue to push the boundaries of what fashion can be. This is just the beginning of the awakening.
        </p>
        <button className="px-12 py-5 bg-white text-black rounded-full font-bold hover:bg-brand-pink hover:text-white transition-all">
          JOIN THE MOVEMENT
        </button>
      </div>
    </motion.div>
  );
}
