import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜Black Smith",
  description:
    "溶接・鉄の加工体験アトリエ Black Smith へのお問い合わせ・ご予約はこちらから。",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?embedded=true";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[var(--soot)] pt-32 pb-20">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[var(--forge)]" />
          <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
            CONTACT
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-[var(--cream)] tracking-tight">
          お問い合わせ・ご予約
        </h1>

        <p className="mt-6 text-sm text-[var(--ash)] leading-[2]">
          体験のご予約・ご相談は下記フォームよりお気軽にどうぞ。
          <br />
          内容を確認の上、折り返しご連絡いたします。
        </p>

        <div className="mt-10 border border-[var(--iron)] bg-white relative overflow-hidden">
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--forge)]/20 z-10" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--forge)]/20 z-10" />
          <iframe
            src={FORM_URL}
            className="w-full border-0"
            style={{ minHeight: 900 }}
            title="お問い合わせフォーム"
            loading="lazy"
          />
        </div>

        <div className="mt-10 text-sm text-[var(--steel)] space-y-2">
          <p>
            <span className="font-display text-[10px] tracking-[0.2em] text-[var(--ash)] font-bold">
              EMAIL
            </span>
            <br />
            <a
              href="mailto:blacksmith.iwate@gmail.com"
              className="text-[var(--forge)] hover:text-[var(--ember)] transition-colors"
            >
              blacksmith.iwate@gmail.com
            </a>
          </p>
          <p>
            <span className="font-display text-[10px] tracking-[0.2em] text-[var(--ash)] font-bold">
              受付時間
            </span>
            <br />
            平日 09:00〜16:00（土日祝を除く）
          </p>
        </div>
      </div>
    </section>
  );
}
