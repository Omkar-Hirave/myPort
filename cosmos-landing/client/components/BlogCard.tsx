import { ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  link: string;
  readTime: string;
  views?: number;
}

export function BlogCard({
  title,
  description,
  category,
  date,
  link,
  readTime,
  views = 0,
}: BlogCardProps) {
  const { colors: themeColors, color } = useColor();
  const colorClasses = colorClassMap[color];
  
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      React: { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-700 dark:text-blue-300" },
      JavaScript: { bg: "bg-yellow-100 dark:bg-yellow-900/50", text: "text-yellow-700 dark:text-yellow-300" },
      CSS: { bg: "bg-green-100 dark:bg-green-900/50", text: "text-green-700 dark:text-green-300" },
      Performance: { bg: "bg-purple-100 dark:bg-purple-900/50", text: "text-purple-700 dark:text-purple-300" },
    };
    return colors[cat] || { bg: `${themeColors.light} dark:${themeColors.dark}`, text: `${colorClasses.textLight} ${colorClasses.textLightDark}` };
  };

  const colors = getCategoryColor(category);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 ${colorClasses.hoverBorder} ${colorClasses.hoverBorderDark} transition-colors cursor-pointer h-full flex flex-col`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.bgLight} ${themeColors.bgDark} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />

      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 rounded-lg ${colors.bg} ${colors.text} text-xs font-semibold`}>
          {category}
        </span>
        <ExternalLink className={`w-4 h-4 text-slate-400 ${colorClasses.hoverText} ${colorClasses.hoverTextDark} transition-colors`} />
      </div>

      <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-3 ${colorClasses.hoverText} ${colorClasses.hoverTextDark} transition-colors line-clamp-2 flex-grow`}>
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
        {description}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
        <div className="flex gap-4">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        {views > 0 && (
          <div className={`flex items-center gap-1 ${colorClasses.text} ${colorClasses.textDark} font-semibold`}>
            <Eye className="w-3 h-3" />
            {(views / 1000).toFixed(1)}k
          </div>
        )}
      </div>
    </motion.a>
  );
}
