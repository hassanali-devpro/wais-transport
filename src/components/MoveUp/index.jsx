import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-7 left-7 z-50 ">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="back-to-top"
            initial={{ x: -80, opacity: 0 }} // start hidden (left)
            animate={{ x: 0, opacity: 1 }} // slide in
            exit={{ x: -80, opacity: 0 }} // slide out
            transition={{ duration: 0.4 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-black p-1 cursor-pointer rounded-full hover:text-[#F8F6F2] transition-colors duration-300"
          >
            <ArrowUp size={35} className="text-[#F8F6F2]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTopButton;
