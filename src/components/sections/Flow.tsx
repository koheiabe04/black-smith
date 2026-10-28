import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const steps = [
  { num: "01", title: "まずは相談", body: "「こんなの作りたい」「溶接やってみたい」——ざっくりでOK。あなたに合うクラスを一緒に探します。", cta: true },
  { num: "02", title: "事前の案内が届く", body: "当日の流れと服装の目安をお送りします。手ぶらで来てもらって大丈夫。" },
  { num: "03", title: "来場・受付", body: "予約の時間にアトリエへ。着いたらスタッフが案内するので、迷うことはありません。" },
  { num: "04", title: "いよいよ製作", body: "最初はかんたんな作業から。感覚をつかみながら進めます。困ったらすぐそばにスタッフがいます。" },
  { num: "05", title: "完成", body: "できあがったら、使い方やお手入れのコツをお伝えして、お持ち帰り。" },
  { num: "06", title: "次はどうする？", body: "「次はこんなの作りたい」があれば、また来てください。押し売りはしません。" },
];

export default function Flow() {
  return (
    <section id="flow" className="relative bg-[var(--black)] py-[var(--section-gap)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[var(--forge)]" />
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">FLOW</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <ScrollReveal animation="reveal-up" delay={100}>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
                体験の流れ
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-8 text-[var(--ash)] text-sm leading-[2.3]">
                はじめてでも心配いりません。申し込みから完成まで、一本道です。
              </p>
            </ScrollReveal>
          </div>

          {/* Steps */}
          <div>
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80} animation="fade-up">
                <div className={`flex gap-6 md:gap-10 py-8 md:py-10 ${i < steps.length - 1 ? "border-b border-[var(--iron)]" : ""} group`}>
                  {/* Number — big, animated on hover */}
                  <div className="relative shrink-0 w-14 md:w-20">
                    <span className="font-display text-3xl md:text-5xl font-extrabold text-stroke text-[var(--iron)] group-hover:text-[var(--forge)] transition-all duration-700 block leading-none">
                      {s.num}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-black text-[var(--cream)] group-hover:text-[var(--forge)] transition-colors duration-500">{s.title}</h3>
                    <p className="mt-3 text-[var(--ash)] text-sm leading-[2.2]">{s.body}</p>
                    {s.cta && (
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 mt-5 font-display text-[11px] font-bold tracking-[0.2em] text-[var(--forge)] border-b border-[var(--forge)]/30 pb-2 hover:border-[var(--forge)] transition-colors duration-300 group/cta"
                      >
                        CONTACT
                        <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
