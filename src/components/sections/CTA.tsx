import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function CTA() {
  return (
    <section className="relative bg-[var(--black)] py-[var(--section-gap)] overflow-hidden">
      <div className="absolute inset-0 grid-texture" />

      {/* Giant watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display font-extrabold text-[35vw] text-stroke text-[var(--charcoal)]/30">
          GO
        </span>
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[350px] bg-[var(--forge)]/[0.03] rounded-full blur-[180px]" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal animation="reveal-up">
          <h2 className="text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-[var(--cream)] max-w-[800px]">
            やってみたいなら、<br />
            <span className="text-[var(--forge)]">動くだけ。</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="mt-8 text-[var(--ash)] text-sm leading-[2.2] max-w-[440px]">
            作りたいものがまだ決まってなくても大丈夫。まずは話してみませんか。
          </p>
        </ScrollReveal>

        <div className="mt-16 md:mt-24 grid sm:grid-cols-3 gap-5">
          {[
            { title: "クラスを見る", body: "溶接チャレンジ・クリエイティブ・マイデザイン・セルフリペア。4つのクラスの料金・内容を比較できます。", href: "/courses", label: "VIEW", external: false },
            { title: "気軽に相談する", body: "「何から始めればいい？」でもOK。気になることは何でもフォームからどうぞ。", href: "https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog", label: "CONTACT", external: true },
            { title: "体験を予約する", body: "やりたいことが決まったら、日程を押さえましょう。", href: "https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog", label: "RESERVE", external: true },
          ].map((c, i) => {
            const cardClass = "group block border border-[var(--iron)] bg-[var(--charcoal)] p-8 md:p-10 relative overflow-hidden transition-all duration-700 hover:border-[var(--forge)]/40 hover:-translate-y-2";
            const content = (
              <>
                <span className="font-display text-[9px] tracking-[0.4em] text-[var(--steel)] font-bold">{c.label}</span>
                <h3 className="text-xl md:text-2xl font-black text-[var(--cream)] mt-4 group-hover:text-[var(--forge)] transition-colors duration-500">{c.title}</h3>
                <p className="mt-3 text-[var(--ash)] text-sm leading-[2.1]">{c.body}</p>

                <div className="mt-8 flex items-center gap-2 text-[var(--steel)] group-hover:text-[var(--forge)] transition-colors duration-500">
                  <span className="font-display text-[10px] tracking-[0.25em] font-bold">{c.label}</span>
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--forge)] group-hover:w-full transition-all duration-700" />
              </>
            );
            return (
              <ScrollReveal key={i} delay={300 + i * 120} animation="fade-up">
                {c.external ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={cardClass}>{content}</a>
                ) : (
                  <Link href={c.href} className={cardClass}>{content}</Link>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
