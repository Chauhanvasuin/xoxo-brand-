import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, User, Search, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'NEW DROPS', path: '/new-drop' },
    { name: 'MEN', path: '/collections' },
    { name: 'WOMEN', path: '/collections' },
    { name: 'COLLECTIONS', path: '/collections' },
    { name: 'ACCESSORIES', path: '/accessories' },
    { name: 'ABOUT', path: '/about' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display font-bold tracking-tighter"
            >
              XOXO<span className="text-brand-pink">BRAND</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  location.pathname === item.path ? "text-brand-pink" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-brand-pink transition-all group-hover:w-full",
                  location.pathname === item.path ? "w-full" : "w-0"
                )} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-brand-pink transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <Link to="/cart" className="p-2 hover:text-brand-pink transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 w-4 h-4 bg-brand-pink text-[10px] flex items-center justify-center rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-bold">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {user.name || 'MEMBER'}
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 hover:text-brand-pink transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/auth" className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
              <User size={18} />
              LOGIN
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 glass p-12 flex flex-col gap-8 md:hidden pt-32"
          >
            {navLinks.map((item) => (
              <Link key={item.name} to={item.path} className="text-4xl font-display font-bold tracking-tighter hover:text-brand-pink transition-colors">
                {item.name}
              </Link>
            ))}
            <Link to="/cart" className="text-4xl font-display font-bold tracking-tighter hover:text-brand-pink transition-colors">
              CART ({cartCount})
            </Link>
            <Link to="/contact" className="text-4xl font-display font-bold tracking-tighter hover:text-brand-pink transition-colors">
              CONTACT
            </Link>
            {user && (
              <button 
                onClick={handleLogout}
                className="text-4xl font-display font-bold tracking-tighter text-left text-red-500 hover:text-red-400 transition-colors"
              >
                LOGOUT
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
