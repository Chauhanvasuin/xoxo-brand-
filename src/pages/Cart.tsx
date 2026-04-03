import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-8 text-white/20">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-4xl font-display font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-white/50 mb-8 max-w-md">Looks like you haven't added any heat to your cart yet. Go back and check the new drops.</p>
        <Link to="/" className="px-8 py-4 bg-brand-pink rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,0,127,0.4)] transition-all">
          EXPLORE COLLECTION
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <h1 className="text-5xl font-display font-bold tracking-tighter mb-12">
        YOUR <span className="text-brand-pink">BAG</span> ({cartCount})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass p-6 rounded-3xl flex gap-6 items-center"
            >
              <div className="w-24 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-brand-blue uppercase mb-1">{item.category}</p>
                    <h3 className="text-xl font-display font-bold">{item.name}</h3>
                  </div>
                  <p className="text-xl font-bold">${item.price}</p>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4 glass px-4 py-2 rounded-xl">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-white/30 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-3xl sticky top-32">
            <h2 className="text-2xl font-display font-bold mb-8">ORDER SUMMARY</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-brand-pink">${cartTotal}</span>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-white text-black py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-2 hover:bg-brand-pink hover:text-white transition-all shadow-xl"
            >
              PROCEED TO CHECKOUT
              <ArrowRight size={20} />
            </Link>
            
            <p className="text-[10px] text-center text-white/30 mt-6 font-bold tracking-widest">
              SECURE CHECKOUT POWERED BY XOXOSTRIPE
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
