import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, getAllSlugs } from "../../../lib/articles";
import type { Article, ArticleBlock } from "../../../lib/articles";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "記事が見つかりません｜Black Smith" };

  return {
    title: `${article.title}｜Black Smith`,
    description: article.description,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: `${article.title}｜Black Smith`,
      description: article.description,
      url: `https://black-smith.jp/news/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      ...(article.updatedAt && { modifiedTime: article.updatedAt }),
      images: [
        article.image
          ? { url: `https://black-smith.jp${article.image}`, alt: article.title }
          : { url: "/opengraph-image", width: 1200, height: 630, alt: "Black Smith — 溶接・鉄の加工体験アトリエ" },
      ],
    },
  };
}

function buildJsonLd(article: Article) {
  const faqs = article.body.filter(
    (b): b is Extract<ArticleBlock, { type: "faq" }> => b.type === "faq"
  );

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://black-smith.jp" },
        { "@type": "ListItem", position: 2, name: "コラム・最新情報", item: "https://black-smith.jp/news" },
        { "@type": "ListItem", position: 3, name: article.title, item: `https://black-smith.jp/news/${article.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      ...(article.updatedAt && { dateModified: article.updatedAt }),
      author: {
        "@type": "Organization",
        name: "Black Smith",
        url: "https://black-smith.jp",
      },
      publisher: {
        "@type": "Organization",
        name: "Black Smith",
        logo: {
          "@type": "ImageObject",
          url: "https://black-smith.jp/images/logo/logo.jpg",
        },
      },
      mainEntityOfPage: `https://black-smith.jp/news/${article.slug}`,
      ...(article.image && {
        image: `https://black-smith.jp${article.image}`,
      }),
    },
  ];

  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return schemas;
}

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[var(--ash)] text-sm md:text-base leading-[2.2] mb-6">
          {block.text}
        </p>
      );
    case "heading":
      return block.level === 2 ? (
        <h2 className="text-xl md:text-2xl font-black text-[var(--cream)] mt-12 mb-4 leading-tight">
          {block.text}
        </h2>
      ) : (
        <h3 className="text-lg md:text-xl font-bold text-[var(--cream)] mt-8 mb-3 leading-tight">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="space-y-2 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[var(--ash)] leading-[2]">
              <span className="mt-[10px] w-1.5 h-1.5 bg-[var(--forge)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <div className="border border-[var(--iron)] p-5 md:p-6 mb-4">
          <p className="text-sm md:text-base font-bold text-[var(--cream)] mb-2">
            Q. {block.question}
          </p>
          <p className="text-sm text-[var(--ash)] leading-[2]">
            A. {block.answer}
          </p>
        </div>
      );
    case "cta":
      return (
        <div className="mb-4">
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.15em] text-[var(--black)] bg-[var(--forge)] px-8 py-3.5 hover:bg-[var(--ember)] transition-colors duration-300"
          >
            {block.text}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      );
    case "link":
      return (
        <div className="my-8 border border-[var(--iron)] bg-[var(--charcoal)] p-6">
          {block.source && (
            <p className="text-xs text-[var(--steel)] mb-2">{block.source}</p>
          )}
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cream)] font-bold leading-relaxed underline underline-offset-4 hover:text-[var(--forge)] transition-colors"
          >
            {block.text}
          </a>
          {block.note && (
            <p className="mt-2 text-xs text-[var(--steel)]">{block.note}</p>
          )}
        </div>
      );
    case "image":
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className="w-full" loading="lazy" />
          {block.caption && (
            <figcaption className="mt-2 text-xs text-[var(--steel)] text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const schemas = buildJsonLd(article);

  return (
    <div className="min-h-screen bg-[var(--soot)] pt-32 pb-20 md:pt-40 md:pb-28">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="max-w-[800px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--steel)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/news" className="hover:text-[var(--forge)] transition-colors">コラム・最新情報</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <time className="font-display text-xs text-[var(--steel)] tracking-wider">
              {article.date}
            </time>
            {article.updatedAt && (
              <span className="text-xs text-[var(--steel)]">
                （更新: {article.updatedAt}）
              </span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)] leading-[1.4] tracking-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-bold tracking-wider border border-[var(--iron)] text-[var(--steel)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Body */}
        <div className="border-t border-[var(--iron)] pt-10">
          {article.body.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--iron)]">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-[var(--forge)] hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            記事一覧に戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}
