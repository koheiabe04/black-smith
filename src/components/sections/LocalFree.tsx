"use client";

import { useEffect, useRef, useState } from "react";

export default function LocalFree() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--soot)] py-20 md:py-28"
    >
      {/* Decorative top caution stripe */}
      <div className="absolute top-0 left-0 right-0 h-[5px] caution-stripe z-10" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--forge)]/5 blur-[120px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
        {/* Badge */}
        <div
          className="flex justify-center mb-8 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--forge)]/40 bg-[var(--forge)]/10 text-[var(--ember)] font-display text-[11px] tracking-[0.3em] font-bold">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            COMMUNITY
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-center transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.15s",
          }}
        >
          <span className="block text-[clamp(1.6rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-[var(--cream)]">
            一関市・平泉町の
          </span>
          <span className="block text-[clamp(1.6rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-[var(--forge)]">
            地域利用は無料です
          </span>
        </h2>

        {/* Divider */}
        <div
          className="flex justify-center my-8 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: "0.3s",
          }}
        >
          <div className="h-[1px] w-16 bg-[var(--forge)]/50" />
        </div>

        {/* Body text */}
        <div
          className="space-y-6 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.35s",
          }}
        >
          <p className="text-[var(--sand)] text-sm md:text-base leading-[2.2] text-center">
            地域の子どもたちや皆さんに、
            <br className="hidden sm:block" />
            「自分の手で作るって、こんなに面白いんだ」
            <br className="hidden sm:block" />
            と感じてもらえる機会を増やしたい。
          </p>

          {/* Free usage highlight card */}
          <div className="relative rounded-lg border border-[var(--iron)] bg-[var(--charcoal)] p-6 md:p-8">
            <div className="absolute top-0 left-6 md:left-8 w-12 h-[3px] bg-[var(--forge)]" />
            <p className="text-[var(--cream)] text-sm md:text-base leading-[2.2] font-medium text-center">
              一関市・平泉町内の<br className="sm:hidden" />
              <span className="text-[var(--forge)] font-bold">学校行事・PTA行事・民区行事</span>での
              <br />
              Black Smithのご利用は<span className="text-[var(--forge)] font-bold">無料</span>です。
            </p>
          </div>

          <p className="text-[var(--ash)] text-sm md:text-base leading-[2.2] text-center">
            体験学習、親子行事、地域の交流イベント——
            <br className="hidden sm:block" />
            いろんな場面で使ってもらえたらうれしいです。
          </p>

          {/* Questions */}
          <div className="flex flex-col items-center gap-2 py-4">
            {[
              "「こんなことはできる？」",
              "「この人数でも利用できる？」",
            ].map((q, i) => (
              <span
                key={i}
                className="text-[var(--cream)] text-sm md:text-base font-medium"
              >
                {q}
              </span>
            ))}
            <p className="text-[var(--sand)] text-sm md:text-base mt-1">
              といった段階でもお気軽にご相談ください。
            </p>
          </div>

          {/* Notes */}
          <div className="flex flex-col items-center gap-1.5 pt-2">
            <p className="text-[var(--worn)] text-xs md:text-sm">
              ※ご利用には事前のお申し込み・日程調整が必要です。
            </p>
            <p className="text-[var(--worn)] text-xs md:text-sm">
              ※実施内容や参加人数については事前にご相談ください。
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-[var(--forge)] hover:bg-[var(--forge-deep)] text-[var(--white)] font-display text-xs font-bold tracking-[0.2em] transition-all duration-300"
            >
              お問い合わせ・ご相談はこちら
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom caution stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] caution-stripe z-10" />
    </section>
  );
}
