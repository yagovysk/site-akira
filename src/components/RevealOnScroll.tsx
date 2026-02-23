"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delayMs?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delayMs = 0,
}: RevealOnScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal-scroll reveal-${direction} ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`}
    >
      {children}
    </div>
  );
}
