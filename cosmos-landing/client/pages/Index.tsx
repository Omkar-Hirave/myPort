import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { AchievementBadges } from "@/components/AchievementBadges";
import { Hero3D } from "@/components/Hero3D";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { ConstructionModal } from "@/components/ConstructionModal";
import { ArrowRight, Github, Linkedin, Mail, Download, Eye, ChevronDown, Instagram } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Blog posts will be generated dynamically based on language

// LeetCode Icon Component - Official LeetCode Logo (Simple Icons)
function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.591 12.314c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.767-4.726c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l.689.698 3.748-3.753c.195-.195.451-.293.707-.293.258 0 .51.098.707.293l7.103 7.095c.196.196.293.453.293.712 0 .258-.097.505-.293.701l-6.062 6.068zm-1.5-1.5l5.062-5.068-5.062-5.068-5.062 5.068 5.062 5.068z"/>
    </svg>
  );
}

// CodeSandbox Icon Component - Official CodeSandbox Logo (Simple Icons)
function CodeSandboxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 6L12 0l10.5 6v12L12 24 1.5 18V6zm2.086 1.414v9.172L11 19.134V11.586L3.586 7.414zm16.828 0L13 11.586v7.548l7.414-4.172V7.414zM12 2.134l7.414 4.172L12 10.478 4.586 6.306 12 2.134z"/>
    </svg>
  );
}

