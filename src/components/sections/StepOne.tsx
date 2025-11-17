'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import StepsModal from '@/components/ui/StepsModal';

export default function StepOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <section id="how-it-works" className="min-h-screen bg-white flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Subtle accent gradient - only at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-violet-50/30 to-transparent z-0" />
      
      {/* Single subtle floating element */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-violet-100/30 rounded-full blur-2xl z-0"
      />
      
      {/* Header Text Section */}
      <div className="container-width section-padding text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance"
        >
          How It Works
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Get personalized skincare recommendations in just 4 simple steps.
        </motion.p>
      </div>

      {/* Split Layout Section */}
      <div className="container-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[60vh]">
          
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-96 bg-slate-100 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/step1-kit.png" 
                  alt="LumiLab skincare testing kit"
                  width={400}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Center - Fancy Divider with STEP 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Top decorative element */}
              <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mb-4 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Vertical gradient line */}
              <div className="w-1 h-40 bg-gradient-to-b from-slate-200 via-violet-400 to-slate-200 rounded-full shadow-md"></div>
              
              {/* Main STEP badge - MAIN PURPLE ACCENT */}
              <div className="relative -mt-20 z-10 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl border-4 border-white backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-2xl"></div>
                <span className="relative z-10">STEP 1</span>
              </div>
              
              {/* Continuation line */}
              <div className="w-1 h-40 bg-gradient-to-b from-slate-200 via-violet-400 to-slate-200 rounded-full shadow-md -mt-4"></div>
              
              {/* Bottom decorative element */}
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-400 rounded-full mt-4 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Instructions */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Order the Kit & Collect Samples at Home
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">Purchase the kit via website</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">Kit arrives in 1–2 business days with free US shipping.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">Follow the guided instructions</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">Seal everything and ship back using the prepaid labels.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">Track sample status in the app.</p>
              </div>
            </div>
            
            {/* Learn More Button */}
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-slate-50 text-violet-600 border-2 border-violet-200 hover:border-violet-300 px-6 py-3 rounded-xl font-medium text-base shadow-sm hover:shadow-md transition-all"
              >
                See All Steps →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Steps Modal */}
      <StepsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
    </>
  );
}