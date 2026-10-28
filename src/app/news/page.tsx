import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "../../lib/articles";

export const metadata: Metadata = {
  title: "コラム・最新情報｜溶接体験 Black Smith｜岩手県一関市",
  description:
    "溶接体験のコツ、初心者ガイド、親子体験レポートなど。岩手県一関市の溶接アトリエ Black Smith が、ものづくりに役立つ情報をお届けします。",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "コラム・最新情報｜溶接体験 Black Smith",
    description:
      "溶接体験のコツ、初心者ガイド、親子体験レポートなど。ものづくりに役立つ情報をお届けします。",
    url: "https://black-smith.jp/news",
    images: [
      {
        url: "https://black-smith.jp/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Black Smith コラム・最新情報",
      },
    ],
  },
};

const categoryLabel: Record<string, string> = {
  column: "コラム",
  news: "お知らせ",
  report: "体験レポート",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://black-smith.jp" },
    { "@type": "ListItem", position: 2, name: "コラム・最新情報", item: "https://black-smith.jp/news" },
  ],
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[var(--soot)] pt-32 pb-20 md:pt-40 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-[1000px] mx-auto px-6">
        <nav className="text-xs text-[var(--steel)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">コラム・最新情報</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[var(--forge)]" />
          <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
            NEWS &amp; COLUMN
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)]">
          コラム・最新情報
        </h1>

        <div className="mt-12 h-[1px] bg-[var(--iron)]" />

        {articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-12 h-12 border border-[var(--iron)] flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--steel)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <p className="text-[var(--ash)] text-sm">記事を準備中です</p>
          </div>
        ) : (
          <div className="divide-y divide-[var(--iron)]">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group block py-8 md:py-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="font-display text-xs text-[var(--steel)] tracking-wider">
                    {article.date}
                  </time>
                  <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider border border-[var(--forge)]/30 text-[var(--forge)]">
                    {categoryLabel[article.category] ?? article.category}
                  </span>
                </div>
                <h2 className="text-base md:text-lg font-bold text-[var(--cream)] group-hover:text-[var(--forge)] transition-colors duration-300 leading-relaxed">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--ash)] leading-[1.9] line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[var(--steel)]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
