import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">GET IN <span className="text-brand-pink">TOUCH</span></h1>
        <p className="text-white/50 max-w-xl mx-auto">Have a question about your order or just want to vibe? Our team is here for you 24/7.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          {[
            { icon: Mail, title: 'EMAIL US', detail: 'support@xoxobrand.com', color: 'text-brand-pink' },
            { icon: Phone, title: 'CALL US', detail: '+1 (888) XOXO-VIBE', color: 'text-brand-blue' },
            { icon: MapPin, title: 'VISIT US', detail: 'Cyber District, Neo Tokyo', color: 'text-brand-purple' }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl group hover:border-white/20 transition-all">
              <item.icon className={cn("mb-4", item.color)} size={32} />
              <h3 className="text-xs font-bold tracking-widest text-white/40 mb-2 uppercase">{item.title}</h3>
              <p className="text-xl font-bold">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <form className="glass p-12 rounded-[40px] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-2">NAME</label>
                <input placeholder="Your Name" className="w-full glass px-6 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-2">EMAIL</label>
                <input placeholder="Your Email" className="w-full glass px-6 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-2">MESSAGE</label>
              <textarea rows={6} placeholder="How can we help?" className="w-full glass px-6 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all resize-none" />
            </div>
            <button className="w-full bg-brand-pink py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,0,127,0.4)] transition-all">
              SEND MESSAGE
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

import { cn } from '../lib/utils';
