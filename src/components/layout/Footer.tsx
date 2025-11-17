'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';

export default function Footer() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
    <footer className="bg-gradient-to-br from-violet-500/40 via-violet-400/30 to-purple-500/35 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-purple-900/10 z-0" />
      
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/6 w-32 h-32 bg-violet-300/30 rounded-full blur-2xl backdrop-blur-sm z-0"
      />

      <div className="container-width section-padding relative z-10">
        
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 py-16 border-b border-white/20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
            Ready to discover your perfect skincare routine?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of women who've already transformed their skincare with personalized recommendations based on their unique skin microbiome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => setAuthModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              Start Your Journey
            </motion.button>
            
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">LUMILAB</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Personalized skincare powered by modern science and everyday simplicity. Discover your skin's unique needs with our microbiome analysis.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/#about" className="block text-white/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/#how-it-works" className="block text-white/80 hover:text-white transition-colors text-sm">
                How It Works
              </Link>
              <Link href="/#shop" className="block text-white/80 hover:text-white transition-colors text-sm">
                Shop
              </Link>
              <Link href="/#faq" className="block text-white/80 hover:text-white transition-colors text-sm">
                FAQs
              </Link>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
            <div className="space-y-2">
              <Link href="/#contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/privacy" className="block text-white/80 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-white/80 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/returns" className="block text-white/80 hover:text-white transition-colors text-sm">
                Returns & Exchanges
              </Link>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Get the latest skincare tips and product updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
              />
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-3 rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-violet-900 text-sm font-bold drop-shadow-lg">
            © 2025 LumiLab. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-violet-900 hover:text-violet-700 text-sm font-bold drop-shadow-lg transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-violet-900 hover:text-violet-700 text-sm font-bold drop-shadow-lg transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-violet-900 hover:text-violet-700 text-sm font-bold drop-shadow-lg transition-colors">
              Cookies
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>

    <AuthModal 
      isOpen={authModalOpen} 
      onClose={() => setAuthModalOpen(false)} 
      initialMode="signup"
    />
    </>
  );
}