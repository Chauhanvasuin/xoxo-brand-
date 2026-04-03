import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NewDrop from './pages/NewDrop';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import AuthPage from './pages/AuthPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Gift, X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/auth" />;
  return <>{children}</>;
}

export default function App() {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 10000); // Show after 10s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="*" element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar />
                      <main className="flex-1">
                        <AnimatePresence mode="wait">
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/new-drop" element={<NewDrop />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/collections" element={<NewDrop />} />
                            <Route path="/accessories" element={<NewDrop />} />
                          </Routes>
                        </AnimatePresence>
                      </main>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                } />
              </Routes>
            </AnimatePresence>

            {/* Discount Popup */}
            <AnimatePresence>
              {showOffer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed bottom-8 left-8 z-50 max-w-sm glass p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-pink/20"
                >
                  <button 
                    onClick={() => setShowOffer(false)}
                    className="absolute top-4 right-4 p-1 hover:text-brand-pink transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="w-12 h-12 bg-brand-pink rounded-2xl flex items-center justify-center mb-6 neon-glow-pink">
                    <Gift size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2">WANT 20% OFF?</h3>
                  <p className="text-white/60 text-sm mb-6">Join the drop list and get an exclusive discount code for your first order.</p>
                  
                  <div className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-brand-pink transition-all"
                    />
                    <button className="w-full bg-brand-pink py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] transition-all">
                      REVEAL MY CODE
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sticky Mobile CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-40">
              <Link to="/new-drop">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2">
                  SHOP NEW DROPS
                </button>
              </Link>
            </div>
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
