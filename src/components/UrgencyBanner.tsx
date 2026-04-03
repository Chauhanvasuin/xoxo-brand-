import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative group">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-pink via-brand-purple to-brand-blue opacity-90" />
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
              FLASH DROP ENDING SOON!
            </h3>
            <p className="text-white/80 font-medium">
              Get up to 40% off on selected items. Once it's gone, it's gone forever.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[
                { label: 'HRS', value: timeLeft.hours },
                { label: 'MIN', value: timeLeft.minutes },
                { label: 'SEC', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black/30 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold border border-white/10">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest mt-2 opacity-60">{item.label}</span>
                </div>
              ))}
            </div>
            
            <Link to="/new-drop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex px-8 py-4 bg-white text-black rounded-full font-bold items-center gap-2 hover:bg-black hover:text-white transition-all"
              >
                GRAB THE DEAL
                <Zap size={18} fill="currentColor" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, 100],
                opacity: [0, 1, 0],
                x: Math.random() * 1000
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
