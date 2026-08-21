"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"logo" | "exit" | "done">("logo");

  useEffect(() => {
    // Logo display
    const t1 = setTimeout(() => setPhase("exit"), 1000);
    // Remove from DOM
    const t2 = setTimeout(() => setPhase("done"), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--black)]"
      style={{
        transform: phase === "exit" ? "scaleY(0)" : "scaleY(1)",
        transformOrigin: "top",
        transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-50" />

      {/* Logo */}
      <div
        className="relative z-10 text-center"
        style={{
          animation: "loadingLogo 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        }}
      >
        <Image src="/images/logo/logo.png" alt="Black Smith" width={150} height={40} className="h-10 w-auto object-contain mx-auto" priority />
      </div>

      {/* Sparks during loading */}
      {[
        { left: "20%", delay: "0.2s" },
        { left: "50%", delay: "0.6s" },
        { left: "75%", delay: "0.4s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-[2px] h-[2px] rounded-full bg-[var(--ember)]"
          style={{
            left: s.left,
            boxShadow: "0 0 6px 2px rgba(255,140,90,0.3)",
            animation: `sparkFloat 3s ${s.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
