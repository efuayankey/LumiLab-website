'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProductData {
  name: string;
  score: number;
  bullets: string[];
  priceTier: number;
  image: string;
}

interface RecommendedProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  riskProfile: {
    wrinkle: number;
    irritation: number;
    hyperpigmentation: number;
  };
}

// Personalized products based on risk scores - using original design
const getRecommendedProducts = (riskProfile: any): ProductData[] => {
  const products: ProductData[] = [];

  // High wrinkle risk
  if (riskProfile.wrinkle > 0.5) {
    products.push({
      name: "POND'S Dry Skin Cream Facial Moisturizer",
      score: 0.79,
      bullets: ["Suitable for dry skin", "Hydrating skin", "Lasting moisture"],
      priceTier: 1,
      image: "/images/cream 1.jpg"
    });
  }

  // High irritation risk  
  if (riskProfile.irritation > 0.7) {
    products.push({
      name: "Estée Lauder Re-Nutriv Moisturizer Cream",
      score: 0.96,
      bullets: ["Instantly moisturizing skin", "Lift Regenerating Firming", "Anti-Aging"],
      priceTier: 3,
      image: "/images/cream 2.jpg"
    });
  }

  // Hyperpigmentation risk
  if (riskProfile.hyperpigmentation > 0.2) {
    products.push({
      name: "Clinique Turnaround™ Revitalizing Moisturizer",
      score: 0.87,
      bullets: ["Instantly moisturizing skin", "Revitalizing skin", "Fragrance-free"],
      priceTier: 2,
      image: "/images/cream 3.jpg"
    });
  }

  return products;
};

function ProductCard({ product, delay }: { product: ProductData; delay: number }) {
  const percentage = Math.round(product.score * 100);
  const getPriceTierSymbol = (tier: number) => {
    return '$'.repeat(tier);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
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
            className="w-full h-full object-contain"
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

export default function RecommendedProductsModal({ 
  isOpen, 
  onClose, 
  riskProfile 
}: RecommendedProductsModalProps) {
  const recommendedProducts = getRecommendedProducts(riskProfile);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative border border-slate-200 mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-slate-50 p-4 sm:p-8 border-b border-slate-200 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 text-center">
                Product Recommendations
              </h2>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                Personalized for you
              </span>
            </div>
            <p className="text-slate-600 text-center">
              Based on your skin risk analysis, here are products tailored specifically for you.
            </p>
          </div>

          {/* Products Grid */}
          <div className="p-4 sm:p-8 overflow-y-auto max-h-[60vh]">
            {recommendedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {recommendedProducts.map((product, index) => (
                  <ProductCard 
                    key={product.name}
                    product={product} 
                    delay={index * 0.1}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">
                  No specific recommendations at this time. Check out our full product range in the Shop section.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 text-center">
            <p className="text-slate-600 text-sm mb-4">
              Want to see all our products? Browse our complete collection.
            </p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <a
                href="/#shop"
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:from-violet-600 hover:to-purple-700 transition-colors"
              >
                Browse All Products
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}