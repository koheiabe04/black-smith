import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新情報｜Black Smith",
  description:
    "Black Smithの最新情報・お知らせ。岩手県一関市の溶接・鉄の加工体験アトリエからイベントやクラスの更新情報をお届けします。",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "最新情報｜Black Smith",
    description:
      "Black Smithの最新情報・お知らせ。イベントやクラスの更新情報をお届けします。",
    url: "https://black-smith.jp/news",
    images: [
      {
        url: "https://black-smith.jp/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Black Smith 最新情報",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[var(--soot)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[1000px] mx-auto px-6">
        <nav className="text-xs text-[var(--steel)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">最新情報</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[var(--forge)]" />
          <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">NEWS</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)]">
          最新情報
        </h1>

        <div className="mt-12 h-[1px] bg-[var(--iron)]" />

        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-12 h-12 border border-[var(--iron)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--steel)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <p className="text-[var(--ash)] text-sm">
            記事を準備中です
          </p>
        </div>
      </div>
    </div>
  );
}
