import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import ParallaxImage from "../ParallaxImage";

const works = [
  { title: "懸垂台", en: "PULL-UP BAR", tall: true, image: "/images/works/01.png", alt: "溶接で製作した自作の懸垂台" },
  { title: "囲炉裏", en: "IRORI", tall: false, image: "/images/works/02.png", alt: "鉄を加工して作った囲炉裏" },
  { title: "ピザ窯", en: "PIZZA OVEN", tall: true, image: "/images/works/03.png", alt: "手作りのピザ窯" },
  { title: "ローテーブル", en: "LOW TABLE", tall: false, image: "/images/works/05.png", alt: "アイアン脚のローテーブル" },
  { title: "薪ストーブ", en: "WOOD STOVE", tall: true, image: "/images/works/04.png", alt: "溶接で製作した薪ストーブ" },
  { title: "シェルフ", en: "SHELF", tall: false, image: "/images/works/06.jpg", alt: "アイアンシェルフ" },
];

export default function Works() {
  return (
    <section id="works" className="relative bg-[var(--soot)] py-[var(--section-gap)] overflow-hidden">
      <div className="absolute inset-0 grid-texture" />

      {/* Giant watermark */}
      <div className="absolute top-[10%] -right-[5%] pointer-events-none select-none">
        <ScrollReveal animation="fade-in" delay={300}>
          <span className="font-display font-extrabold text-[18vw] text-stroke text-[var(--charcoal)]/40 leading-none">
            WK
          </span>
        </ScrollReveal>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-14 md:mb-20">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[var(--forge)]" />
              <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">WORKS</span>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="reveal-up" delay={100}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
              製作事例
            </h2>
          </ScrollReveal>
        </div>

        {/* ── Mobile: vertical grid ── */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {works.map((w, i) => (
            <ScrollReveal key={i} delay={i * 80} animation="fade-up">
              <div className="group">
                <div className="relative aspect-[3/4] bg-[var(--soot)] overflow-hidden border border-[var(--iron)]">
                  <Image src={w.image} alt={w.alt} fill sizes="50vw" className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[var(--black)]/90 to-transparent">
                    <span className="font-display text-[9px] tracking-[0.25em] text-[var(--cream)] font-bold">{w.en}</span>
                  </div>
                  <span className="absolute top-3 right-3 font-display text-sm font-extrabold text-[var(--steel)]/20">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-[var(--cream)]">{w.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Desktop: horizontal scroll ── */}
        <div className="hidden md:block relative">
          {/* Scroll hint */}
          <div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-[var(--soot)] to-transparent z-10 pointer-events-none flex items-center justify-end pr-4">
            <div className="flex items-center gap-2 text-[var(--steel)]">
              <span className="font-display text-[9px] tracking-[0.3em] font-bold">SCROLL</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-12 snap-x snap-mandatory items-end cursor-grab" style={{ userSelect: "none" }}>
          {works.map((w, i) => (
            <ScrollReveal key={i} delay={i * 80} animation="fade-up" className="flex-shrink-0 snap-start">
              <div className="group" style={{ width: w.tall ? "340px" : "290px" }}>
                <ParallaxImage
                  className="border border-[var(--iron)] group-hover:border-[var(--forge)]/30 transition-colors duration-700"
                  speed={0.08}
                >
                  <div
                    className="relative bg-[var(--soot)]"
                    style={{ aspectRatio: w.tall ? "3/4" : "4/3" }}
                  >
                    <Image src={w.image} alt={w.alt} fill sizes="340px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--forge)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--steel)]/20 group-hover:border-[var(--forge)]/50 transition-colors duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--steel)]/20 group-hover:border-[var(--forge)]/50 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--black)]/90 to-transparent">
                      <span className="font-display text-[10px] tracking-[0.25em] text-[var(--cream)] font-bold">{w.en}</span>
                    </div>
                    <span className="absolute top-4 right-5 font-display text-lg font-extrabold text-[var(--steel)]/20">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </ParallaxImage>
                <h3 className="mt-5 text-base font-bold text-[var(--cream)] group-hover:text-[var(--forge)] transition-colors duration-500">{w.title}</h3>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
