import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜Black Smith",
  description:
    "Black Smith（有限会社光成工業）の特定商取引法に基づく表記。販売事業者情報、料金、キャンセルポリシーをご確認いただけます。",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[var(--soot)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[800px] mx-auto px-6">
        <nav className="text-xs text-[var(--steel)] mb-8">
          <Link href="/" className="hover:text-[var(--forge)] transition-colors">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ash)]">特定商取引法に基づく表記</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-black text-[var(--cream)]">
          特定商取引法に基づく表記
        </h1>

        <div className="mt-10 max-w-none">
          <div className="space-y-0 text-sm text-[var(--ash)] leading-[1.9]">
            <table className="w-full border-collapse">
              <tbody>
                <Row label="販売事業者" value="有限会社光成工業" />
                <Row label="運営責任者" value="代表取締役（※お問い合わせいただければ開示いたします）" />
                <Row label="所在地" value="〒021-0902 岩手県一関市萩荘霜後２４１" />
                <Row label="電話番号" value="お問い合わせいただければ遅滞なく開示いたします" />
                <Row label="メールアドレス" value="blacksmith.iwate@gmail.com" />
                <Row label="URL" value="https://black-smith.jp" />
                <Row
                  label="サービス内容"
                  value="溶接・鉄の加工体験クラスの提供"
                />
                <Row
                  label="料金"
                  value="各クラスの料金はコースページに記載のとおり（税込表示）"
                />
                <Row
                  label="料金以外に発生する費用"
                  value="なし（材料費はクラス料金に含まれます）"
                />
                <Row
                  label="お支払い方法"
                  value="現地にて現金払い、または事前のお振込み"
                />
                <Row
                  label="お支払い時期"
                  value="予約確定時、または体験当日"
                />
                <Row
                  label="サービスの提供時期"
                  value="ご予約いただいた日時に体験を実施いたします"
                />
                <Row
                  label="キャンセル・返金について"
                  value="体験日の3日前までのキャンセルは全額返金いたします。2日前〜前日は料金の50%、当日キャンセルは返金不可となります。また、体験開始後に体調不良や恐怖心等により作業の継続が困難になった場合についても、原則として返金はいたしかねます。"
                />
                <Row
                  label="特記事項"
                  value="天候や設備の都合により、やむを得ず日程を変更させていただく場合がございます。その場合は振替日をご案内いたします。"
                />
              </tbody>
            </table>

            <p className="text-xs text-[var(--steel)] pt-8 border-t border-[var(--iron)]">
              制定日：2025年1月1日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-[var(--iron)]">
      <th className="py-4 pr-6 text-left align-top font-bold text-[var(--cream)] whitespace-nowrap w-[140px] md:w-[180px]">
        {label}
      </th>
      <td className="py-4">{value}</td>
    </tr>
  );
}
