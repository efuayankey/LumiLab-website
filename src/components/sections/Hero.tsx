'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';

export default function Hero() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  return (
    <>
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Element */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/skincare-hero.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        
        {/* Light Violet/Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 via-violet-400/30 to-purple-500/35 z-10" />
        
        {/* Additional subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 via-transparent to-violet-200/10 z-20" />
        
        {/* Fallback background for when video isn't loaded */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-violet-50 -z-10" />
      </div>
      
      {/* Content */}
      <div className="relative z-30 container-width section-padding pt-32 pb-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg"
          >
            Your Perfect Skin Match Without the Guesswork
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-balance drop-shadow-md"
          >
            Discover personalized skincare powered by modern science and everyday simplicity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => setAuthModalOpen(true)}
              className="btn-primary text-lg px-8 py-4 glow shadow-2xl hover:scale-105 transform transition-all"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-200/30 rounded-full blur-xl"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl"
      />
    </section>

    <AuthModal 
      isOpen={authModalOpen} 
      onClose={() => setAuthModalOpen(false)} 
      initialMode="signup"
    />
    </>
  );
}