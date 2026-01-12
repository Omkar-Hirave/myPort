import { useEffect, useState } from "react";
import { useColor } from "@/contexts/color-context";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { colors: themeColors } = useColor();

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate the total scrollable height
      const totalScrollableHeight = documentHeight - windowHeight;
      
      // Calculate progress percentage (0 to 100)
      const progress = totalScrollableHeight > 0 
        ? (scrollTop / totalScrollableHeight) * 100 
        : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className={`h-full bg-gradient-to-r ${themeColors.button} transition-all duration-150 ease-out`}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

