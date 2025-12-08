import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { AchievementBadges } from "@/components/AchievementBadges";
import { Hero3D } from "@/components/Hero3D";
import { ContactSection } from "@/components/ContactSection";
import { ArrowRight, Github, Linkedin, Mail, Download, Eye, ChevronDown } from "lucide-react";
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

const blogPosts = [
  {
    title: "Building Scalable React Applications with Component Architecture",
    description: "Deep dive into creating maintainable and performant React components using modern patterns and best practices. Learn composition, hooks, and state management.",
    category: "React",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    link: "https://medium.com",
    views: 2500,
  },
  {
    title: "Master JavaScript Async/Await: From Promises to Modern Patterns",
    description: "Comprehensive guide to understanding asynchronous JavaScript, error handling, and advanced patterns for async operations.",
    category: "JavaScript",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    link: "https://medium.com",
    views: 3200,
  },
  {
    title: "React Hooks Deep Dive: useEffect, useContext, and Custom Hooks",
    description: "Explore the power of React Hooks and learn how to build custom hooks for your application. Advanced patterns included.",
    category: "React",
    date: "Mar 5, 2024",
    readTime: "12 min read",
    link: "https://medium.com",
    views: 4100,
  },
  {
    title: "CSS Grid vs Flexbox: When and How to Use Each",
    description: "Learn the differences between CSS Grid and Flexbox and master when to use each layout system effectively.",
    category: "CSS",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    link: "https://medium.com",
    views: 1800,
  },
  {
    title: "State Management in React: Redux vs Context API vs Zustand",
    description: "Compare different state management solutions and learn when to use Redux, Context API, or newer alternatives.",
    category: "React",
    date: "Feb 20, 2024",
    readTime: "11 min read",
    link: "https://medium.com",
    views: 3500,
  },
  {
    title: "Performance Optimization: Making Your React App Lightning Fast",
    description: "Essential techniques for optimizing React applications including code splitting, memoization, and lazy loading.",
    category: "Performance",
    date: "Feb 12, 2024",
    readTime: "9 min read",
    link: "https://medium.com",
    views: 2800,
  },
];

// LeetCode Icon Component - Stylized "L" representing LeetCode
function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.591 12.314c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.767-4.726c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l.689.698 3.748-3.753c.195-.195.451-.293.707-.293.258 0 .51.098.707.293l7.103 7.095c.196.196.293.453.293.712 0 .258-.097.505-.293.701l-6.062 6.068zm-1.5-1.5l5.062-5.068-5.062-5.068-5.062 5.068 5.062 5.068z" />
    </svg>
  );
}

