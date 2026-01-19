import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useColor } from "@/contexts/color-context";
import { colorClassMap } from "@/lib/color-utils";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { color, colors } = useColor();
  const colorClasses = colorClassMap[color];

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches && window.innerWidth > 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : isClicking ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`w-3 h-3 rounded-full ${colorClasses.bg} ${colorClasses.bgDark} border-2 ${colorClasses.border} ${colorClasses.borderDark} shadow-lg transition-all backdrop-blur-sm`}
          style={{
            boxShadow: isHovering ? `0 0 15px ${colors.primary}` : "0 0 8px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 14,
          y: mousePosition.y - 14,
          scale: isHovering ? 2 : isClicking ? 0.4 : 1,
          opacity: isHovering ? 0.4 : isClicking ? 0.6 : 0.15,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.3,
        }}
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`w-7 h-7 rounded-full border-2 ${colorClasses.border} ${colorClasses.borderDark} transition-all backdrop-blur-sm`}
          style={{
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </>
  );
}

