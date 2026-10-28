import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ完了｜Black Smith",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[var(--soot)] flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <div className="w-16 h-16 border border-[var(--forge)]/30 flex items-center justify-center mx-auto">
          <svg className="w-7 h-7 text-[var(--forge)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)] mt-8">
          お問い合わせ
          <br />
          ありがとうございます
        </h1>
        <p className="mt-6 text-sm text-[var(--ash)] leading-[1.8]">
          内容を確認して、折り返しご連絡します。
          <br />
          少しだけお待ちください。
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3 bg-[var(--forge)] text-white text-sm font-bold tracking-wider hover:bg-[var(--ember)] transition-colors"
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
