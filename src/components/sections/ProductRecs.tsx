'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductData {
  name: string;
  score: number;
  bullets: string[];
  priceTier: number;
  image: string;
}

interface ProductRecsProps {
  mode: 'demo' | 'personal';
  data?: ProductData[];
}

const demoData: ProductData[] = [
  {
    name: "POND'S Dry Skin Cream Facial Moisturizer",
    score: 0.79,
    bullets: ["Suitable for dry skin", "Hydrating skin", "Lasting moisture"],
    priceTier: 1,
    image: "/images/ponds.jpg"
  },
  {
    name: "Estée Lauder Re-Nutriv Moisturizer Cream",
    score: 0.96,
    bullets: ["Instantly moisturizing skin", "Lift Regenerating Firming", "Anti-Aging"],
    priceTier: 3,
    image: "/images/estee-lauder.jpg"
  },
  {
    name: "Clinique Turnaround™ Revitalizing Moisturizer",
    score: 0.87,
    bullets: ["Instantly moisturizing skin", "Revitalizing skin", "Fragrance-free"],
    priceTier: 2,
    image: "/images/clinique.jpg"
  }
];

interface ProductCardProps {
  product: ProductData;
  delay: number;
}

function ProductCard({ product, delay }: ProductCardProps) {
  const percentage = Math.round(product.score * 100);
  const getPriceTierSymbol = (tier: number) => {
    return '$'.repeat(tier);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
    >
      {/* Match Badge */}
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold px-4 py-2 rounded-2xl shadow-lg z-10">
        {percentage}%
      </div>

      <div className="space-y-4">
        {/* Product Image */}
        <div className="w-full h-48 bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
          {product.name}
        </h3>

        {/* Benefits List */}
        <div className="space-y-2">
          {product.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-600 leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>

        {/* Price Tier */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500 font-medium">Price Range</span>
            <span className="text-xl font-bold text-violet-600">
              {getPriceTierSymbol(product.priceTier)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductRecs({ 
  mode = 'demo', 
  data = demoData 
}: ProductRecsProps) {
  return (
    <section id="products" className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-50 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-violet-400/3 to-violet-500/6 z-0" />
      
      <motion.div 
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/6 w-36 h-36 bg-pink-200/20 rounded-full blur-2xl backdrop-blur-sm z-0"
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
                Product Recommendations
              </h2>
              {mode === 'demo' && (
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  Demo recommendations
                </span>
              )}
            </div>
            
            {mode === 'demo' ? (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                These are sample recommendations. Your personalized matches appear after completing the LumiLab test.
              </p>
            ) : (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Personalized recommendations based on your skin profile and test results.
              </p>
            )}
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.map((product, index) => (
              <ProductCard 
                key={product.name}
                product={product} 
                delay={0.1 + (index * 0.1)}
              />
            ))}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                >
                  Get your kit
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-200 text-lg"
                >
                  See how testing works
                </motion.button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}