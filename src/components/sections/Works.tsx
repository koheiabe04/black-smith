import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

// 写真がそろっている作品だけを掲載（囲炉裏・ピザ窯・薪ストーブは写真の用意ができたら追加）
const works = [
  { id: "pull-up-bar", title: "懸垂台", en: "PULL-UP BAR", image: "/images/works/01.png", alt: "溶接で製作した自作の懸垂台" },
  { id: "low-table", title: "ローテーブル", en: "LOW TABLE", image: "/images/works/05.png", alt: "アイアン脚のローテーブル" },
  { id: "shelf", title: "シェルフ", en: "SHELF", image: "/images/works/06.jpg", alt: "アイアンシェルフ" },
];

/*
 * Bento grid areas (desktop):
 *   a a b
 *   a a c
 */
const gridAreaMap = ["a", "b", "c"] as const;

export default function Works() {
  return (
    <section id="works" className="relative bg-[var(--soot)] py-[var(--section-gap)] overflow-hidden">
      <div className="absolute inset-0 grid-texture" />

      {/* Giant watermark */}
      <div aria-hidden="true" className="absolute top-[10%] -right-[5%] pointer-events-none select-none">
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

        {/* ── Mobile: 2-col grid ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {works.map((w, i) => (
            <ScrollReveal key={w.id} delay={i * 80} animation="fade-up" className={i === 0 ? "col-span-2" : ""}>
              <div className="group block">
                <div className={`relative ${i === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} bg-[var(--charcoal)] overflow-hidden border border-[var(--iron)] group-hover:border-[var(--forge)]/40 transition-colors duration-500`}>
                  <Image src={w.image} alt={w.alt} fill sizes={i === 0 ? "100vw" : "50vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="font-display text-[11px] tracking-[0.2em] text-[var(--cream)]/80 font-bold">{w.en}</span>
                    <h3 className="text-sm font-bold text-[var(--cream)] mt-1">{w.title}</h3>
                  </div>
                  <span className="absolute top-3 right-3 font-display text-sm font-extrabold text-[var(--cream)]/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Desktop: Bento grid ── */}
        <div
          className="hidden md:grid gap-4 lg:gap-5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, minmax(280px, 1fr))",
            gridTemplateAreas: `
              "a a b"
              "a a c"
            `,
          }}
        >
          {works.map((w, i) => {
            const area = gridAreaMap[i];
            const isLarge = area === "a";
            return (
              <ScrollReveal
                key={w.id}
                delay={i * 100}
                animation="fade-up"
                className="min-h-0"
                style={{ gridArea: area }}
              >
                <div className="group relative block w-full h-full overflow-hidden border border-[var(--iron)] hover:border-[var(--forge)]/40 transition-colors duration-500 bg-[var(--charcoal)]">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes={isLarge ? "(max-width: 1600px) 66vw, 1066px" : "(max-width: 1600px) 33vw, 533px"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forge)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Bottom gradient + text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/70 via-[var(--black)]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <span className="font-display text-[11px] tracking-[0.25em] text-[var(--cream)]/80 font-bold">{w.en}</span>
                    <h3 className={`font-bold text-[var(--cream)] mt-1 group-hover:text-[var(--forge)] transition-colors duration-500 ${isLarge ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}`}>
                      {w.title}
                    </h3>
                  </div>

                  {/* Number */}
                  <span className={`absolute top-4 right-5 font-display font-extrabold text-[var(--cream)]/8 ${isLarge ? "text-3xl" : "text-lg"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--cream)]/10 group-hover:border-[var(--forge)]/50 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--cream)]/10 group-hover:border-[var(--forge)]/50 transition-colors duration-500" />

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
