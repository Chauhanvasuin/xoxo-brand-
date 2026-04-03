import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, Truck, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
        >
          <CheckCircle2 size={48} className="text-white" />
        </motion.div>
        <h1 className="text-5xl font-display font-bold mb-4">ORDER CONFIRMED!</h1>
        <p className="text-white/50 mb-8 max-w-md">Your heat is on the way. Check your email for the tracking details. Welcome to the XOXO family.</p>
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
      <Link to="/cart" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors">
        <ArrowLeft size={18} /> BACK TO BAG
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-12">CHECKOUT</h1>
          
          <form onSubmit={handlePayment} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">SHIPPING DETAILS</h3>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="glass px-6 py-4 rounded-2xl w-full" />
                <input required placeholder="Last Name" className="glass px-6 py-4 rounded-2xl w-full" />
              </div>
              <input required placeholder="Address" className="glass px-6 py-4 rounded-2xl w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="City" className="glass px-6 py-4 rounded-2xl w-full" />
                <input required placeholder="Zip Code" className="glass px-6 py-4 rounded-2xl w-full" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">PAYMENT METHOD</h3>
              <div className="glass p-6 rounded-3xl border-brand-pink/30 bg-brand-pink/5">
                <div className="flex items-center justify-between mb-6">
                  <CreditCard className="text-brand-pink" />
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-white/10 rounded" />
                    <div className="w-8 h-5 bg-white/10 rounded" />
                  </div>
                </div>
                <input required placeholder="Card Number" className="bg-transparent border-b border-white/10 py-2 w-full mb-4 focus:outline-hidden focus:border-brand-pink transition-all" />
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="MM/YY" className="bg-transparent border-b border-white/10 py-2 w-full focus:outline-hidden focus:border-brand-pink transition-all" />
                  <input required placeholder="CVC" className="bg-transparent border-b border-white/10 py-2 w-full focus:outline-hidden focus:border-brand-pink transition-all" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-pink py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(255,0,127,0.3)] hover:shadow-[0_0_50px_rgba(255,0,127,0.5)] transition-all"
            >
              PAY ${cartTotal}
            </button>
          </form>
        </div>

        {/* Summary Sidebar */}
        <div className="hidden lg:block">
          <div className="glass p-8 rounded-[40px] sticky top-32">
            <h2 className="text-2xl font-display font-bold mb-8">TRUSTED BY 10K+</h2>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Secure Payment', desc: 'Your data is encrypted and safe.' },
                { icon: Truck, title: 'Global Shipping', desc: 'Tracked delivery to your doorstep.' },
                { icon: CheckCircle2, title: 'Authenticity', desc: '100% original XOXO products.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs text-white/40 italic">
                "Best shopping experience I've had in a long time. The interface is as premium as the clothes."
              </p>
              <p className="text-[10px] font-bold mt-4 text-brand-pink">— MARCUS K.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
