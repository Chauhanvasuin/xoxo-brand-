import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Alex Rivera',
    handle: '@alex_rv',
    text: 'The quality of the Neon Hoodie is insane. I get stopped in the street every time I wear it. XOXO is the future.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sarah Chen',
    handle: '@sarah_c',
    text: 'Finally a brand that understands Gen-Z luxury. The cargo pants fit perfectly and the technical details are top notch.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Jordan Smith',
    handle: '@jordan_fit',
    text: 'Shipping was super fast and the packaging felt like a luxury experience. 10/10 would recommend.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">
          JOIN THE <span className="text-brand-pink">10,000+</span> XOXO CLUB
        </h2>
        <p className="text-white/50">Real vibes from real people. See why we are the top choice for Gen-Z luxury.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl relative"
          >
            <Quote className="absolute top-6 right-8 text-brand-pink/20" size={40} />
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-pink/30" />
              <div className="text-left">
                <h4 className="font-bold text-sm">{t.name}</h4>
                <p className="text-xs text-brand-pink font-medium">{t.handle}</p>
              </div>
            </div>
            <p className="text-white/70 italic leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
