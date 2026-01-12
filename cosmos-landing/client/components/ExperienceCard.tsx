import { Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";
import { useI18n } from "@/contexts/i18n-context";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

export function ExperienceCard({
  title,
  company,
  duration,
  highlights,
}: ExperienceCardProps) {
  const { colors, color } = useColor();
  const colorClasses = colorClassMap[color];
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Timeline line connector - only show if not last item */}
      <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-transparent dark:from-slate-700 dark:via-slate-600 dark:to-transparent ml-6 hidden md:block" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${colors.button} flex items-center justify-center shadow-lg z-10 hidden md:flex border-4 border-white dark:border-slate-800`}>
        <Building2 className="w-5 h-5 text-white" />
      </div>

      <div className={`ml-0 md:ml-16 bg-white dark:bg-slate-800 rounded-xl border-l-4 ${colorClasses.border} ${colorClasses.borderDark} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}>
        {/* Professional Header Section */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <Building2 className={`w-5 h-5 ${colorClasses.text} ${colorClasses.textDark} flex-shrink-0`} />
                <p className={`text-xl sm:text-2xl ${colorClasses.text} ${colorClasses.textDark} font-semibold`}>
                  {company}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">{duration}</span>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="p-6 sm:p-8">
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            {t("keyAchievement")}
          </h4>
          <div className="space-y-4">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="flex gap-4 items-start group/item"
              >
                {/* Professional bullet point */}
                <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${colors.button} mt-2 group-hover/item:scale-150 transition-transform`} />
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed flex-1">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
