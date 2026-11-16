import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜Black Smith",
  description:
    "Black Smith（有限会社光成工業）のプライバシーポリシー。個人情報の取得・利用目的・管理体制について定めています。",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "プライバシーポリシー｜Black Smith",
    url: "https://black-smith.jp/privacy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Black Smith — 溶接・鉄の加工体験アトリエ" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://black-smith.jp" },
    { "@type": "ListItem", position: 2, name: "プライバシーポリシー", item: "https://black-smith.jp/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--soot)] pt-32 pb-20 md:pt-40 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <nav className="text-xs text-[var(--steel)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">プライバシーポリシー</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)]">
          プライバシーポリシー
        </h1>

        <div className="mt-10 max-w-none">
          <div className="space-y-10 text-sm text-[var(--ash)] leading-[1.9]">
            <p>
              有限会社光成工業（以下「当社」）は、Black
              Smithの運営において取得する個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                1. 個人情報の取得
              </h2>
              <p>
                当社は、お問い合わせ・ご予約の際に、お名前、メールアドレス、電話番号等の個人情報を取得することがあります。これらの情報は、適法かつ公正な手段により取得いたします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                2. 利用目的
              </h2>
              <p>取得した個人情報は、以下の目的で利用いたします。</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>お問い合わせ・ご相談への対応</li>
                <li>体験・クラスのご予約に関する連絡</li>
                <li>事前案内・当日のご案内の送付</li>
                <li>サービス改善のための分析（個人を特定しない形で）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                3. 第三者への提供
              </h2>
              <p>
                当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                4. 外部サービスの利用
              </h2>
              <p>
                当サイトでは、お問い合わせ・ご予約の受付に Google LLC が提供する「Googleフォーム」を利用しています。フォームに入力された情報は Google のサーバーを通じて当社に届きます。
              </p>
              <p className="mt-3">
                また、サイトの利用状況を把握するため、Google LLC が提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは Cookie を使用して、個人を特定しない形で閲覧情報（閲覧ページ、滞在時間、おおよその地域、使用端末など）を収集します。収集されたデータは Google のプライバシーポリシーに基づいて管理されます。
              </p>
              <p className="mt-3">
                Googleアナリティクスによるデータ収集を無効にしたい場合は、
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--forge)] underline underline-offset-4"
                >
                  Googleアナリティクス オプトアウト アドオン
                </a>
                をご利用いただくか、ブラウザの設定で Cookie を無効にしてください。詳しくは
                <a
                  href="https://policies.google.com/technologies/partner-sites?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--forge)] underline underline-offset-4"
                >
                  Google のサービスを使用するサイトやアプリから収集した情報の Google による使用
                </a>
                をご覧ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                5. 個人情報の管理
              </h2>
              <p>
                当社は、個人情報の漏洩、滅失またはき損を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、必要かつ適切な監督を行います。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                6. 個人情報の開示・訂正・削除
              </h2>
              <p>
                ご本人から個人情報の開示・訂正・削除のご請求があった場合は、本人確認を行った上で、合理的な範囲で速やかに対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--cream)] mb-4">
                7. お問い合わせ窓口
              </h2>
              <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。</p>
              <div className="mt-4 p-5 bg-[var(--charcoal)] border border-[var(--iron)]">
                <p className="font-medium text-[var(--cream)]">
                  有限会社光成工業 / Black Smith
                </p>
                <p className="mt-2">〒021-0902 岩手県一関市萩荘霜後241</p>
                <p className="mt-1">
                  <a href="mailto:blacksmith.iwate@gmail.com" className="text-[var(--forge)] hover:text-[var(--ember)]">
                    blacksmith.iwate@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <p className="text-xs text-[var(--steel)] pt-4 border-t border-[var(--iron)]">
              制定日：2025年1月1日／改定日：2026年11月16日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
