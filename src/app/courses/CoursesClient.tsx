"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";

/* ─── Course Data ─── */

const courses = [
  {
    id: "welding-challenge",
    name: "溶接チャレンジ",
    en: "WELDING CHALLENGE",
    tagline: "火花を散らせ。最初の一歩を。",
    heroDesc:
      "はじめて溶接に触れる方のための入門クラス。道具の正しい扱い方、安全への向き合い方を学びながら、実際に鉄と鉄をつなぐ体験を行います。完成したものを手に持ったとき、「自分にもできた」という感覚が芽生えるはずです。",
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "溶接に興味はあるけれど、触れたことがない方",
          "親子でものづくり体験を楽しみたい方",
          "非日常の体験をしてみたい方",
        ],
      },
      {
        label: "体験の流れ",
        items: [
          "安全講習・道具の扱い方レクチャー（15分）",
          "練習溶接 — まっすぐ線を引く（15分）",
          "本番 — 鉄片をつないで小さな作品を制作（30分〜）",
        ],
      },
      {
        label: "つくれるもの（例）",
        items: [
          "アイアンフック",
          "ミニスタンド",
          "オリジナルキーホルダー",
        ],
      },
    ],
    age: "6歳〜",
    time: "1時間〜",
    price: "¥4,000〜",
    level: 1,
    image: "/images/courses/challenge.jpg",
    note: "※ 小学生以下のお子様は保護者同伴が必要です",
  },
  {
    id: "creative",
    name: "クリエイティブ",
    en: "CREATIVE",
    tagline: "暮らしに溶け込む、鉄のプロダクト。",
    heroDesc:
      "棚、ラック、アウトドアギア — 完成後も日常で使い続けることを前提に設計・製作するクラスです。用意されたデザインの中から選び、寸法を決め、溶接と仕上げまで一貫して体験。「買う」のではなく「作る」暮らしの入口がここにあります。",
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "実際に使えるものを自分の手で作りたい方",
          "インテリアやアウトドアにこだわりがある方",
          "溶接の基本は理解していて、次のステップに進みたい方",
        ],
      },
      {
        label: "体験の流れ",
        items: [
          "デザイン選び・サイズの打ち合わせ（20分）",
          "材料カット・曲げ加工（30分）",
          "溶接・組み立て（60分〜）",
          "仕上げ・塗装（30分）",
        ],
      },
      {
        label: "つくれるもの（例）",
        items: [
          "アイアンシェルフ",
          "焚き火台",
          "プランターラック",
          "タオルハンガー",
        ],
      },
    ],
    age: "12歳〜",
    time: "2時間〜",
    price: "¥11,000〜",
    level: 2,
    image: "/images/courses/creative.jpg",
    note: "※ 製作物のサイズにより所要時間・料金が変動します",
  },
  {
    id: "my-design",
    name: "マイデザイン",
    en: "MY DESIGN",
    tagline: "「こんなの欲しい」を、鉄で形に。",
    heroDesc:
      "既製品では見つからない、あなただけの一点もの。「こういうものが欲しい」というアイデアを出発点に、設計図の作成から素材選び、製作、仕上げまでをフルサポート。世界にひとつだけのプロダクトが、あなたの手から生まれます。",
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "市販品にはない、自分だけのものが欲しい方",
          "空間やサイズにぴったり合う家具を求めている方",
          "ものづくりの全工程を体験したい方",
        ],
      },
      {
        label: "体験の流れ",
        items: [
          "ヒアリング・デザイン設計（60分〜）",
          "材料の選定・発注（スタッフが対応）",
          "製作 — 切断・曲げ・溶接・組み立て（3時間〜）",
          "仕上げ・防錆処理・塗装（60分）",
        ],
      },
      {
        label: "制作実績（例）",
        items: [
          "オーダーメイドのダイニングテーブル脚",
          "店舗用看板フレーム",
          "自転車スタンド",
          "特注ガーデンアーチ",
        ],
      },
    ],
    age: "12歳〜",
    time: "5時間〜（複数日に分けることも可能）",
    price: "¥50,000〜",
    level: 3,
    image: "/images/courses/mydesign.jpg",
    note: "※ 事前打ち合わせが必要です。まずはお問い合わせください",
  },
  {
    id: "self-repair",
    name: "セルフリペア",
    en: "SELF REPAIR",
    tagline: "捨てるな、直せ。",
    heroDesc:
      "壊れた椅子の脚、折れた工具、錆びたフェンス — 「まだ使いたい」と思うものを、自分の手でもう一度蘇らせるクラスです。溶接や研磨で修復し、防錆処理を施して実用に戻す。直して使い続ける暮らしは、いちばん誠実なものづくりです。",
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "壊れたけど愛着があり、捨てられないものがある方",
          "金属製品の修理方法を学びたい方",
          "サステナブルな暮らしに関心がある方",
        ],
      },
      {
        label: "体験の流れ",
        items: [
          "修復品の状態確認・作業方針の相談（20分）",
          "分解・研磨・下地処理（30分）",
          "溶接・補強・修復作業（60分〜）",
          "仕上げ・防錆処理（30分）",
        ],
      },
      {
        label: "修復できるもの（例）",
        items: [
          "椅子・テーブルの脚",
          "フェンス・門扉",
          "園芸・農具",
          "アウトドアギアの金属パーツ",
        ],
      },
    ],
    age: "15歳〜",
    time: "2時間〜",
    price: "¥11,000〜",
    level: 2,
    image: "/images/courses/repair.jpg",
    note: "※ 修復品の状態によりお受けできない場合があります",
  },
];

