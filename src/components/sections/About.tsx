import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import Counter from "../Counter";

const stats = [
  { end: 4, suffix: "", label: "クラス", en: "CLASSES" },
  { end: 6, suffix: "歳", label: "から参加OK", en: "MIN AGE" },
  { end: 4, suffix: "名", label: "1枠の定員（貸切）", en: "CAPACITY" },
];

const principles = [
  { n: "01", t: "触ったことがなくても、大丈夫" },
  { n: "02", t: "やるほどに、できることが増えていく" },
  { n: "03", t: "何を作るかは、あなた次第" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--soot)] overflow-hidden">
      <div className="absolute inset-0 grid-texture" />

      {/* ── Main content: sticky image + scrolling text ── */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 pt-[var(--section-gap)]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left: Sticky image — NO ScrollReveal wrapper so sticky works */}
          <div className="relative">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  ABOUT
                </span>
              </div>
            </ScrollReveal>

            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src="/images/about/atelier.jpg"
                  alt="Black Smith アトリエ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--soot)]/40 to-transparent" />
                <span aria-hidden="true" className="absolute -bottom-4 -right-2 font-display font-extrabold text-[8rem] md:text-[10rem] text-stroke text-white/[0.06] leading-none pointer-events-none select-none">
                  AB
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:pt-16">
            <ScrollReveal animation="reveal-up" delay={200}>
              <h2 className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-black leading-[1.15] tracking-tight text-[var(--cream)]">
                欲しければ、
                <span className="text-[var(--forge)]">作る</span>。
                <br />
                壊れたら、
                <span className="text-[var(--forge)]">直す</span>。
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="mt-10 text-[var(--ash)] text-[15px] leading-[2.3] max-w-[500px]">
                岩手県一関市の、溶接と金属加工のアトリエ。棚やストーブみたいな暮らしの道具から、壊れたものの修理まで。プロの設備を使って、自分の手で作って、持って帰る。それがBlack Smithです。
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <p className="mt-6 text-[var(--worn)] text-sm leading-[2] border-l-2 border-[var(--forge)]/30 pl-5">
                キットを組み立てる場所じゃない。何を作るかは、あなたが決める。
              </p>
            </ScrollReveal>

            {/* Principles */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="mt-14">
                {principles.map((item, i) => (
                  <div
                    key={item.n}
                    className={`group/item flex items-center gap-6 py-5 ${
                      i < principles.length - 1
                        ? "border-b border-[var(--iron)]/50"
                        : ""
                    }`}
                  >
                    <span className="font-display text-[11px] tracking-[0.3em] text-[var(--forge)]/50 group-hover/item:text-[var(--forge)] transition-colors duration-500 shrink-0">
                      {item.n}
                    </span>
                    <span className="text-[var(--cream)] text-[15px] font-bold leading-snug group-hover/item:translate-x-2 transition-transform duration-500">
                      {item.t}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats — inline with right column */}
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-[var(--iron)]/40">
                {stats.map((d, i) => (
                  <div key={i}>
                    <span className="font-display text-[10px] tracking-[0.3em] text-[var(--steel)] block">
                      {d.en}
                    </span>
                    <Counter
                      end={d.end}
                      suffix={d.suffix}
                      className="font-display text-[2.5rem] md:text-[3rem] font-extrabold text-[var(--cream)] block mt-2 leading-none"
                    />
                    <span className="text-[var(--worn)] text-xs mt-2 block">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Internal link to courses */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 pb-8">
        <ScrollReveal animation="fade-up" delay={700}>
          <Link
            href="/courses"
            className="group inline-flex items-center gap-3 pt-3 font-display text-xs font-bold tracking-[0.2em] text-[var(--cream)] border-b border-[var(--forge)]/40 pb-3 hover:text-[var(--forge)] hover:border-[var(--forge)] transition-all duration-300"
          >
            クラス・料金を見る
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>

      {/* Bottom spacing */}
      <div className="h-[var(--section-gap)]" />
    </section>
  );
}
