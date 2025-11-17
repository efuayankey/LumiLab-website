'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';
import RecommendedProductsModal from '../ui/RecommendedProductsModal';

interface RiskData {
  score: number;
  tags: string[];
}

interface ProfileData {
  wrinkle: RiskData;
  irritation: RiskData;
  hyperpigmentation: RiskData;
}

interface RiskProfileProps {
  mode: 'demo' | 'personal';
  data: ProfileData;
  lastUpdated?: string;
}

const demoData: ProfileData = {
  wrinkle: { 
    score: 0.56, 
    tags: ["Peptides", "Retinol"] 
  },
  irritation: { 
    score: 0.82, 
    tags: ["Gentle", "Fragrance-free"] 
  },
  hyperpigmentation: { 
    score: 0.24, 
    tags: ["Vitamin C", "Niacinamide"] 
  }
};

interface RiskCardProps {
  title: string;
  score: number;
  tags: string[];
  delay: number;
}

function RiskCard({ title, score, tags, delay }: RiskCardProps) {
  const percentage = Math.round(score * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <div className="text-3xl font-bold text-violet-600">{percentage}%</div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
            />
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: delay + 0.5 + (index * 0.1) }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function RiskProfile({ 
  mode = 'demo', 
  data = demoData, 
  lastUpdated 
}: RiskProfileProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [recommendedProductsOpen, setRecommendedProductsOpen] = useState(false);
  
  return (
    <section id="risk-profile" className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-50 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/6 via-violet-400/3 to-pink-500/5 z-0" />
      
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/6 w-32 h-32 bg-violet-200/20 rounded-full blur-2xl backdrop-blur-sm z-0"
      />

      <div className="container-width section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
                Your Risk Profile
              </h2>
              {mode === 'demo' && (
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                  Demo data
                </span>
              )}
            </div>
            
            {mode === 'demo' ? (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                This is a demo preview. Your actual profile appears after you complete the LumiLab test.
              </p>
            ) : (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Last updated: {lastUpdated || 'Recently'}. Re-test to refresh results.
              </p>
            )}
          </motion.div>

          {/* Risk Cards */}
          <div className="space-y-4 mb-12 max-w-4xl mx-auto">
            <RiskCard 
              title="Wrinkle Risk" 
              score={data.wrinkle.score} 
              tags={data.wrinkle.tags}
              delay={0.1}
            />
            <RiskCard 
              title="Irritation Risk" 
              score={data.irritation.score} 
              tags={data.irritation.tags}
              delay={0.2}
            />
            <RiskCard 
              title="Hyperpigmentation Risk" 
              score={data.hyperpigmentation.score} 
              tags={data.hyperpigmentation.tags}
              delay={0.3}
            />
          </div>

          {/* CTA Section */}
          {mode === 'demo' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <motion.button
                  onClick={() => setRecommendedProductsOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                >
                  See Recommended Products
                </motion.button>
              </div>
            </motion.div>
          )}

        </div>
      </div>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode="signup"
      />

      <RecommendedProductsModal
        isOpen={recommendedProductsOpen}
        onClose={() => setRecommendedProductsOpen(false)}
        riskProfile={{
          wrinkle: data.wrinkle.score,
          irritation: data.irritation.score,
          hyperpigmentation: data.hyperpigmentation.score
        }}
      />
    </section>
  );
}