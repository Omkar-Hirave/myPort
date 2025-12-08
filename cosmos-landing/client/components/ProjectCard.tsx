import { ExternalLink, Github } from "lucide-react";
import { useCardHover } from "@/hooks/use-gsap";
import { motion } from "framer-motion";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
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
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 pr-8">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${colors.light} ${colors.dark} ${colorClasses.gradientBg2Light} ${colorClasses.gradientBg2LightDark} ${colorClasses.textLight} ${colorClasses.textLightDark}`}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Links */}
      {(link || github) && (
        <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
          {link && (
            <motion.a
              whileHover={{ x: 4 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${colorClasses.text} ${colorClasses.textDark} ${colorClasses.hoverText.replace('-600', '-700')} dark:${colorClasses.hoverTextDark.replace('-400', '-300')} font-medium text-sm transition-colors`}
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {github && (
            <motion.a
              whileHover={{ x: 4 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium text-sm transition-colors"
            >
              Code
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
}
