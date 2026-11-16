import ScrollReveal from "../ScrollReveal";

const info = [
  { en: "NAME", label: "施設名", value: "Black Smith" },
  { en: "ADDRESS", label: "所在地", value: "〒021-0902\n岩手県一関市萩荘霜後241" },
  { en: "HOURS", label: "営業時間", value: "平日 / 09:00〜16:00\n（最終受付15:00 / 完全予約制）" },
  { en: "ACCESS", label: "交通案内", value: "JR東北本線・大船渡線「一ノ関駅」より車で約10分\nお車でお越しの方：駐車場あり" },
];

export default function Access() {
  return (
    <section id="access" className="relative bg-[var(--soot)] py-[var(--section-gap)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[var(--forge)]" />
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">ACCESS</span>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="reveal-up" delay={100}>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
            アクセス
          </h2>
        </ScrollReveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 [&>*]:min-w-0">
          <ScrollReveal animation="fade-up" delay={200}>
            <dl>
              {info.map((item, i) => (
                <div key={i} className={`py-6 grid grid-cols-[96px_1fr] md:grid-cols-[120px_1fr] gap-4 ${i > 0 ? "border-t border-[var(--iron)]" : ""}`}>
                  <dt>
                    <span className="font-display text-[10px] tracking-[0.3em] text-[var(--steel)] block">{item.en}</span>
                    <span className="text-[var(--ash)] text-sm">{item.label}</span>
                  </dt>
                  <dd className="text-[var(--cream)] text-sm whitespace-pre-line leading-[1.9]">{item.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://maps.google.com/?q=岩手県一関市萩荘霜後241"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 py-3 font-display text-[12px] tracking-[0.2em] text-[var(--forge)] font-bold hover:text-[var(--ember)] transition-colors group"
            >
              GOOGLE MAPS
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px] relative border border-[var(--iron)] overflow-hidden">
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--forge)]/20 z-20" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--forge)]/20 z-20" />
              <iframe
                src="https://maps.google.com/maps?q=%E5%B2%A9%E6%89%8B%E7%9C%8C%E4%B8%80%E9%96%A2%E5%B8%82%E8%90%A9%E8%8D%98%E9%9C%9C%E5%BE%8C241&t=m&z=15&output=embed&hl=ja"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Black Smith 所在地"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
