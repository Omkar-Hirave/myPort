export type ColorTheme = "orange" | "blue" | "purple" | "green" | "red" | "indigo" | "rose";

export const colorThemes: Record<ColorTheme, {
  primary: string;
  accent: string;
  light: string;
  dark: string;
  button: string;
  badge: string;
  hover: string;
  bgLight: string;
  bgDark: string;
  border: string;
  darkBorder: string;
  gradientFrom: string;
  gradientTo: string;
  darkGradientFrom: string;
  darkGradientTo: string;
}> = {
  orange: {
    primary: "orange-600",
    accent: "amber-600",
    light: "orange-100",
    dark: "orange-900/50",
    button: "from-orange-600 to-amber-600",
    badge: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    hover: "hover:text-orange-600 dark:hover:text-orange-400",
    bgLight: "bg-orange-50",
    bgDark: "bg-orange-950/30",
    border: "border-orange-400",
    darkBorder: "dark:border-orange-400",
    gradientFrom: "from-orange-600",
    gradientTo: "to-amber-600",
    darkGradientFrom: "dark:from-orange-600",
    darkGradientTo: "dark:to-amber-600",
  },
  blue: {
    primary: "blue-600",
    accent: "cyan-600",
    light: "blue-100",
    dark: "blue-900/50",
    button: "from-blue-600 to-cyan-600",
    badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    hover: "hover:text-blue-600 dark:hover:text-blue-400",
    bgLight: "bg-blue-50",
    bgDark: "bg-blue-950/30",
    border: "border-blue-400",
    darkBorder: "dark:border-blue-400",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    darkGradientFrom: "dark:from-blue-600",
    darkGradientTo: "dark:to-cyan-600",
  },
  purple: {
    primary: "purple-600",
    accent: "violet-600",
    light: "purple-100",
    dark: "purple-900/50",
    button: "from-purple-600 to-violet-600",
    badge: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    hover: "hover:text-purple-600 dark:hover:text-purple-400",
    bgLight: "bg-purple-50",
    bgDark: "bg-purple-950/30",
    border: "border-purple-400",
    darkBorder: "dark:border-purple-400",
    gradientFrom: "from-purple-600",
    gradientTo: "to-violet-600",
    darkGradientFrom: "dark:from-purple-600",
    darkGradientTo: "dark:to-violet-600",
  },
  green: {
    primary: "green-600",
    accent: "emerald-600",
    light: "green-100",
    dark: "green-900/50",
    button: "from-green-600 to-emerald-600",
    badge: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300",
    hover: "hover:text-green-600 dark:hover:text-green-400",
    bgLight: "bg-green-50",
    bgDark: "bg-green-950/30",
    border: "border-green-400",
    darkBorder: "dark:border-green-400",
    gradientFrom: "from-green-600",
    gradientTo: "to-emerald-600",
    darkGradientFrom: "dark:from-green-600",
    darkGradientTo: "dark:to-emerald-600",
  },
  red: {
    primary: "red-600",
    accent: "rose-600",
    light: "red-100",
    dark: "red-900/50",
    button: "from-red-600 to-rose-600",
    badge: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
    hover: "hover:text-red-600 dark:hover:text-red-400",
    bgLight: "bg-red-50",
    bgDark: "bg-red-950/30",
    border: "border-red-400",
    darkBorder: "dark:border-red-400",
    gradientFrom: "from-red-600",
    gradientTo: "to-rose-600",
    darkGradientFrom: "dark:from-red-600",
    darkGradientTo: "dark:to-rose-600",
  },
  indigo: {
    primary: "indigo-600",
    accent: "blue-600",
    light: "indigo-100",
    dark: "indigo-900/50",
    button: "from-indigo-600 to-blue-600",
    badge: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    hover: "hover:text-indigo-600 dark:hover:text-indigo-400",
    bgLight: "bg-indigo-50",
    bgDark: "bg-indigo-950/30",
    border: "border-indigo-400",
    darkBorder: "dark:border-indigo-400",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-blue-600",
    darkGradientFrom: "dark:from-indigo-600",
    darkGradientTo: "dark:to-blue-600",
  },
  rose: {
    primary: "rose-600",
    accent: "pink-600",
    light: "rose-100",
    dark: "rose-900/50",
    button: "from-rose-600 to-pink-600",
    badge: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    hover: "hover:text-rose-600 dark:hover:text-rose-400",
    bgLight: "bg-rose-50",
    bgDark: "bg-rose-950/30",
    border: "border-rose-400",
    darkBorder: "dark:border-rose-400",
    gradientFrom: "from-rose-600",
    gradientTo: "to-pink-600",
    darkGradientFrom: "dark:from-rose-600",
    darkGradientTo: "dark:to-pink-600",
  },
};