/* ─── Level Indicator ─── */

function Level({ n, size = "md" }: { n: number; size?: "sm" | "md" }) {
  const w = size === "sm" ? "w-4" : "w-6";
  const h = size === "sm" ? "h-[2px]" : "h-[3px]";
  return (
    <div className="flex gap-1.5 items-center">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`${w} ${h} ${
            i <= n ? "bg-[var(--forge)]" : "bg-[var(--iron)]"
          }`}
        />
      ))}
      <span className="font-display text-[9px] tracking-[0.3em] text-[var(--steel)] ml-1.5">
        LV.{n}
      </span>
    </div>
  );
}

/* ─── Breadcrumb Schema ─── */

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://black-smith.jp",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "クラス紹介",
      item: "https://black-smith.jp/courses",
    },
  ],
};

/* ─── Page Component ─── */

export default function CoursesClient() {
  const [activeTab, setActiveTab] = useState(0);
  const active = courses[activeTab];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative bg-[var(--black)] pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        {/* Large background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display text-[clamp(6rem,20vw,16rem)] font-extrabold text-white/[0.02] leading-none whitespace-nowrap">
            COURSES
          </span>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[var(--forge)]" />
              <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                COURSES
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up" delay={100}>
            <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[var(--cream)]">
              鉄を知り、鉄で作る。
              <br />
              <span className="text-[var(--forge)]">4つの体験。</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <p className="mt-8 max-w-2xl text-[var(--ash)] text-base md:text-lg leading-[2]">
              はじめての溶接体験から、世界にひとつだけのオーダーメイドまで。
              <br className="hidden md:block" />
              あなたのレベルと目的に合わせた4つのクラスをご用意しています。
            </p>
          </ScrollReveal>

          {/* Breadcrumb */}
          <ScrollReveal animation="fade-in" delay={400}>
            <nav className="mt-10 flex items-center gap-2 text-[11px] font-display tracking-wider">
              <Link
                href="/"
                className="text-[var(--steel)] hover:text-[var(--cream)] transition-colors"
              >
                HOME
              </Link>
              <span className="text-[var(--iron)]">/</span>
              <span className="text-[var(--forge)]">COURSES</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Course Navigation Tabs ── */}
      <section className="sticky top-20 md:top-24 z-40 bg-[var(--soot)]/95 backdrop-blur-xl border-b border-[var(--iron)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {courses.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(i)}
                className={`relative flex-shrink-0 px-6 md:px-8 py-5 md:py-6 font-display text-[11px] md:text-xs font-bold tracking-[0.15em] transition-colors duration-300 ${
                  activeTab === i
                    ? "text-[var(--cream)]"
                    : "text-[var(--steel)] hover:text-[var(--ash)]"
                }`}
              >
                <span className="relative z-10">
                  <span className="text-[var(--forge)] mr-2 opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.name}
                </span>
                {activeTab === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--forge)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Detail ── */}
      <section className="relative bg-[var(--soot)] overflow-hidden">
        <div className="absolute inset-0 grid-texture" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          {/* ── Course Hero Block ── */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 py-16 md:py-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] bg-[var(--charcoal)] overflow-hidden group order-2 md:order-1">
              <Image
                src={active.image}
                alt={`${active.name}クラスの体験風景`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />
              {/* Floating level badge */}
              <div className="absolute top-5 left-5 px-4 py-2.5 bg-[var(--black)]/80 backdrop-blur-md border border-[var(--iron)]">
                <Level n={active.level} size="sm" />
              </div>
              {/* English name overlay */}
              <div className="absolute bottom-6 right-6">
                <span className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white/[0.06] leading-none whitespace-nowrap">
                  {active.en}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[11px] tracking-[0.3em] text-[var(--forge)] font-bold">
                  CLASS {String(activeTab + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
                {active.name}
              </h2>
              <p className="mt-3 font-display text-sm md:text-base text-[var(--sand)] font-semibold tracking-wide">
                {active.tagline}
              </p>
              <p className="mt-6 text-[var(--ash)] text-sm md:text-base leading-[2.1]">
                {active.heroDesc}
              </p>

              {/* Specs Grid */}
              <div className="mt-10 grid grid-cols-3 gap-0 border border-[var(--iron)]">
                {[
                  { label: "対象年齢", value: active.age, icon: "AGE" },
                  { label: "所要時間", value: active.time, icon: "TIME" },
                  { label: "料金", value: active.price, icon: "PRICE" },
                ].map((spec, i) => (
                  <div
                    key={spec.icon}
                    className={`p-5 md:p-6 ${
                      i < 2 ? "border-r border-[var(--iron)]" : ""
                    }`}
                  >
                    <span className="font-display text-[8px] md:text-[9px] tracking-[0.3em] text-[var(--steel)] block">
                      {spec.icon}
                    </span>
                    <span className="mt-2 block text-[var(--cream)] text-sm md:text-lg font-bold">
                      {spec.value}
                    </span>
                    <span className="mt-1 block text-[var(--worn)] text-[10px] md:text-xs">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              {active.note && (
                <p className="mt-4 text-[var(--worn)] text-xs leading-relaxed">
                  {active.note}
                </p>
              )}
            </div>
          </div>

          {/* ── Detail Sections ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {active.details.map((section, si) => (
                <div key={si} className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-display text-[clamp(2rem,3vw,3rem)] font-extrabold text-[var(--forge)]/20 leading-none">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-[var(--cream)] tracking-tight">
                      {section.label}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-3 text-sm text-[var(--ash)] leading-[1.9]"
                      >
                        <span className="mt-[10px] w-1.5 h-1.5 bg-[var(--forge)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Courses Overview ── */}
      <section className="relative bg-[var(--charcoal)] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[var(--forge)]" />
              <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                COMPARISON
              </span>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
              クラス比較
            </h2>
          </ScrollReveal>

          {/* Comparison Table - Desktop */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="hidden md:block overflow-hidden border border-[var(--iron)]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--iron)]">
                    <th className="text-left p-6 font-display text-[10px] tracking-[0.3em] text-[var(--steel)] font-bold w-[20%]">
                      CLASS
                    </th>
                    <th className="text-left p-6 font-display text-[10px] tracking-[0.3em] text-[var(--steel)] font-bold">
                      LEVEL
                    </th>
                    <th className="text-left p-6 font-display text-[10px] tracking-[0.3em] text-[var(--steel)] font-bold">
                      AGE
                    </th>
                    <th className="text-left p-6 font-display text-[10px] tracking-[0.3em] text-[var(--steel)] font-bold">
                      TIME
                    </th>
                    <th className="text-right p-6 font-display text-[10px] tracking-[0.3em] text-[var(--steel)] font-bold">
                      PRICE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c, i) => (
                    <tr
                      key={c.id}
                      onClick={() => {
                        setActiveTab(i);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`border-b border-[var(--iron)]/50 cursor-pointer transition-colors duration-300 ${
                        activeTab === i
                          ? "bg-[var(--forge)]/[0.04]"
                          : "hover:bg-[var(--soot)]"
                      }`}
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-xs text-[var(--forge)]/60 font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[var(--cream)] font-bold text-sm">
                            {c.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <Level n={c.level} size="sm" />
                      </td>
                      <td className="p-6 text-[var(--sand)] text-sm">{c.age}</td>
                      <td className="p-6 text-[var(--sand)] text-sm">{c.time}</td>
                      <td className="p-6 text-right">
                        <span className="font-display text-lg font-extrabold text-[var(--forge)]">
                          {c.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Comparison Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {courses.map((c, i) => (
              <ScrollReveal key={c.id} animation="fade-up" delay={i * 80}>
                <button
                  onClick={() => {
                    setActiveTab(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full text-left p-5 border transition-all duration-300 ${
                    activeTab === i
                      ? "border-[var(--forge)]/30 bg-[var(--forge)]/[0.04]"
                      : "border-[var(--iron)] hover:border-[var(--steel)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs text-[var(--forge)]/60 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[var(--cream)] font-bold">
                        {c.name}
                      </span>
                    </div>
                    <span className="font-display text-lg font-extrabold text-[var(--forge)]">
                      {c.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[var(--ash)] text-xs">
                    <Level n={c.level} size="sm" />
                    <span>{c.age}</span>
                    <span>{c.time}</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Info ── */}
      <section className="relative bg-[var(--soot)] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[var(--forge)]" />
              <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                INFORMATION
              </span>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
              ご利用について
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    持ち物
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    汚れてもよい服装（長袖・長ズボン推奨）、運動靴でお越しください。溶接マスク・革手袋・エプロンはこちらでご用意しています。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    予約について
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    完全予約制です。お問い合わせフォームまたはメールにてご連絡ください。ご希望の日程・クラス・人数をお知らせいただければ、折り返しご案内いたします。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    キャンセルポリシー
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    前日までのキャンセルは無料です。当日キャンセルの場合、料金の50%を頂戴しております。なお、体験開始後に体調不良や恐怖心等により作業の継続が困難になった場合の返金は原則としていたしかねますので、あらかじめご了承ください。
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    安全について
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    すべてのクラスで、作業開始前に安全講習を行います。保護具の着用を徹底し、経験豊富なスタッフが常時サポートいたします。お子様の参加も安心してお任せください。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    お支払い方法
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    現金または銀行振込にてお支払いいただけます。体験当日に現地でのお支払いも可能です。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    グループ・団体利用
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    企業研修、修学旅行、チームビルディングなどの団体利用も承ります。人数やご要望に応じてプログラムをカスタマイズいたします。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[var(--black)] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        {/* Diagonal accent */}
        <div className="absolute -right-20 top-0 w-[400px] h-full bg-[var(--forge)]/[0.03] -skew-x-12" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
              GET STARTED
            </span>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up" delay={100}>
            <h2 className="mt-6 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
              まずは火花を散らしてみよう。
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <p className="mt-6 text-[var(--ash)] text-base md:text-lg max-w-xl mx-auto leading-[2]">
              気になるクラスが見つかったら、お気軽にお問い合わせください。
              <br className="hidden md:block" />
              あなたに合った体験プランをご提案します。
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-display text-sm font-bold tracking-[0.2em] text-[var(--black)] bg-[var(--forge)] px-10 py-4 hover:bg-[var(--ember)] transition-colors duration-300"
              >
                予約・お問い合わせ
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center font-display text-sm font-bold tracking-[0.2em] text-[var(--cream)] border border-[var(--iron)] px-10 py-4 hover:border-[var(--steel)] transition-colors duration-300"
              >
                トップに戻る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
