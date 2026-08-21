import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function NewsSection() {
  return (
    <section id="news" className="relative bg-[var(--charcoal)] py-[var(--section-gap)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div>
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">NEWS</span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-up" delay={100}>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cream)] tracking-tight">最新情報</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <Link href="/news" className="inline-flex items-center gap-2 mt-5 font-display text-[11px] tracking-[0.2em] text-[var(--forge)] font-bold hover:text-[var(--ember)] transition-colors group">
                ALL ARTICLES
                <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center min-h-[240px] border border-dashed border-[var(--iron)] relative">
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[var(--steel)]/15" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[var(--steel)]/15" />
              <div className="text-center">
                <span className="font-display text-[10px] tracking-[0.5em] text-[var(--steel)] font-bold block">NO ARTICLES YET</span>
                <p className="text-[var(--worn)] text-sm mt-3">まだ記事が投稿されていません</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
