import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const steps = [
  { num: "01", title: "申込・相談", body: "やってみたいことを伝えるだけ。目的や経験に合わせてクラスを案内します。", cta: true },
  { num: "02", title: "事前案内", body: "当日の流れや服装の目安をお送りします。特別な準備は不要。" },
  { num: "03", title: "来場・受付", body: "予約時間に施設へ。受付後、スタッフが流れを案内します。" },
  { num: "04", title: "体験・製作", body: "簡単な作業から始め、感覚に慣れながら進めます。スタッフが常にサポート。" },
  { num: "05", title: "完成・確認", body: "仕上がりを確認し、使い方や注意点を案内します。" },
  { num: "06", title: "振り返り", body: "次にできることを案内。無理な案内は行いません。" },
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
                はじめてでも大丈夫。申込みから完成まで、迷わず進めるように。
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