function ResumeDropdownSection({ t, onContactClick, onViewWork, colors, colorClasses }: { t: (key: string) => string; onContactClick: () => void; onViewWork: () => void; colors: any; colorClasses: any }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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
        Email me
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
          className="flex items-center justify-center gap-2 px-6 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
        >
          <Download className="w-4 h-4 flex-shrink-0" />
          Resume
          <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isResumeOpen ? "rotate-180" : ""}`} />
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
            <a
              href="https://drive.google.com/file/d/12aCPeGewh-HYS4yXhqqdOh-vv07xtRwj/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsResumeOpen(false)}
              className={`flex items-center gap-2 w-full px-4 py-3 text-slate-900 dark:text-white ${colorClasses.hoverBg} ${colorClasses.hoverBgDark} transition-colors text-left border-t border-slate-200 dark:border-slate-700`}
            >
              <Eye className="w-4 h-4 text-blue-600" />
              {t("viewResume")}
            </a>
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
      <Header onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section
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

              <div className="relative">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight pr-32 sm:pr-40"
                >
                  {t("heroTitle")}
                  <span className={`block bg-gradient-to-r ${colors.button} bg-clip-text text-transparent`}>
                    {t("heroTitleSpan")}
                  </span>
                </motion.h1>
                
                {/* Placeholder Avatar - Replace this with your photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 dark:from-yellow-500 dark:via-amber-500 dark:to-yellow-600 border-4 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden group hover:scale-110 transition-transform duration-300"
                >
                  {/* Replace this placeholder with your image: <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background gradient circle */}
                    <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
                    
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FCD34D" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>
                    </defs>
                    
                    {/* Abstract geometric shapes - Code/tech inspired */}
                    {/* Main shape - stylized "O" or circuit pattern */}
                    <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="6" opacity="0.9" />
                    <circle cx="100" cy="100" r="35" fill="none" stroke="white" strokeWidth="4" opacity="0.7" />
                    
                    {/* Corner accents - like code brackets */}
                    <path d="M 40 60 L 50 50 L 50 70 Z" fill="white" opacity="0.8" />
                    <path d="M 160 60 L 150 50 L 150 70 Z" fill="white" opacity="0.8" />
                    <path d="M 40 140 L 50 150 L 50 130 Z" fill="white" opacity="0.8" />
                    <path d="M 160 140 L 150 150 L 150 130 Z" fill="white" opacity="0.8" />
                    
                    {/* Center dot - focal point */}
                    <circle cx="100" cy="100" r="8" fill="white" opacity="0.95" />
                    
                    {/* Decorative lines - tech aesthetic */}
                    <line x1="70" y1="100" x2="85" y2="100" stroke="white" strokeWidth="3" opacity="0.6" />
                    <line x1="115" y1="100" x2="130" y2="100" stroke="white" strokeWidth="3" opacity="0.6" />
                    <line x1="100" y1="70" x2="100" y2="85" stroke="white" strokeWidth="3" opacity="0.6" />
                    <line x1="100" y1="115" x2="100" y2="130" stroke="white" strokeWidth="3" opacity="0.6" />
                  </svg>
                </motion.div>
              </div>

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
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="mailto:omkarhirve05@gmail.com"
                    className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 ${colorClasses.hoverBgPrimary} hover:text-white transition-all`}
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
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
            className="grid grid-cols-1 gap-8"
          >
            <motion.div variants={itemVariants}>
              <ExperienceCard
                title="Front End Developer"
                company="miniOrange Security Software"
                duration="Sep 2024 – Present"
                highlights={[
                  "Architected a Cloud Security application using a component-driven React architecture with modular design patterns, reducing feature integration effort by 60% and boosting performance by 40%.",
                  "Implemented responsive web design with React-MUI breakpoints, improving cross-device accessibility and reducing UI-related bug reports by 25%.",
                  "Built intuitive auditing dashboards with real-time drill-down analytics, dynamic search filters, and seamless form validation—streamlining audit processes and improving data accuracy across large-scale records.",
                  "Implemented comprehensive unit and integration tests using Jest and React Testing Library, reducing QA testing load by 30%, preventing regressions, and stabilizing production releases.",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ExperienceCard
                title="Full Stack Developer"
                company="Flairminds Software"
                duration="Sep 2023 - Aug 2024"
                highlights={[
                  "Designed and developed a carbon emissions tracking app (React + Flask AI APIs) enabling businesses to calculate and report emissions across scopes, leading to an average 22% reduction in carbon footprint.",
                  "Built a full-stack data migration application (React/Node.js) with dynamic mapping, transformation, and smooth transfer capabilities for large multi-database systems, improving data mapping by 35%.",
                  "Constructed a resource management tool using React and Redux Toolkit, enhancing visibility into requests and availability and increasing resource distribution efficiency by 25%.",
                  "E-commerce application: Built a MongoDB-integrated rating system with complex APIs for consumers, retailers, and delivery personnel with Node.js.",
                ]}
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
                title: "Frontend",
                skills: [
                  "React.js",
                  "TypeScript",
                  "HTML",
                  "CSS",
                  "JavaScript (ES6+)",
                  "GraphQL",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "RESTful APIs",
                  "SQL",
                  "MongoDB",
                  "Mongoose ORM",
                ],
              },
              {
                title: "Tools & Frameworks",
                skills: [
                  "Redux Toolkit",
                  "MaterialUI",
                  "Bootstrap",
                  "Git",
                  "Postman",
                  "CursorAI",
                ],
              },
              {
                title: "Specialization",
                skills: [
                  "Cloud Security",
                  "Responsive Design",
                  "Performance Optimization",
                  "Testing & QA",
                ],
              },
              {
                title: "DSA & Problem Solving",
                skills: [
                  "LeetCode",
                  "GeeksforGeeks",
                  "TypeScript",
                  "400+ Problems Solved",
                ],
              },
              {
                title: "Content & Mentorship",
                skills: [
                  "10+ Medium Articles",
                  "100+ Developers Reached",
                  "Team Leadership",
                  "Code Review Expertise",
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
                title: "Video Chat App",
                description:
                  "A peer-to-peer video calling platform with low-latency streaming and secure connections. Built with WebRTC for real-time communication and Socket.IO for signaling.",
                technologies: ["React", "Node.js", "WebRTC", "Socket.IO"],
                github: "https://github.com",
              },
              {
                title: "Real-Time Collaborative Design Tool",
                description:
                  "Multi-user canvas with synchronized drawing, zoom/pan navigation, undo/redo history, and conflict resolution. Enables seamless real-time collaboration with consistent state management.",
                technologies: ["React", "Node.js", "WebSockets", "Canvas API"],
                github: "https://github.com",
              },
              {
                title: "Carbon Emissions Tracking App",
                description:
                  "Business application for calculating and reporting emissions across scopes with Flask AI APIs integration. Helped businesses achieve an average 22% reduction in carbon footprint.",
                technologies: ["React", "Flask", "AI APIs", "Analytics"],
                link: "https://example.com",
              },
              {
                title: "Data Migration Application",
                description:
                  "Full-stack solution with dynamic mapping, transformation, and smooth transfer capabilities for large multi-database systems. Improved data mapping efficiency by 35%.",
                technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
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
            {blogPosts.map((post, idx) => (
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
                    MSc Computer Applications
                  </h3>
                  <p className={`text-lg ${colorClasses.text} ${colorClasses.textDark} font-semibold`}>
                    Fergusson College Pune
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Advanced study in computer science with focus on software development,
                data structures, and algorithms. Strong foundation in full-stack development
                and system design.
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
              Email me
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
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
