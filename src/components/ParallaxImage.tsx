"use client";

import { useEffect, useRef } from "react";

export default function ParallaxImage({
  className = "",
  children,
  speed = 0.15,
}: {
  className?: string;
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const img = inner.current;
    if (!el || !img) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * speed;
        img.style.transform = `translateY(${offset}px) scale(1.15)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="w-full h-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
