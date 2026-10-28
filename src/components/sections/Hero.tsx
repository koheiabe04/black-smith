"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    // Stagger entrance after loading screen
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden bg-[var(--black)]">
      {/* ── Background image fallback ── */}
      <Image
        src="/images/hero-fallback.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover transition-opacity duration-[2s]"
        style={{ opacity: loaded ? 0.55 : 0 }}
      />
      {/* ── Video (overlays the image when it can play) ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2s]"
        style={{ opacity: loaded ? 0.55 : 0 }}
        autoPlay muted loop playsInline preload="metadata"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-[var(--black)]/30 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)]/50 to-transparent z-[1]" />
      <div className="absolute inset-0 grid-texture z-[2] opacity-40" />

      {/* ── Giant Stroke Text — shifts with parallax feel ── */}
      <div
        className="absolute top-[8%] -right-[3%] z-[2] pointer-events-none select-none hidden md:block transition-all duration-[2s]"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateX(0)" : "translateX(80px)",
        }}
      >
        <span className="font-display font-extrabold text-[22vw] leading-none text-stroke text-[var(--iron)]/60">
          BS
        </span>
      </div>

      {/* ── Sparks ── */}
      {[
        { l: "8%", b: "5%", s: 3, d: "0s", dur: "5s" },
        { l: "22%", b: "12%", s: 2, d: "1.5s", dur: "6.5s" },
        { l: "42%", b: "3%", s: 2.5, d: "0.8s", dur: "4.5s" },
        { l: "65%", b: "8%", s: 2, d: "2.2s", dur: "5.5s" },
        { l: "82%", b: "15%", s: 3, d: "0.4s", dur: "6s" },
        { l: "55%", b: "20%", s: 1.5, d: "3s", dur: "7s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[var(--ember)] z-[3] pointer-events-none"
          style={{
            left: s.l, bottom: s.b, width: s.s, height: s.s,
            boxShadow: "0 0 8px 3px rgba(255,140,90,0.4)",
            animation: `sparkFloat ${s.dur} ${s.d} linear infinite`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
        {/* Tag — clip reveal */}
        <div
          className="flex items-center gap-4 mb-8 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.2s",
          }}
        >
          <div className="h-[1px] w-12 bg-[var(--forge)]" />
          <span className="font-display text-[10px] tracking-[0.4em] text-[var(--worn)] font-bold">
            ものづくり体験アトリエ — 岩手・一関
          </span>
        </div>

        {/* ── Headline — staggered reveal ── */}
        <h1>
          {/* Line 1 */}
          <span className="block overflow-hidden pb-2">
            <span
              className="block text-[clamp(2.8rem,7vw,8rem)] font-black leading-[1.05] tracking-tighter text-[var(--cream)] transition-all duration-[1.2s]"
              style={{
                transform: loaded ? "translateY(0)" : "translateY(110%)",
                transitionTimingFunction: "var(--ease-out-expo)",
                transitionDelay: "0.4s",
              }}
            >
              欲しければ、
            </span>
          </span>
          {/* Line 2 */}
          <span className="block overflow-hidden pb-2 -mt-2">
            <span
              className="block text-[clamp(2.8rem,7vw,8rem)] font-black leading-[1.05] tracking-tighter text-[var(--forge)] transition-all duration-[1.2s]"
              style={{
                transform: loaded ? "translateY(0)" : "translateY(110%)",
                transitionTimingFunction: "var(--ease-out-expo)",
                transitionDelay: "0.55s",
              }}
            >
              作る。
            </span>
          </span>
          {/* Line 3 */}
          <span className="block overflow-hidden pb-1 mt-3">
            <span
              className="block text-[clamp(1.4rem,3.5vw,3rem)] font-bold leading-[1.2] text-[var(--steel)] transition-all duration-[1.2s]"
              style={{
                transform: loaded ? "translateY(0)" : "translateY(110%)",
                transitionTimingFunction: "var(--ease-out-expo)",
                transitionDelay: "0.7s",
              }}
            >
              壊れたら、直す。
            </span>
          </span>
        </h1>

        {/* Descriptor — makes the facility type immediately clear */}
        <p
          className="mt-5 text-[var(--sand)] text-base md:text-lg font-medium tracking-wide transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.85s",
          }}
        >
          溶接・金属加工の体験施設
          <span className="inline-block mx-3 w-[1px] h-[14px] bg-[var(--steel)] align-middle" />
          <span className="text-[var(--ash)]">6歳からOK</span>
        </p>

        {/* Sub + CTA */}
        <div
          className="mt-6 md:mt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "1s",
          }}
        >
          <p className="text-[var(--ash)] text-sm leading-[2.2] max-w-[420px]">
            火花が散る。鉄が繋がる。形になる。<br />
            棚もピザ窯も、壊れた道具の修理も——<br />
            ぜんぶ、自分の手でやってみる場所。<br />
            はじめての人も、6歳からどうぞ。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 font-display text-xs font-bold tracking-[0.25em] text-[var(--cream)] border-b border-[var(--forge)] pb-3 hover:text-[var(--forge)] transition-colors duration-300"
          >
            体験を予約する
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Caution stripe ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] caution-stripe z-10" />

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "1.4s" }}
        role="presentation"
        aria-hidden="true"
      >
        <span className="font-display text-[8px] tracking-[0.4em] text-[var(--steel)]" style={{ writingMode: "vertical-rl" }}>
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-[var(--iron)] relative overflow-hidden">
          <div className="absolute top-0 w-full h-4 bg-[var(--forge)]" style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </div>

      {/* ── Rotating badge ── */}
      <div
        className="hidden xl:block absolute left-12 top-1/2 -translate-y-1/2 z-10 transition-all duration-[2s]"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "1.6s" }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="w-[90px] h-[90px] relative" style={{ animation: "spin-slow 25s linear infinite" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path id="cp" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="font-display" fill="var(--steel)" fontSize="7" fontWeight="700" letterSpacing="3.5">
              <textPath href="#cp">WELD ● FORGE ● CREATE ● REPAIR ●</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[var(--forge)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
