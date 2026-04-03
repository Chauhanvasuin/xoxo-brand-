import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import Hero3D from './Hero3D';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Hero3D />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-widest text-brand-pink mb-6 neon-glow-pink">
            <Zap size={14} fill="currentColor" />
            LIMITED DROP: SEASON 01
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none mb-8">
            DON’T WEAR CLOTHES. <br />
            <span className="gradient-text">WEAR ATTENTION.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
            Futuristic Gen-Z luxury streetwear designed to make you the center of gravity. 
            Premium fabrics, immersive style.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/new-drop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-pink rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(255,0,127,0.4)] hover:shadow-[0_0_50px_rgba(255,0,127,0.6)] transition-all"
              >
                SHOP THE DROP
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <Link to="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                EXPLORE COLLECTION
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] font-bold tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-pink to-transparent" />
      </motion.div>
    </section>
  );
}
