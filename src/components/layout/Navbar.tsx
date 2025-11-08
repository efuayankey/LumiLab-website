'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
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
            <Link href="#home" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              HOME
            </Link>
            <Link href="#about" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              ABOUT US
            </Link>
            <Link href="#how-it-works" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              HOW IT WORKS
            </Link>
            <Link href="#risk-profile" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              RISK PROFILE
            </Link>
            <Link href="/products" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              PRODUCTS
            </Link>
            <Link href="#shop" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              SHOP
            </Link>
            <Link href="#faq" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              FAQS
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              CONTACT
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/login" className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm">
              Log in
            </Link>
            <Link href="/signup" className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm shadow-md hover:shadow-lg">
              Try LumiLab
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}