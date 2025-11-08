'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Shop() {
  const features = [
    "Collect your at-home skin sample using the enclosed sterile swabs.",
    "Ship samples with prepaid label for lab-grade microbiome analysis.",
    "Receive detailed LumiProfile results through the online dashboard.",
    "Includes one complimentary consultation and free shipping."
  ];

  const thumbnails = [
    "/images/kit-angle1.jpg",
    "/images/kit-angle2.jpg", 
    "/images/kit-angle3.jpg"
  ];

  return (
    <section id="shop" className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-50 flex items-center py-20 relative overflow-hidden">
      {/* Glossy overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-violet-400/4 to-pink-500/6 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/3 via-transparent to-pink-200/2 z-0" />
      
      {/* Floating glossy elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/6 w-32 h-32 bg-violet-200/15 rounded-full blur-2xl backdrop-blur-sm z-0"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-1/3 right-1/5 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl backdrop-blur-sm z-0"
      />

      <div className="container-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Product Image */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-96 bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/kit-main.jpg" 
                  alt="LumiLab Skin Microbiome Discovery Kit"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex space-x-4 justify-center">
              {thumbnails.map((thumb, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-white/70 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Image 
                    src={thumb} 
                    alt={`Kit angle ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                LumiLab Testing Kit
              </h2>
              <p className="text-lg text-slate-600">
                Your membership includes one comprehensive kit collected once per year.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-5xl lg:text-6xl font-bold text-violet-600">
                  $199
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  PER TEST KIT
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                PreOrder Now
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}