import { ChevronRight } from "lucide-react";
import { useCardHover } from "@/hooks/use-gsap";
import { motion } from "framer-motion";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

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
  const hoverProps = useCardHover();
  const { colors, color } = useColor();
  const colorClasses = colorClassMap[color];

  return (
    <motion.div
      {...hoverProps}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 ${colorClasses.hoverBorder} ${colorClasses.hoverBorderDark} transition-colors cursor-default`}
    >
      {/* Gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgLight} ${colors.bgDark} ${colorClasses.gradientBg2Light} ${colorClasses.gradientBg2LightDark} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className={`text-base sm:text-lg ${colorClasses.text} ${colorClasses.textDark} font-semibold mb-1`}>
          {company}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{duration}</p>
      </div>

      {/* Highlights */}
      <div className="space-y-3">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex gap-3 items-start"
          >
            <ChevronRight className={`w-5 h-5 ${colorClasses.text} ${colorClasses.textDark} flex-shrink-0 mt-0.5`} />
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {highlight}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
