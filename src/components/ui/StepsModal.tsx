'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface StepsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    number: 1,
    title: "Order the Kit & Collect Samples at Home",
    image: "/images/step1-kit.png",
    points: [
      "Purchase the kit via website",
      "Kit arrives in 1–2 business days with free US shipping.",
      "Follow the guided instructions",
      "Seal everything and ship back using the prepaid labels.",
      "Track sample status in the app."
    ]
  },
  {
    number: 2,
    title: "Lab & AI Analysis",
    image: "/images/step2-lab.jpeg",
    points: [
      "Genotype 50+ SNPs using qPCR.",
      "Sequence your skin microbiome.",
      "Process data through ETL pipeline.",
      "AI/ML model generates risk scores (wrinkles, dryness, acne, pigmentation, sensitivity)."
    ]
  },
  {
    number: 3,
    title: "Personalized Results",
    image: "/images/step3-results.png",
    points: [
      "Receive notification when results are ready (~1 week total).",
      "Log in to your secure dashboard.",
      "View genetic and microbiome insights.",
      "Get AI-powered skincare recommendations (products, dosage, routine builder).",
      "Full data privacy and control over sharing."
    ]
  },
  {
    number: 4,
    title: "Ongoing Progress Tracking (Subscription)",
    image: "/images/step4-tracking.png",
    points: [
      "Monitor how your skin changes over time.",
      "Monthly check-ins and AI recalibration.",
      "Updated product recommendations as your skin evolves.",
      "Seasonal adjustments to your routine.",
      "Long-term skincare optimization based on real data."
    ]
  }
];

export default function StepsModal({ isOpen, onClose }: StepsModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
          className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden relative border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Single subtle floating element */}
          <div className="absolute top-1/4 right-1/5 w-32 h-32 bg-violet-100/20 rounded-full blur-2xl z-0"></div>
          
          {/* Header */}
          <div className="relative bg-slate-50 p-8 text-slate-800 z-10 border-b border-slate-200">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/40 rounded-full transition-colors text-slate-600"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-semibold text-slate-900">How LumiLab Works</h2>
            <p className="text-slate-600 mt-2">Your journey to perfect skin in 4 simple steps</p>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center space-x-4 py-6 bg-white relative z-10 border-b border-slate-100">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                  index === currentStep
                    ? 'bg-violet-200 text-violet-700 ring-2 ring-violet-300 ring-offset-2'
                    : index < currentStep
                    ? 'bg-violet-100 text-violet-600'
                    : 'bg-slate-100 text-slate-400'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="px-16 py-8 min-h-[450px] bg-white relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center"
              >
                {/* Left - Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="bg-slate-50 rounded-3xl p-6 shadow-lg">
                    <div className="w-full h-80 bg-slate-100 rounded-2xl overflow-hidden">
                      <Image 
                        src={steps[currentStep].image} 
                        alt={steps[currentStep].title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Center - Step Number */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-6 h-6 bg-slate-100 rounded-full mb-6 border border-slate-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="w-px h-20 bg-slate-300 rounded-full"></div>
                    <div className="relative -mt-10 z-10 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-lg whitespace-nowrap">
                      STEP {steps[currentStep].number}
                    </div>
                    <div className="w-px h-20 bg-slate-300 rounded-full -mt-2"></div>
                    <div className="w-6 h-6 bg-slate-100 rounded-full mt-6 border border-slate-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Right - Instructions */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                    {steps[currentStep].title}
                  </h3>
                  
                  <div className="space-y-4">
                    {steps[currentStep].points.map((point, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed text-base">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 bg-slate-50 border-t border-slate-200 relative z-10">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow-soft border border-slate-200'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <div className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              {currentStep + 1} of {steps.length}
            </div>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg font-medium transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}