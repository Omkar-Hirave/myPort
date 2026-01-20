import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Palette, Mail, Check, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useI18n } from "@/contexts/i18n-context";
import { useColor } from "@/contexts/color-context";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import type { Language } from "@/lib/i18n";
import type { ColorTheme } from "@/lib/colors";

interface HeaderProps {
  onContactClick?: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useI18n();
  const { color, setColor, colors: themeColors } = useColor();

  const email = "omkarhirve05@gmail.com";
  const phone = "+91 95294 33723"; // Update with your actual phone number

  // Auto-switch between email and phone every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEmail((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone:", err);
    }
  };

  const handleCopy = () => {
    if (showEmail) {
      handleCopyEmail();
    } else {
      handleCopyPhone();
    }
  };

  const navItems = [
    { label: t("home"), href: "/", id: "home" },
    { label: t("experience"), href: "#experience", id: "experience" },
    { label: t("skills"), href: "#skills", id: "skills" },
    { label: t("projects"), href: "#projects", id: "projects" },
    { label: t("blogs"), href: "#blogs", id: "blogs" },
  ];

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "blogs"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Check if we're at the top (home section)
      if (scrollPosition < 200) {
        setActiveSection("home");
        return;
      }

      // Find the section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "hi", name: "हिंदी" },
    { code: "fr", name: "Français" },
    { code: "mr", name: "मराठी" },
  ];

  const colors: { name: ColorTheme; label: string; gradient: string }[] = [
    { name: "orange", label: "Orange", gradient: "from-orange-600 to-amber-600" },
    { name: "blue", label: "Blue", gradient: "from-blue-600 to-cyan-600" },
    { name: "purple", label: "Purple", gradient: "from-purple-600 to-violet-600" },
    { name: "green", label: "Green", gradient: "from-green-600 to-emerald-600" },
    { name: "red", label: "Red", gradient: "from-red-600 to-rose-600" },
    { name: "indigo", label: "Indigo", gradient: "from-indigo-600 to-blue-600" },
    { name: "rose", label: "Rose", gradient: "from-rose-600 to-pink-600" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${themeColors.button} flex items-center justify-center hover:shadow-lg transition-shadow`}>
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-slate-900 dark:text-white">
              Omkar Hirave
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                if (item.href === "/") {
                  // Scroll to top smoothly
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                } else if (item.href.startsWith("#")) {
                  // Handle hash links with smooth scroll
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(item.id);
                  }
                }
              };
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className={`relative font-medium transition-colors cursor-pointer ${
                    isActive
                      ? `text-slate-900 dark:text-white ${themeColors.hover}`
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${themeColors.button}`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Email/Phone Display with Copy - Auto Switching */}
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm overflow-hidden relative min-w-[200px]"
                >
                  <AnimatePresence mode="wait">
                    {showEmail ? (
                      <motion.div
                        key="email"
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 20, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center gap-2"
                      >
                        {emailCopied ? (
                          <>
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            <span>{email}</span>
                          </>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="phone"
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 20, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center gap-2"
                      >
                        {phoneCopied ? (
                          <>
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Phone className="w-4 h-4" />
                            <span>{phone}</span>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {showEmail
                    ? emailCopied
                      ? "Email copied!"
                      : "Click to copy email"
                    : phoneCopied
                    ? "Phone copied!"
                    : "Click to copy phone"}
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Color Selector */}
            <div className="relative">
              <button
                onClick={() => setIsColorOpen(!isColorOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Change theme color"
              >
                <Palette className="w-5 h-5" />
              </button>
              {isColorOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden p-4 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {colors.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => {
                          setColor(col.name);
                          setIsColorOpen(false);
                        }}
                        className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                          color === col.name
                            ? `ring-2 ring-offset-2 dark:ring-offset-slate-800 ring-${col.name}-500 bg-${col.name}-50 dark:bg-${col.name}-900/20`
                            : "hover:bg-slate-100 dark:hover:bg-slate-700"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${col.gradient} shadow-md`} />
                        <span className="text-slate-900 dark:text-white text-xs">{col.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm"
              >
                {language.toUpperCase()}
              </button>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                        language === lang.code
                          ? `${themeColors.badge}`
                          : "text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={onContactClick}
              className={`px-6 py-2 bg-gradient-to-r ${themeColors.button} text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105`}
            >
              {t("getInTouch")}
            </button>
          </div>

          {/* Mobile Menu & Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Email/Phone Display with Copy - Mobile - Auto Switching */}
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs overflow-hidden relative min-w-[40px]"
                >
                  <AnimatePresence mode="wait">
                    {showEmail ? (
                      <motion.div
                        key="email-mobile"
                        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {emailCopied ? (
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Mail className="w-4 h-4" />
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="phone-mobile"
                        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {phoneCopied ? (
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Phone className="w-4 h-4" />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {showEmail
                    ? emailCopied
                      ? "Email copied!"
                      : "Click to copy email"
                    : phoneCopied
                    ? "Phone copied!"
                    : "Click to copy phone"}
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Color Selector Mobile */}
            <button
              onClick={() => setIsColorOpen(!isColorOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <Palette className="w-4 h-4" />
            </button>

            {isColorOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-16 right-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-50"
              >
                <div className="grid grid-cols-2 gap-2">
                  {colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => {
                        setColor(col.name);
                        setIsColorOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2 py-1 rounded text-xs font-medium transition-all ${
                        color === col.name
                          ? "ring-2 ring-offset-1 dark:ring-offset-slate-800 ring-slate-400"
                          : ""
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${col.gradient}`} />
                      {col.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Language Selector Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="px-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-xs"
              >
                {language.toUpperCase()}
              </button>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                        language === lang.code
                          ? "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
                          : "text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (item.href === "/") {
                    // Scroll to top smoothly
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveSection("home");
                  } else if (item.href.startsWith("#")) {
                    // Handle hash links with smooth scroll
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      setActiveSection(item.id);
                    }
                  }
                };
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleClick}
                    className={`relative font-medium px-2 py-2 cursor-pointer transition-colors ${
                      isActive
                        ? `text-slate-900 dark:text-white ${themeColors.hover}`
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionMobile"
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${themeColors.button} rounded-r`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  onContactClick?.();
                  setIsOpen(false);
                }}
                className={`px-4 py-2 bg-gradient-to-r ${themeColors.button} text-white rounded-lg font-medium text-center mt-2 w-full`}
              >
                {t("getInTouch")}
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