function ResumeDropdownSection({ t, onContactClick, onViewWork, colors, colorClasses }: { t: (key: string) => string; onContactClick: () => void; onViewWork: () => void; colors: any; colorClasses: any }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    };

    if (isResumeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResumeOpen]);

  // Highlight Resume button at intervals
  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 3000); // Highlight for 2 seconds
    }, 5000); // Highlight every 8 seconds

    return () => clearInterval(highlightInterval);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContactClick}
        className={`flex items-center justify-center gap-2 px-6 h-14 bg-gradient-to-r ${colors.button} text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap`}
      >
        {t("getInTouch")}
        <ArrowRight className="w-5 h-5 flex-shrink-0" />
      </motion.button>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:omkarhirve05@gmail.com"
        className={`flex items-center justify-center gap-2 px-6 h-14 border-2 ${colorClasses.border} ${colorClasses.borderDark} ${colorClasses.text} ${colorClasses.textDark} rounded-lg font-semibold ${colorClasses.hoverBg} ${colorClasses.hoverBgDark} transition-colors whitespace-nowrap box-border`}
      >
        <Mail className="w-5 h-5 flex-shrink-0" />
        {t("emailMe")}
      </motion.a>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onViewWork}
        className="flex items-center justify-center gap-2 px-6 h-14 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap box-border"
      >
        {t("viewMyWork")}
        <ArrowRight className="w-5 h-5 flex-shrink-0" />
      </motion.button>

      {/* Resume Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsResumeOpen(!isResumeOpen)}
          animate={{
            scale: isHighlighted ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: isHighlighted ? 1 : 0,
          }}
          className={`flex items-center justify-center gap-2 px-6 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all whitespace-nowrap cursor-pointer border-2 relative ${
            isHighlighted
              ? `${colorClasses.border} ${colorClasses.borderDark} ${colorClasses.shadow}`
              : "border-transparent"
          }`}
        >
          {/* Pulsing ring effect when highlighted */}
          {isHighlighted && (
            <motion.div
              className={`absolute inset-0 rounded-lg border-2 ${colorClasses.border} ${colorClasses.borderDark} opacity-0`}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.1, 1.2],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: 1,
              }}
            />
          )}
          <Download className="w-4 h-4 flex-shrink-0 pointer-events-none relative z-10" />
          <span className="pointer-events-none relative z-10">{t("resume")}</span>
          <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform pointer-events-none relative z-10 ${isResumeOpen ? "rotate-180" : ""}`} />
        </motion.button>

        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "https://drive.google.com/file/d/12aCPeGewh-HYS4yXhqqdOh-vv07xtRwj/view";
                link.download = "https://drive.google.com/file/d/12aCPeGewh-HYS4yXhqqdOh-vv07xtRwj/view";
                link.click();
                setIsResumeOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-4 py-3 text-slate-900 dark:text-white ${colorClasses.hoverBg} ${colorClasses.hoverBgDark} transition-colors text-left`}
            >
              <Download className={`w-4 h-4 ${colorClasses.text}`} />
              {t("downloadResume")}
            </button>
            <motion.a
              href="https://drive.google.com/file/d/12aCPeGewh-HYS4yXhqqdOh-vv07xtRwj/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsResumeOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center gap-2 w-full px-4 py-3 text-slate-900 dark:text-white ${colorClasses.hoverBg} ${colorClasses.hoverBgDark} transition-all text-left border-t-2 ${colorClasses.border} ${colorClasses.borderDark} group overflow-hidden`}
            >
              <div className={`absolute inset-0 ${colorClasses.bg} ${colorClasses.bgDark} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <Eye className={`w-4 h-4 ${colorClasses.text} ${colorClasses.textDark} relative z-10`} />
              <span className="font-semibold relative z-10">{t("viewResume")}</span>
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 ${colorClasses.bg} ${colorClasses.bgDark} opacity-60`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Index() {
  const { t } = useI18n();
  const { colors, color } = useColor();
  const colorClasses = colorClassMap[color];
  const heroRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <ConstructionModal />
      <ScrollProgress />
      <BackToTop />
      <Header onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative overflow-hidden pt-12 pb-32 px-4 sm:px-6 lg:px-8 dark:bg-slate-900"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 ${colorClasses.gradientBg1} ${colorClasses.gradientBg1Dark} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`} />
          <div className={`absolute top-0 right-0 w-96 h-96 ${colorClasses.gradientBg2} ${colorClasses.gradientBg2Dark} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`} />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Achievement Badges */}
          <AchievementBadges />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className={`inline-block mb-6 px-4 py-2 rounded-full ${colors.badge} text-sm font-semibold`}
              >
                {t("welcomePortfolio")}
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                {t("heroTitle")}
                <span className={`block bg-gradient-to-r ${colors.button} bg-clip-text text-transparent`}>
                  {t("heroTitleSpan")}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg"
              >
                {t("heroDescription")}
              </motion.p>

              {/* CTA Buttons with Resume Dropdown */}
              <ResumeDropdownSection t={t} onContactClick={scrollToContact} onViewWork={scrollToProjects} colors={colors} colorClasses={colorClasses} />

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {t("connectWithMe")}
                </span>
                <div className="flex gap-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="https://instagram.com/o_mkar__"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://linkedin.com/in/omkar-hirave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://github.com/omkar-hirave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://leetcode.com/u/omkarhirave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon className="w-5 h-5" />
                  </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LeetCode</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="mailto:omkarhirve05@gmail.com"
                    className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href="https://codesandbox.io/u/omkar-hirave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                        aria-label="CodeSandbox"
                      >
                        <CodeSandboxIcon className="w-5 h-5" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>CodeSandbox</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </motion.div>
            </motion.div>

            {/* 3D Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full aspect-square">
                <Hero3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t("experience_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("experience_desc")}
            </p>
          </motion.div>

          <motion.div
            ref={experienceSectionRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 md:gap-16 relative"
          >
            <motion.div variants={itemVariants}>
              <ExperienceCard
                title={t("experiences.miniOrange.title")}
                company={t("experiences.miniOrange.company")}
                duration={t("experiences.miniOrange.duration")}
                highlights={t("experiences.miniOrange.highlights") as string[]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ExperienceCard
                title={t("experiences.flairminds.title")}
                company={t("experiences.flairminds.company")}
                duration={t("experiences.flairminds.duration")}
                highlights={t("experiences.flairminds.highlights") as string[]}
              />
            </motion.div>
          </motion.div>

          {/* Additional Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-12 p-8 bg-white dark:bg-slate-700 rounded-2xl border-2 ${colorClasses.border.replace('-600', '-200')} dark:${colorClasses.border.replace('-600', '-700')}`}
          >
            <p className="text-slate-700 dark:text-slate-200 font-semibold text-lg mb-2">
              {t("keyAchievement")}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              {t("keyAchievementText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t("skills_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("skills_desc")}
            </p>
          </motion.div>

          <motion.div
            ref={skillsSectionRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: t("skillsData.frontend"),
                skills: [
                  t("skillsData.skillNames.react"),
                  t("skillsData.skillNames.typescript"),
                  t("skillsData.skillNames.html"),
                  t("skillsData.skillNames.css"),
                  t("skillsData.skillNames.javascript"),
                  t("skillsData.skillNames.graphql"),
                ],
              },
              {
                title: t("skillsData.backend"),
                skills: [
                  t("skillsData.skillNames.nodejs"),
                  t("skillsData.skillNames.express"),
                  t("skillsData.skillNames.restful"),
                  t("skillsData.skillNames.sql"),
                  t("skillsData.skillNames.mongodb"),
                  t("skillsData.skillNames.mongoose"),
                ],
              },
              {
                title: t("skillsData.toolsFrameworks"),
                skills: [
                  t("skillsData.skillNames.redux"),
                  t("skillsData.skillNames.mui"),
                  t("skillsData.skillNames.bootstrap"),
                  t("skillsData.skillNames.git"),
                  t("skillsData.skillNames.postman"),
                  t("skillsData.skillNames.cursor"),
                ],
              },
              {
                title: t("skillsData.specialization"),
                skills: [
                  t("skillsData.skillNames.cloudSecurity"),
                  t("skillsData.skillNames.responsive"),
                  t("skillsData.skillNames.performance"),
                  t("skillsData.skillNames.testing"),
                ],
              },
              {
                title: t("skillsData.dsa"),
                skills: [
                  t("skillsData.skillNames.leetcode"),
                  t("skillsData.skillNames.geeksforgeeks"),
                  t("skillsData.skillNames.typescript"),
                  t("skillsData.skillNames.problemsSolved"),
                ],
              },
              {
                title: t("skillsData.content"),
                skills: [
                  t("skillsData.skillNames.articles"),
                  t("skillsData.skillNames.developers"),
                  t("skillsData.skillNames.leadership"),
                  t("skillsData.skillNames.codeReview"),
                ],
              },
            ].map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 ${colorClasses.hoverBorder} ${colorClasses.hoverBorderDark} transition-colors`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgLight} ${colors.bgDark} ${colorClasses.gradientBg2Light} ${colorClasses.gradientBg2LightDark} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {skillGroup.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className={`px-3 py-1.5 rounded-lg ${colors.badge} text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t("projects_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("projects_desc")}
            </p>
          </motion.div>

          <motion.div
            ref={projectsSectionRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          >
            {[
              {
                title: t("projectsData.videoChat.title"),
                description: t("projectsData.videoChat.description"),
                technologies: t("projectsData.videoChat.technologies") as string[],
                github: "https://github.com",
              },
              {
                title: t("projectsData.collaborativeDesign.title"),
                description: t("projectsData.collaborativeDesign.description"),
                technologies: t("projectsData.collaborativeDesign.technologies") as string[],
                github: "https://github.com",
              },
              {
                title: t("projectsData.carbonEmissions.title"),
                description: t("projectsData.carbonEmissions.description"),
                technologies: t("projectsData.carbonEmissions.technologies") as string[],
                link: "https://example.com",
              },
              {
                title: t("projectsData.dataMigration.title"),
                description: t("projectsData.dataMigration.description"),
                technologies: t("projectsData.dataMigration.technologies") as string[],
                github: "https://github.com",
              },
            ].map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t("blogs_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("blogs_desc")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: t("blogsData.scalableReact.title"),
                description: t("blogsData.scalableReact.description"),
                category: t("blogsData.scalableReact.category"),
                date: "Mar 15, 2024",
                readTime: `8 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 2500,
              },
              {
                title: t("blogsData.asyncAwait.title"),
                description: t("blogsData.asyncAwait.description"),
                category: t("blogsData.asyncAwait.category"),
                date: "Mar 10, 2024",
                readTime: `10 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 3200,
              },
              {
                title: t("blogsData.reactHooks.title"),
                description: t("blogsData.reactHooks.description"),
                category: t("blogsData.reactHooks.category"),
                date: "Mar 5, 2024",
                readTime: `12 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 4100,
              },
              {
                title: t("blogsData.cssGrid.title"),
                description: t("blogsData.cssGrid.description"),
                category: t("blogsData.cssGrid.category"),
                date: "Feb 28, 2024",
                readTime: `7 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 1800,
              },
              {
                title: t("blogsData.stateManagement.title"),
                description: t("blogsData.stateManagement.description"),
                category: t("blogsData.stateManagement.category"),
                date: "Feb 20, 2024",
                readTime: `11 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 3500,
              },
              {
                title: t("blogsData.performance.title"),
                description: t("blogsData.performance.description"),
                category: t("blogsData.performance.category"),
                date: "Feb 12, 2024",
                readTime: `9 ${t("blogsData.readTime")}`,
                link: "https://medium.com",
                views: 2800,
              },
            ].map((post, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t("education_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("education_desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 ${colorClasses.hoverBorder} ${colorClasses.hoverBorderDark} transition-all hover:shadow-lg`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgLight} ${colors.bgDark} ${colorClasses.gradientBg2Light} ${colorClasses.gradientBg2LightDark} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors.button} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t("education.degree")}
                  </h3>
                  <p className={`text-lg ${colorClasses.text} ${colorClasses.textDark} font-semibold`}>
                    {t("education.college")}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("education.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${colors.button}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t("cta_title")}
          </h2>
          <p className={`text-xl text-${colors.primary.replace('-600', '-100')} mb-8 leading-relaxed`}>
            {t("cta_desc")}
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className={`flex items-center justify-center gap-2 px-8 h-14 bg-white ${colorClasses.text} rounded-lg font-bold text-lg hover:shadow-xl transition-all whitespace-nowrap`}
            >
              <Mail className="w-6 h-6 flex-shrink-0" />
              {t("getInTouch")}
            </motion.button>
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:omkarhirve05@gmail.com"
              className="flex items-center justify-center gap-2 px-8 h-14 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors whitespace-nowrap box-border"
            >
              <Mail className="w-6 h-6 flex-shrink-0" />
              {t("emailMe")}
            </motion.a>
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 h-14 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors whitespace-nowrap box-border"
            >
              <Linkedin className="w-6 h-6 flex-shrink-0" />
              {t("connectOnLinkedIn")}
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
