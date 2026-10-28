"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationType = "fade-up" | "reveal-up" | "reveal-left" | "fade-in" | "scale-in" | "line-draw" | "char-reveal";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  threshold?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const trigger = () => el.classList.add("visible");
          if (delay > 0) {
            setTimeout(trigger, delay);
          } else {
            trigger();
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${animation} ${className}`} style={style}>
      {children}
    </div>
  );
}
