import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事｜Black Smith",
  description:
    "Black Smithからのお知らせ記事。溶接・鉄の加工体験に関する最新情報をお届けします。",
};

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-white)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[800px] mx-auto px-6">
        <nav className="text-xs text-[var(--smoke)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/news" className="hover:text-[var(--forge)] transition-colors">
            最新情報
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">記事</span>
        </nav>

        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-[var(--smoke)] text-sm">記事が見つかりません</p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--forge)] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              記事一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
