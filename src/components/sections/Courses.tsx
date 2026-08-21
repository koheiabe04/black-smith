import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const courses = [
  {
    name: "溶接チャレンジ",
    en: "WELDING\nCHALLENGE",
    body: "溶接がはじめての方向け。道具の扱い方や安全の考え方を学びながら、実際に鉄をつなぐ体験を行います。",
    age: "6歳〜", time: "1h〜", price: "¥4,000〜",
    level: 1,
    image: "/images/courses/challenge.jpg",
    alt: "初心者向け溶接チャレンジクラスの体験風景",
  },
  {
    name: "クリエイティブ",
    en: "CREATIVE",
    body: "棚やアウトドア用品など、完成後も日常で使い続けることを前提とした製作に取り組むクラスです。",
    age: "12歳〜", time: "2h〜", price: "¥11,000〜",
    level: 2,
    image: "/images/courses/creative.jpg",
    alt: "実用品を製作するクリエイティブクラスの様子",
  },
  {
    name: "マイデザイン",
    en: "MY\nDESIGN",
    body: "自分で考えたアイデアをもとに、設計から製作まで。「こういう物が欲しい」を出発点に形にします。",
    age: "12歳〜", time: "5h〜", price: "¥50,000〜",
    level: 3,
    image: "/images/courses/mydesign.jpg",
    alt: "オリジナルデザインを形にするマイデザインクラス",
  },
  {
    name: "セルフリペア",
    en: "SELF\nREPAIR",
    body: "壊れた家具や道具を、もう一度使える状態に。「直して使い続けたい」という気持ちを応援します。",
    age: "15歳〜", time: "2h〜", price: "¥11,000〜",
    level: 2,
    image: "/images/courses/repair.jpg",
    alt: "壊れた金属製品を修復するセルフリペアクラス",
  },
];

function Level({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`w-5 h-[3px] ${i <= n ? "bg-[var(--forge)]" : "bg-[var(--iron)]"}`} />
      ))}
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative bg-[var(--soot)] py-[var(--section-gap)] overflow-hidden">
      <div className="absolute inset-0 grid-texture" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[var(--forge)]" />
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">COURSES</span>
          </div>
        </ScrollReveal>

        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <ScrollReveal animation="reveal-up" delay={100}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
              4つのクラス
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-display text-[11px] font-bold tracking-[0.2em] text-[var(--forge)] hover:text-[var(--ember)] transition-colors duration-300 link-slide shrink-0"
            >
              VIEW ALL COURSES
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* ── Cards: vertical on mobile, horizontal scroll on desktop ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {courses.map((c, i) => (
            <ScrollReveal key={i} delay={i * 100} animation="fade-up">
              <div className="group relative overflow-hidden border border-[var(--iron)] bg-[var(--charcoal)] hover:border-[var(--forge)]/30 transition-all duration-700">
                <div className="relative aspect-[16/10] bg-[var(--soot)] overflow-hidden">
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
                  <div className="absolute bottom-4 left-5 z-10">
                    <span className="font-display text-[2rem] font-extrabold text-white/[0.07] leading-[0.95] whitespace-pre-line">
                      {c.en}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black text-[var(--cream)] tracking-tight leading-tight">{c.name}</h3>
                    <span className="font-display text-xl font-extrabold text-[var(--forge)] shrink-0">{c.price}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Level n={c.level} />
                    <span className="font-display text-[9px] tracking-[0.3em] text-[var(--steel)]">LV.{c.level}</span>
                  </div>
                  <p className="mt-5 text-[var(--ash)] text-sm leading-[2.1]">{c.body}</p>
                  <div className="mt-6 pt-5 border-t border-[var(--iron)] flex gap-6">
                    <div>
                      <span className="font-display text-[8px] tracking-[0.3em] text-[var(--steel)] block">AGE</span>
                      <span className="text-[var(--sand)] text-sm mt-0.5 block">{c.age}</span>
                    </div>
                    <div>
                      <span className="font-display text-[8px] tracking-[0.3em] text-[var(--steel)] block">TIME</span>
                      <span className="text-[var(--sand)] text-sm mt-0.5 block">{c.time}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--forge)] group-hover:w-full transition-all duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1600px] mx-auto px-6 md:px-12">
        {courses.map((c, i) => (
          <ScrollReveal key={i} delay={i * 100} animation="fade-up">
            <div className="group relative overflow-hidden border border-[var(--iron)] bg-[var(--charcoal)] hover:border-[var(--forge)]/30 transition-all duration-700 h-full flex flex-col">
              <div className="relative aspect-[16/10] bg-[var(--soot)] overflow-hidden">
                <Image src={c.image} alt={c.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                <div className="absolute bottom-4 left-5 z-10">
                  <span className="font-display text-[2rem] lg:text-[2.5rem] font-extrabold text-white/[0.07] leading-[0.95] whitespace-pre-line">
                    {c.en}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[var(--forge)]/0 group-hover:bg-[var(--forge)]/[0.08] transition-colors duration-700" />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl lg:text-2xl font-black text-[var(--cream)] tracking-tight leading-tight">{c.name}</h3>
                  <span className="font-display text-xl lg:text-2xl font-extrabold text-[var(--forge)] shrink-0">{c.price}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Level n={c.level} />
                  <span className="font-display text-[9px] tracking-[0.3em] text-[var(--steel)]">LV.{c.level}</span>
                </div>
                <p className="mt-5 text-[var(--ash)] text-sm leading-[2.1] flex-1">{c.body}</p>
                <div className="mt-6 pt-5 border-t border-[var(--iron)] flex gap-6">
                  <div>
                    <span className="font-display text-[8px] tracking-[0.3em] text-[var(--steel)] block">AGE</span>
                    <span className="text-[var(--sand)] text-sm mt-0.5 block">{c.age}</span>
                  </div>
                  <div>
                    <span className="font-display text-[8px] tracking-[0.3em] text-[var(--steel)] block">TIME</span>
                    <span className="text-[var(--sand)] text-sm mt-0.5 block">{c.time}</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--forge)] group-hover:w-full transition-all duration-700" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
