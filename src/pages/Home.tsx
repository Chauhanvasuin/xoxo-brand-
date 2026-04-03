import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import FeaturedCollection from '../components/FeaturedCollection';
import UrgencyBanner from '../components/UrgencyBanner';
import SocialProof from '../components/SocialProof';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustBadges />
      <FeaturedCollection />
      
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8"
          >
            XOXO IS NOT A BRAND, <br />
            <span className="gradient-text">IT’S A VIBE.</span>
          </motion.h2>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            We don't just make clothes. We engineer confidence. Every stitch is a statement, 
            every fabric is a feeling. Born in the digital age, designed for the physical world.
          </p>
        </div>
      </section>

      <UrgencyBanner />
      <SocialProof />
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tighter">@XOXOBRAND ON IG</h2>
            <button className="text-sm font-bold tracking-widest text-brand-pink hover:underline">FOLLOW US</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden glass group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/xoxo${i}/400/400`} 
                  alt="IG Feed" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
