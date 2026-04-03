import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'PREMIUM QUALITY',
    desc: 'Hand-picked fabrics designed to last and impress.'
  },
  {
    icon: ShieldCheck,
    title: 'SECURE CHECKOUT',
    desc: 'Military-grade encryption for your peace of mind.'
  },
  {
    icon: Truck,
    title: 'FAST SHIPPING',
    desc: 'Global express delivery within 3-5 business days.'
  },
  {
    icon: RotateCcw,
    title: 'EASY RETURNS',
    desc: '30-day hassle-free returns on all orders.'
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-pink/20 transition-colors">
              <f.icon className="text-brand-pink" size={24} />
            </div>
            <h4 className="text-xs font-bold tracking-widest mb-2">{f.title}</h4>
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
