'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What makes LumiLab different?",
      answer: "LumiLab combines advanced microbiome analysis with design simplicity, giving you a routine that's truly tailored to your skin."
    },
    {
      question: "Is LumiLab safe for sensitive skin?",
      answer: "Yes — our tests and recommendations are dermatologist-reviewed and safe for all skin types."
    },
    {
      question: "How long does it take to get results?",
      answer: "Once your sample is received, results appear in your LumiProfile dashboard within 5–7 days."
    },
    {
      question: "How often should I take the test?",
      answer: "We recommend taking the test once per year to track changes in your skin microbiome and update your personalized routine."
    },
    {
      question: "What's included in my LumiProfile?",
      answer: "Your LumiProfile includes detailed microbiome analysis, genetic insights, personalized product recommendations, and a custom routine builder."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account dashboard with no cancellation fees."
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-pink-50 via-violet-50 to-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/10 via-transparent to-pink-100/10 z-0" />

      <div className="container-width section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              FAQs
            </h3>
            <p className="text-lg text-slate-600">
              Common questions about LumiLab and our products.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-3xl shadow-md transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gradient-to-r from-violet-50 to-pink-50 shadow-lg' 
                      : 'bg-white hover:shadow-lg'
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus:ring-2 focus:ring-violet-300 rounded-3xl"
                  >
                    <h4 className="text-base md:text-lg font-semibold text-slate-900 pr-4">
                      {item.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={24} className="text-violet-600" />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5">
                          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom spacing */}
          <div className="mt-16"></div>

        </div>
      </div>
    </section>
  );
}