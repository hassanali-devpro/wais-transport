import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = ({ faqs , title }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Split FAQs roughly in half for two columns
  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-24 py-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 25, 47, 0.2), rgba(10, 25, 47, 0.05)),
          url('/flat.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F6F4F0] opacity-40 pointer-events-none"></div>

      {/* FAQ Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-white/30 backdrop-blur-md flex flex-col justify-start md:h-[82vh] rounded-md shadow-xl w-full max-w-6xl p-6 z-10"
      >
        <h2 className="text-3xl md:text-4xl italic font-medium text-gray-900 mb-10 text-center drop-shadow-lg">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1">
            {leftColumn.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/40 border border-white/50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left p-4 px-2 font-semibold text-gray-900"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-700" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-700" size={20} />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-4 pb-4 text-gray-800 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1">
            {rightColumn.map((faq, index) => {
              const actualIndex = index + half;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: actualIndex * 0.05 }}
                  className="bg-white/40 border border-white/50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="flex justify-between items-center w-full text-left p-4 px-2 font-semibold text-gray-900"
                  >
                    <span>{faq.question}</span>
                    {openIndex === actualIndex ? (
                      <ChevronUp className="text-gray-700" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-700" size={20} />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === actualIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-4 pb-4 text-gray-800 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
