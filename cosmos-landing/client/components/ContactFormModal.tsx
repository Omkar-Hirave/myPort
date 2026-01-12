import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useColor } from "@/contexts/color-context";
import { useI18n } from "@/contexts/i18n-context";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { colors } = useColor();
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        }
      );

      if (result.status === 200) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        err instanceof Error 
          ? err.message 
          : "Failed to send email. Please check your EmailJS configuration."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = `w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-${colors.primary} transition-colors`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t("contact.title")}
                </h2>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className={`w-12 h-12 rounded-full bg-${colors.primary} bg-opacity-10 flex items-center justify-center mx-auto mb-4`}>
                    <Send className={`w-6 h-6 text-${colors.primary}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t("contact.messageSent")}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t("contact.thankYou")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClasses}
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClasses}
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      {t("contact.subject")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={inputClasses}
                      placeholder={t("contact.subjectPlaceholder")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      {t("contact.message")} *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className={inputClasses}
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-4 bg-gradient-to-r ${colors.button} text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t("contact.sendMessage")}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
