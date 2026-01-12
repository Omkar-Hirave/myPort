import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hammer } from "lucide-react";
import { useColor } from "@/contexts/color-context";
import { useI18n } from "@/contexts/i18n-context";

export function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useColor();
  const { t } = useI18n();

  useEffect(() => {
    // Show modal on mount (every time page loads)
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-md w-full overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Construction Worker GIF */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-72 h-72 flex items-center justify-center"
                  >
                    <img
                      src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
                      alt="Construction worker"
                      className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                      loading="eager"
                      onError={(e) => {
                        // Fallback to other reliable construction worker GIFs
                        const target = e.target as HTMLImageElement;
                        const fallbacks = [
                          "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
                          "https://media.giphy.com/media/3o7aCTPPm4OHbRLKEI/giphy.gif",
                          "https://media.giphy.com/media/l0MYC0LajboP0k6FW/giphy.gif",
                          "https://media.giphy.com/media/3o7aD2saQ8lq32s7Ic/giphy.gif",
                        ];
                        const currentSrc = target.src;
                        const fallbackIndex = fallbacks.findIndex(fb => !currentSrc.includes(fb.split('/').pop() || ''));
                        if (fallbackIndex >= 0 && fallbackIndex < fallbacks.length) {
                          target.src = fallbacks[fallbackIndex];
                        }
                      }}
                    />
                  </motion.div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Website Under Construction
                </h2>

                {/* Message */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  We're working on something amazing. Thank you for your patience!
                </p>

                {/* OK Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${colors.button} text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  <Hammer className="w-5 h-5" />
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

