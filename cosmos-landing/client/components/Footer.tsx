import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";
import { useColor } from "@/contexts/color-context";

export function Footer() {
  const { t } = useI18n();
  const { colors } = useColor();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.button} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-lg">Omkar Hirave</span>
            </div>
            <p className="text-slate-400 text-sm">
              React & Full Stack Developer | Cloud Security Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("home")}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {t("experience")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {t("projects")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  {t("skills")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Medium Articles
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/omkarhirave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/omkar-hirave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("connectWithMe")}</h4>
            <div className="flex gap-4">
              <a
                href="mailto:omkarhirve05@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/omkar-hirave"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/omkar-hirave"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2025 Omkar Hirave. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
