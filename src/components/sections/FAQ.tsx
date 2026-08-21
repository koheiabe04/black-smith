"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  { q: "年齢制限はありますか？", a: "クラスや制作内容によって目安はありますが、一律で年齢を区切っているわけではありません。保護者同伴で参加できる内容も用意しています。" },
  { q: "初心者でも参加できますか？", a: "参加者の多くが未経験です。安全説明やサポートを受けながら進めます。「やってみたい」という気持ちがあれば十分です。" },
  { q: "危なくありませんか？", a: "作業前に必ず安全説明を行い、保護具を着用して体験します。スタッフが常にサポートし、安全を最優先に進めています。" },
  { q: "料金はどのように決まりますか？", a: "クラス内容や制作物、所要時間によって異なります。事前に金額を案内し、当日に追加費用が発生することはありません。" },
  { q: "子どもと一緒に参加できますか？", a: "親子で参加できるクラスもあります。年齢や内容によって対応が異なるため、事前にご相談ください。" },
  { q: "服装や持ち物は？", a: "動きやすく汚れてもよい服装で。保護具や工具は、すべて施設で用意しています。" },
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
