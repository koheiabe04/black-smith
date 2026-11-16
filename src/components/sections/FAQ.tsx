"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  { q: "溶接体験は何歳から参加できますか？", a: "溶接チャレンジは6歳から参加できます。小学生以下のお子様は保護者同伴が必要です。クリエイティブ・マイデザインは12歳から、セルフリペアは15歳から。迷ったら気軽にご相談ください。" },
  { q: "溶接がまったくの初心者でも大丈夫ですか？", a: "はい、参加者のほとんどが溶接未経験です。道具の持ち方、火の扱い方から丁寧にお伝えします。安全講習のあと、練習時間もあるので安心してお越しください。" },
  { q: "溶接体験は危なくないですか？安全対策は？", a: "溶接マスク・革手袋・エプロンなどの保護具はすべてこちらで用意。体験前に必ず安全講習を行い、スタッフが常にそばでサポートします。お子様の参加も安心です。" },
  { q: "溶接体験の料金はいくらですか？", a: "溶接チャレンジは1枠¥12,000（最大4名まで。4名なら1人あたり¥3,000）。クリエイティブ・セルフリペアは¥11,000〜、マイデザインは¥50,000〜。制作物のサイズにより変動しますが、必ず事前にお伝えします。" },
  { q: "親子で溶接体験に参加できますか？", a: "はい、親子での参加大歓迎です。溶接チャレンジは6歳から参加OK。1枠¥12,000で最大4名まで一緒に体験できるので、ご家族でのご利用にぴったりです。" },
  { q: "服装や持ち物は何が必要ですか？", a: "汚れてもいい長袖・長ズボンと運動靴で来てください。溶接マスクや手袋などの保護具はすべてこちらで用意しています。手ぶらでOKです。" },
  { q: "予約方法を教えてください。", a: "完全予約制です。お問い合わせフォームまたはメール（blacksmith.iwate@gmail.com）で、希望の日程・クラス・人数をお知らせください。折り返しご連絡いたします。" },
  { q: "溶接体験ではどんなものが作れますか？", a: "溶接チャレンジではアイアンフックやミニスタンド、クリエイティブでは棚・焚き火台・プランターラック、マイデザインでは完全オーダーメイドの家具や看板まで。作ったものはすべてお持ち帰りいただけます。" },
  { q: "溶接に資格は必要ですか？", a: "体験には資格は一切不要です。Black Smithでは安全講習を行ったうえで、スタッフのサポートのもと体験していただくので、どなたでも安心して参加できます。" },
  { q: "一関市・平泉町の学校やPTAは無料で利用できますか？", a: "はい、一関市・平泉町内の学校行事・PTA行事・民区行事でのご利用は無料です。地域のものづくり教育に貢献したいという思いで、この枠をご用意しています。お気軽にお問い合わせください。" },
];

function Item({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--iron)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-6 py-7 md:py-8 text-left group" aria-expanded={open}>
        <span className="font-display text-sm font-bold text-[var(--forge)]/40 shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
        <span className="flex-1 text-base md:text-lg font-bold text-[var(--cream)] group-hover:text-[var(--forge)] transition-colors duration-500">{faq.q}</span>
        <span className={`w-8 h-8 border border-[var(--iron)] flex items-center justify-center shrink-0 transition-all duration-500 ${open ? "bg-[var(--forge)] border-[var(--forge)] rotate-45" : "group-hover:border-[var(--forge)]/40"}`}>
          <svg className={`w-3 h-3 ${open ? "text-white" : "text-[var(--ash)]"} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-600 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-8 pl-14 text-[var(--ash)] text-sm leading-[2.3] max-w-[600px]">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[var(--charcoal)] py-[var(--section-gap)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[var(--forge)]" />
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">FAQ</span>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="reveal-up" delay={100}>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-16 md:mb-20">
            よくある質問
          </h2>
        </ScrollReveal>

        <div>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60} animation="fade-up">
              <Item faq={faq} i={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
