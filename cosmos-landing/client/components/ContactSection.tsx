import { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";
import { useI18n } from "@/contexts/i18n-context";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

export function ContactSection() {
  const { colors, color } = useColor();
  const colorClasses = colorClassMap[color];
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
    setSuccess(false);

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
        // Success
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      // Provide more specific error messages
      if (err instanceof Error) {
        setError(err.message || "Failed to send email. Please check your EmailJS configuration.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 ${colorClasses.focusRing} transition-colors`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 md:p-12"
        >
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t("contact.messageSentSuccess")}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {t("contact.thankYouSuccess")}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  rows={6}
                  className={inputClasses}
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 bg-gradient-to-r ${colors.button} text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("contact.sendMessage")}
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

