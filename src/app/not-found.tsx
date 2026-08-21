import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--soot)] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-[8rem] md:text-[12rem] font-black text-[var(--iron)]/40 leading-none select-none">
          404
        </p>
        <h1 className="text-xl md:text-2xl font-bold text-[var(--cream)] -mt-8 md:-mt-12">
          ページが見つかりません
        </h1>
        <p className="mt-4 text-sm text-[var(--ash)]">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[var(--forge)] text-white text-sm font-bold tracking-wider hover:bg-[var(--ember)] transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
