import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const features = [
  {
    num: "01",
    title: "持って帰って、\n毎日使う",
    body: "棚、ラック、焚き火台。作ったものがそのまま暮らしの道具になる。それが一番うれしい。",
    image: "/images/features/01-practical.jpg",
  },
  {
    num: "02",
    title: "来るたびに、\nできることが増える",
    body: "最初は一本の溶接から。気づけば棚を組み、いつかオリジナルの一点ものを作れるように。",
    image: "/images/features/02-stepup.jpg",
  },
  {
    num: "03",
    title: "頭の中のアイデアを、\n鉄で形にする",
    body: "「こういうのが欲しいんだけど」——その一言から始まる。設計も製作も、スタッフと一緒に。",
    image: "/images/features/03-mydesign.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden">
      {/* ── Section intro — editorial layout ── */}
      <div className="relative bg-[var(--black)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-24">
          {/* Overline */}
          <ScrollReveal animation="fade-up">
            <span className="font-display text-[10px] tracking-[0.5em] text-[var(--forge)] font-bold uppercase">
              Features
            </span>
          </ScrollReveal>

          {/* Main heading — large, editorial */}
          <div className="mt-6 md:mt-8">
            <ScrollReveal animation="reveal-up" delay={100}>
              <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-[var(--cream)]">
                ここでしか
                <br />
                できない<span className="text-[var(--forge)]">こと</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Description — offset right */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="md:ml-auto md:max-w-[420px] mt-10 md:mt-[-2rem]">
              <p className="text-[var(--ash)] text-sm leading-[2.2] border-l-2 border-[var(--forge)]/30 pl-5">
                作ったものは飾りじゃない。家に帰って、毎日使うもの。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Feature Cards — staggered grid ── */}
      <div className="bg-[var(--black)] pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-3 md:gap-5">
            {features.map((f, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={i * 120}
              >
                <div
                  className={`group relative overflow-hidden h-full ${
                    i === 1 ? "md:translate-y-12" : ""
                  }`}
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title.replace("\n", " ")}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.8s] ease-[var(--ease-out-expo)] group-hover:scale-105"
                    />
                    {/* Dark overlay — stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-[var(--black)]/60 to-transparent" />
                    {/* Subtle top overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--black)]/30 to-transparent h-1/3" />

                    {/* Accent line — top */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--forge)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[var(--ease-out-expo)] origin-left" />

                    {/* Big number watermark */}
                    <span className="absolute top-4 right-5 font-display text-[6rem] md:text-[7rem] font-extrabold text-white/[0.04] leading-none pointer-events-none select-none">
                      {f.num}
                    </span>

                    {/* Text content — pinned to bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="inline-block font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold mb-3">
                        {f.num}
                      </span>
                      <h3 className="text-xl md:text-[1.6rem] font-black text-[var(--cream)] leading-[1.35] tracking-tight whitespace-pre-line">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-[var(--sand)]/70 text-[13px] leading-[1.9] max-h-32 md:max-h-0 md:overflow-hidden md:group-hover:max-h-32 transition-[max-height] duration-700 ease-[var(--ease-out-expo)]">
                        {f.body}
                      </p>
                      <div className="w-8 h-[2px] bg-[var(--forge)]/30 mt-5 group-hover:w-14 group-hover:bg-[var(--forge)] transition-all duration-700 ease-[var(--ease-out-expo)]" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pull quote ── */}
      <div className="bg-[var(--black)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-[var(--section-gap)]">
          <ScrollReveal animation="scale-in" delay={100}>
            <div className="relative">
              <div className="bg-[var(--forge)] p-10 md:p-16 relative overflow-hidden">
                {/* Diagonal stripe accent */}
                <div className="absolute top-0 right-0 w-[200px] h-full opacity-10">
                  <div className="w-full h-full caution-stripe" />
                </div>

                <div className="relative z-10 md:flex md:items-center md:gap-12">
                  <span className="font-display text-[5rem] md:text-[8rem] text-white/10 leading-none shrink-0 block">&ldquo;</span>
                  <div className="-mt-8 md:mt-0">
                    <p className="text-white text-lg md:text-xl leading-[2] font-medium">
                      自分の手で作るって、こんなに楽しかったのか。<br className="hidden md:inline" />
                      知らなかった人に届けたい。<br className="hidden md:inline" />
                      忘れてた人に、思い出してほしい。
                    </p>
                    <span className="font-display text-[10px] tracking-[0.4em] text-white/30 mt-6 block font-bold">— BLACK SMITH</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
