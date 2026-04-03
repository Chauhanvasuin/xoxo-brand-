import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Heart, Share2, ShieldCheck, Truck, RotateCcw, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
        <Link to="/" className="text-brand-pink hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={18} /> BACK TO COLLECTION
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] rounded-3xl overflow-hidden glass border-white/10"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 rounded-full bg-brand-pink text-xs font-bold tracking-widest neon-glow-pink">
              {product.tag || 'PREMIUM'}
            </span>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <p className="text-brand-blue font-bold tracking-widest text-sm mb-4 uppercase">{product.category}</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <p className="text-4xl font-bold">${product.price}</p>
            {product.originalPrice && (
              <p className="text-2xl text-white/30 line-through">${product.originalPrice}</p>
            )}
            <span className="ml-auto text-xs font-bold text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              IN STOCK
            </span>
          </div>

          <p className="text-white/60 text-lg leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-xs font-bold tracking-widest text-white/40 mb-4">SELECT SIZE</p>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    className="w-14 h-14 glass rounded-xl flex items-center justify-center font-bold hover:border-brand-pink hover:text-brand-pink transition-all"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-brand-pink py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,0,127,0.3)] hover:shadow-[0_0_50px_rgba(255,0,127,0.5)] transition-all"
            >
              <ShoppingCart size={24} />
              ADD TO CART
            </button>
            <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-brand-pink transition-colors">
              <Heart size={24} />
            </button>
            <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-brand-blue transition-colors">
              <Share2 size={24} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
            {[
              { icon: Truck, label: 'Fast Shipping' },
              { icon: ShieldCheck, label: 'Secure Payment' },
              { icon: RotateCcw, label: 'Easy Returns' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <item.icon size={20} className="text-white/40" />
                <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
