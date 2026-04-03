import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Instagram, Chrome } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Background 3D-like elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full animate-pulse" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass p-10 rounded-[40px] relative z-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-pink/20"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-2">
            XOXO<span className="text-brand-pink">BRAND</span>
          </h1>
          <p className="text-white/50 text-sm font-medium tracking-widest uppercase">
            {isLogin ? 'Welcome Back' : 'Join the Movement'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-1 focus:ring-brand-pink outline-hidden transition-all"
              />
            </div>
            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-[10px] font-bold tracking-widest text-white/30 hover:text-brand-pink transition-colors uppercase">
                  Forgot Password?
                </button>
              </div>
            )}
          </div>

          {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}

          <button 
            disabled={loading}
            className="w-full bg-brand-pink py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,0,127,0.3)] hover:shadow-[0_0_50px_rgba(255,0,127,0.5)] transition-all disabled:opacity-50"
          >
            {loading ? 'PROCESSING...' : isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative px-4 bg-transparent text-[10px] font-bold tracking-widest text-white/30 uppercase">Or Continue With</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="glass py-3 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
              <Chrome size={20} />
            </button>
            <button className="glass py-3 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
              <Instagram size={20} />
            </button>
            <button className="glass py-3 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
              <Github size={20} />
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-brand-pink font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
