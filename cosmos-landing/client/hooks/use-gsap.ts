import { useRef } from "react";

export function useCardHover() {
  const cardRef = useRef<HTMLDivElement>(null);
  return cardRef;
}

export function useScrollAnimation(selector: string) {
  // Scroll animation hook - no-op without GSAP
}
