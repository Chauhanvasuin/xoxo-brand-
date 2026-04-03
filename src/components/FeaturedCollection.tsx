import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye, Star, TrendingUp } from 'lucide-react';
import { PRODUCTS, Product } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl glass border-white/5">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="flex-1 bg-white text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-pink hover:text-white transition-colors"
            >
              <ShoppingCart size={18} />
              ADD TO CART
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Eye size={18} />
            </Link>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tag && (
            <span className="px-3 py-1 rounded-full bg-brand-pink text-[10px] font-bold tracking-widest neon-glow-pink">
              {product.tag}
            </span>
          )}
          {product.stock <= 5 && (
            <span className="px-3 py-1 rounded-full bg-red-500 text-[10px] font-bold tracking-widest">
              ONLY {product.stock} LEFT
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-white/40 font-bold tracking-widest mb-1">{product.category}</p>
          <h3 className="text-lg font-display font-bold group-hover:text-brand-pink transition-colors">{product.name}</h3>
        </Link>
        <div className="text-right">
          <p className="text-xl font-bold">${product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-white/30 line-through">${product.originalPrice}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-brand-blue font-bold tracking-widest text-xs mb-4"
          >
            <TrendingUp size={14} />
            TRENDING NOW
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            THE <span className="gradient-text">XOXO</span> DROP
          </h2>
        </div>
        <Link to="/collections">
          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm font-bold tracking-widest flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            VIEW ALL PRODUCTS <Star size={14} className="text-brand-pink" />
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
