import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
              XOXO<span className="text-brand-pink">BRAND</span>
            </Link>
            <p className="text-white/50 mb-8 max-w-xs">
              Defining the future of streetwear. Premium quality, futuristic aesthetics, and Gen-Z culture.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs text-white/40">SHOP</h4>
            <ul className="space-y-4">
              {[
                { name: 'New Arrivals', path: '/new-drop' },
                { name: 'Best Sellers', path: '/collections' },
                { name: 'Limited Drops', path: '/new-drop' },
                { name: 'Accessories', path: '/accessories' },
                { name: 'Sale', path: '/collections' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-brand-pink transition-colors flex items-center justify-between group">
                    {item.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs text-white/40">SUPPORT</h4>
            <ul className="space-y-4">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'Shipping Info', path: '/about' },
                { name: 'Returns & Exchanges', path: '/about' },
                { name: 'Size Guide', path: '/about' },
                { name: 'FAQ', path: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-brand-pink transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs text-white/40">NEWSLETTER</h4>
            <p className="text-white/50 text-sm mb-4">Join the XOXO inner circle for exclusive drops and 10% off your first order.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 glass px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-brand-pink transition-all"
              />
              <button className="px-6 py-3 bg-brand-pink rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium">
          <p>© 2026 XOXOBRAND. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
