'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AuthModal from '../auth/AuthModal';

export default function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-violet-600 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="md:hidden fixed top-20 left-4 right-4 z-40 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6"
      >
        <div className="flex flex-col space-y-4">
          <Link 
            href="/#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            ABOUT US
          </Link>
          <Link 
            href="/#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            HOW IT WORKS
          </Link>
          <Link 
            href="/#risk-profile" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            RISK PROFILE
          </Link>
          <Link 
            href="/#shop" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            SHOP
          </Link>
          <Link 
            href="/#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            FAQS
          </Link>
          <Link 
            href="/#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
          >
            CONTACT
          </Link>
          
          <div className="border-t border-slate-200 pt-4 mt-4 space-y-3">
            <button 
              onClick={() => {
                openAuthModal('login');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-slate-700 hover:text-violet-600 transition-colors font-medium text-base py-2"
            >
              Log in
            </button>
            <button 
              onClick={() => {
                openAuthModal('signup');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 text-base shadow-md hover:shadow-lg"
            >
              Try LumiLab
            </button>
          </div>
        </div>
      </motion.div>
    )}

    <AuthModal 
      isOpen={authModalOpen} 
      onClose={() => setAuthModalOpen(false)} 
      initialMode={authMode} 
    />
    </>
  );
}