import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useColor } from "@/contexts/color-context";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { colors: themeColors } = useColor();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r ${themeColors.button} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

