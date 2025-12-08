import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

const badgesData = [
  { key: "leetcode", icon: "🎯" },
  { key: "experience", icon: "⏱️" },
  { key: "apps", icon: "📱" },
  { key: "users", icon: "👥" },
];

export function AchievementBadges() {
  const { t } = useI18n();
  const { colors, color } = useColor();
  const colorClasses = colorClassMap[color];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
    >
      {badgesData.map((badge) => (
        <motion.div
          key={badge.key}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -4 }}
          className="relative group"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.button} rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity`} />
          <div className={`relative bg-white dark:bg-slate-800 rounded-lg p-4 border ${colorClasses.borderLight} ${colorClasses.borderLightDark} ${colorClasses.hoverBorder} ${colorClasses.hoverBorderDark} transition-all`}>
            <div className="text-3xl mb-2">{badge.icon}</div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {t(`badges.${badge.key}`)}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
