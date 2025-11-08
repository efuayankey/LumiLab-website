'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white via-violet-50 to-pink-50 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/20 via-transparent to-pink-100/20 z-0" />
      
      {/* Floating decorative blur */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full blur-3xl z-0"
      />

      <div className="container-width section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-wide">
              About LumiLab
            </h2>
            <p className="text-xl md:text-2xl text-violet-600 italic font-medium">
              Science meets self-care.
            </p>
          </motion.div>

          {/* Content Paragraphs */}
          <div className="space-y-8 text-left md:text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-700 leading-relaxed"
            >
              At LumiLab, we believe great skincare starts with understanding your skin — not guessing. 
              Our team of scientists and skincare lovers created LumiLab to bridge the gap between 
              personalization and simplicity, helping you discover what truly works for you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-700 leading-relaxed"
            >
              Through our skin microbiome testing kit and AI-driven LumiProfile, we deliver insights 
              that turn confusion into clarity — so your routine feels effortless, balanced, and 
              uniquely yours.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-700 leading-relaxed"
            >
              We combine science, design, and empathy to make skincare smarter, calmer, and 
              beautifully simple.
            </motion.p>
          </div>

          {/* Optional decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-400 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}