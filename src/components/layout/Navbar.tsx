'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AuthModal from '../auth/AuthModal';

export default function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeSection, setActiveSection] = useState('home');

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-it-works', 'risk-profile', 'shop', 'faq', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          // Consider a section active if it's in the top half of the viewport
          if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      {/* Modern Rounded Rectangle Container */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-soft border border-white/30 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-sans text-xl font-bold text-slate-900 tracking-tight">
            LUMILAB
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className={`transition-colors font-medium text-sm ${
              activeSection === 'about' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              ABOUT US
            </Link>
            <Link href="/#how-it-works" className={`transition-colors font-medium text-sm ${
              activeSection === 'how-it-works' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              HOW IT WORKS
            </Link>
            <Link href="/#risk-profile" className={`transition-colors font-medium text-sm ${
              activeSection === 'risk-profile' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              RISK PROFILE
            </Link>
            <Link href="/#shop" className={`transition-colors font-medium text-sm ${
              activeSection === 'shop' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              SHOP
            </Link>
            <Link href="/#faq" className={`transition-colors font-medium text-sm ${
              activeSection === 'faq' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              FAQS
            </Link>
            <Link href="/#contact" className={`transition-colors font-medium text-sm ${
              activeSection === 'contact' 
                ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' 
                : 'text-slate-700 hover:text-violet-600'
            }`}>
              CONTACT
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => openAuthModal('login')}
              className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm"
            >
              Log in
            </button>
            <button 
              onClick={() => openAuthModal('signup')}
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm shadow-md hover:shadow-lg"
            >
              Try LumiLab
            </button>
          </div>
        </div>
      </div>
    </motion.nav>

    <AuthModal 
      isOpen={authModalOpen} 
      onClose={() => setAuthModalOpen(false)} 
      initialMode={authMode} 
    />
    </>
  );
}