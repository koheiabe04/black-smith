"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";

/* ─── Course Data ─── */

const courses = [
  {
    id: "welding-challenge",
    name: "溶接チャレンジ",
    en: "WELDING CHALLENGE",
    tagline: "火花を散らせ。はじめの一歩。",
    heroDesc:
      "溶接、触ったことないけど大丈夫？——大丈夫です。道具の持ち方、火の扱い方、ひとつずつ一緒にやっていきます。鉄と鉄がくっついた瞬間、「自分にもできた」って思えるはず。そこから始まります。",
    benefits: [
      {
        title: "ゼロからでも、ちゃんと作れる",
        desc: "溶接が初めてでも問題ありません。安全講習から始まり、練習を経て、最後にはひとつの作品を持ち帰れます。「自分にもできた」という実感が、いちばんのお土産です。",
      },
      {
        title: "親子で共有する、火花の記憶",
        desc: "6歳から参加OK。お子さんと一緒にマスクを被って、火花を散らす。普段の生活では絶対にできない体験が、家族の特別な思い出になります。",
      },
      {
        title: "1枠貸切で、自分たちのペースで",
        desc: "1枠あたり最大4名まで。他のグループと混ざることはありません。友達同士でも、ひとりでも、気兼ねなく集中できる環境です。",
      },
    ],
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "溶接に興味はあるけど、触ったことがない",
          "親子で一緒にものづくりを楽しみたい",
          "いつもと違う体験がしたい",
        ],
      },
    ],
    steps: [
      {
        time: "15分",
        title: "安全講習・道具の扱い方",
        desc: "溶接マスクの着け方、火の性質、安全な距離感。最初に全部お伝えするので、安心して取り組めます。",
      },
      {
        time: "15分",
        title: "練習溶接",
        desc: "まずはまっすぐ線を引く練習。手の感覚をつかんでいきます。うまくいかなくても大丈夫、何度でもやり直せます。",
      },
      {
        time: "30分〜",
        title: "本番 — 作品づくり",
        desc: "鉄片をつないで、自分だけの作品を制作。アイアンフック、ミニスタンド、キーホルダーなど、好きなものを選べます。",
      },
    ],
    gallery: [
      "アイアンフック",
      "ミニスタンド",
      "オリジナルキーホルダー",
      "ネームプレート",
    ],
    testimonials: [
      {
        text: "子どもが「また行きたい！」と帰りの車でずっと言ってました。親の私もハマりそうです。",
        attr: "30代女性・親子で参加",
      },
      {
        text: "溶接なんて絶対無理だと思ってたけど、丁寧に教えてもらえて、気づいたら夢中になってた。",
        attr: "20代男性・初体験",
      },
    ],
    age: "6歳〜",
    time: "1時間〜",
    price: "¥12,000/枠",
    level: 1,
    image: "/images/courses/challenge.jpg",
    note: "※ 1枠あたり1名〜4名まで参加可能（税込） ※完全予約制 ※小学生以下のお子様は保護者同伴が必要です",
    groupPricing: [
      { people: 1, perPerson: "12,000" },
      { people: 2, perPerson: "6,000" },
      { people: 3, perPerson: "4,000" },
      { people: 4, perPerson: "3,000" },
    ],
  },
  {
    id: "creative",
    name: "クリエイティブ",
    en: "CREATIVE",
    tagline: "暮らしに馴染む、鉄のプロダクト。",
    heroDesc:
      "棚、ラック、アウトドアギア——作ったものを家に持ち帰って、毎日使う。それがこのクラスのいちばんの醍醐味です。デザインを選んで、サイズを決めて、溶接して仕上げる。買うのではなく、作る暮らしの入口。",
    benefits: [
      {
        title: "作ったものが、毎日の暮らしに残る",
        desc: "飾るだけじゃない。棚として、ラックとして、毎日手に触れるものを自分で作る。使うたびに「これ、自分で作ったんだよな」と思える。それが何より贅沢です。",
      },
      {
        title: "サイズもデザインも、自分仕様",
        desc: "「あと5cm低ければ」「もう少し幅が広ければ」——既製品では叶わないジャストサイズを、自分の手で実現できます。",
      },
      {
        title: "溶接の「次のステップ」へ",
        desc: "チャレンジクラスで基本を覚えたら、ここからが本番。複数の接合、立体の組み立て、仕上げの研磨。技術が積み上がっていく手応えがあります。",
      },
    ],
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "使えるものを自分の手で作ってみたい",
          "インテリアやアウトドアにこだわりがある",
          "溶接の基本はわかったので、次に進みたい",
        ],
      },
    ],
    steps: [
      {
        time: "20分",
        title: "作成物の選択・サイズの打ち合わせ",
        desc: "何を作るか、どんなサイズにするか。用途や置き場所を聞きながら、一緒に決めていきます。",
      },
      {
        time: "60分〜",
        title: "溶接・組み立て",
        desc: "切断した鉄材を並べ、溶接で接合し、形にしていきます。水平・垂直の出し方、強度を出すコツもお伝えします。",
      },
      {
        time: "30分",
        title: "仕上げ・お持ち帰り",
        desc: "研磨してバリを取り、必要に応じて防錆処理や塗装。完成したらそのままお持ち帰りいただけます。",
      },
    ],
    gallery: [
      "アイアンシェルフ",
      "焚き火台",
      "プランターラック",
      "タオルハンガー",
      "スパイスラック",
      "薪ラック",
    ],
    testimonials: [
      {
        text: "自分で作った焚き火台でキャンプするのが夢だったんです。最高の週末でした。",
        attr: "40代男性・アウトドア好き",
      },
      {
        text: "リビングに置いたアイアンシェルフ、友達が来るたびに「これどこの？」って聞かれます。",
        attr: "30代女性・インテリア好き",
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
    tagline: "「こんなの欲しい」を、鉄で叶える。",
    heroDesc:
      "売ってないなら、作ればいい。「こういうのが欲しいんだけど」——そのアイデアを出発点に、設計から素材選び、製作、仕上げまで一緒にやります。世界にひとつ、あなたの手から生まれるプロダクト。",
    benefits: [
      {
        title: "アイデアを、そのまま形にできる",
        desc: "「こんな感じ」というスケッチやイメージ写真でOK。設計・素材選び・製作まで伴走するので、頭の中のアイデアがそのまま鉄のプロダクトになります。",
      },
      {
        title: "プロの設備で、プロの仕上がり",
        desc: "個人では揃えられない溶接機、切断機、ベンダー。プロの設備を使って、プロレベルの仕上がりを自分の手で実現できます。",
      },
      {
        title: "設計力が身につく",
        desc: "素材の強度、接合の順序、仕上げの方法。ものづくりの設計思考が自然と身につきます。次はひとりで作れるようになるかもしれません。",
      },
    ],
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "市販品にはない、自分だけのものが欲しい",
          "空間やサイズにぴったり合う家具が欲しい",
          "設計から完成まで全部やってみたい",
        ],
      },
    ],
    steps: [
      {
        time: "60分〜",
        title: "ヒアリング・デザイン設計",
        desc: "何を作りたいか、どんな用途か、サイズや雰囲気を丁寧にヒアリング。図面に起こして、完成イメージを共有します。",
      },
      {
        time: "—",
        title: "材料の選定・発注",
        desc: "設計に基づいて最適な素材を選定。材料の手配はスタッフが対応するので、お任せください。",
      },
      {
        time: "3時間〜",
        title: "製作 — 切断・曲げ・溶接・組み立て",
        desc: "いよいよ製作。工程ごとにサポートしながら、あなた自身の手で組み上げていきます。",
      },
      {
        time: "60分",
        title: "仕上げ・防錆処理・塗装",
        desc: "研磨、防錆、塗装まで丁寧に仕上げ。長く使えるクオリティに仕上げます。",
      },
    ],
    gallery: [
      "オーダーメイドのダイニングテーブル脚",
      "店舗用看板フレーム",
      "自転車スタンド",
      "特注ガーデンアーチ",
      "オリジナル表札",
      "アイアンドア取手",
    ],
    testimonials: [
      {
        text: "引っ越し先のキッチンにぴったりの棚が欲しくて。既製品じゃ絶対無理なサイズ感が実現できました。",
        attr: "30代男性・新居に合わせて",
      },
      {
        text: "店の看板フレームを自分で作りたくて参加。お客さんに「これ手作り？」って驚かれるのが嬉しい。",
        attr: "40代女性・カフェオーナー",
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
      "壊れた椅子の脚、折れた工具、錆びたフェンス。「もう使えない」と思っていたものを、自分の手でもう一度蘇らせる。溶接で繋ぎ、研磨で整え、防錆処理をして現役に戻す。直して使い続けるって、いちばんかっこいいものづくりだと思う。",
    benefits: [
      {
        title: "愛着のあるものを、手放さなくていい",
        desc: "「壊れたけど捨てられない」——その気持ち、わかります。溶接で繋ぎ直し、研磨して、防錆処理をすれば、また何年も使えます。直すことは、ものとの関係を続けること。",
      },
      {
        title: "「直す力」は一生もの",
        desc: "一度覚えれば、次からは自分で直せるようになります。壊れても捨てない、買い直さない。それは経済的にも、気持ち的にも豊かな暮らし方です。",
      },
      {
        title: "サステナブルな選択",
        desc: "使い捨てではなく、直して使い続ける。環境にもやさしい、これからの時代のものとの付き合い方を体験できます。",
      },
    ],
    details: [
      {
        label: "こんな方におすすめ",
        items: [
          "壊れたけど愛着があって、捨てられないものがある",
          "金属製品の直し方を自分で覚えたい",
          "使い捨てじゃない暮らしをしたい",
        ],
      },
    ],
    steps: [
      {
        time: "20分",
        title: "修復品の状態確認・作業方針の相談",
        desc: "持ち込んだものの状態を一緒に確認。どこをどう直すか、作業方針を相談して決めます。",
      },
      {
        time: "30分",
        title: "分解・研磨・下地処理",
        desc: "錆を落とし、割れた部分を整え、溶接がしっかり効く状態に整えます。",
      },
      {
        time: "60分〜",
        title: "溶接・補強・修復作業",
        desc: "折れた部分を溶接で繋ぎ、必要に応じて補強材を入れます。元より丈夫にすることも可能。",
      },
      {
        time: "30分",
        title: "仕上げ・防錆処理",
        desc: "研磨で表面を整え、防錆処理で長持ちする状態に。見た目もきれいに仕上げます。",
      },
    ],
    gallery: [
      "椅子・テーブルの脚",
      "フェンス・門扉",
      "園芸・農具",
      "アウトドアギアの金属パーツ",
      "自転車フレーム",
      "工具類",
    ],
    testimonials: [
      {
        text: "祖父から受け継いだ鉄の園芸道具。折れて諦めてたけど、ここで直せて本当に嬉しかった。",
        attr: "50代男性・農家",
      },
      {
        text: "キャンプ用の椅子が壊れて、買い直すか迷ってたところ。直したら前より頑丈になった。",
        attr: "30代男性・キャンパー",
      },
    ],
    age: "15歳〜",
    time: "2時間30分〜",
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
      <span className="font-display text-[10px] tracking-[0.3em] text-[var(--steel)] ml-1.5">
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

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      const idx = courses.findIndex((c) => c.id === hash);
      if (idx >= 0) setActiveTab(idx);
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
              鉄に触れ、鉄で作る。
              <br />
              <span className="text-[var(--forge)]">4つの入口。</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <p className="mt-8 max-w-2xl text-[var(--ash)] text-base md:text-lg leading-[2]">
              「溶接って何？」からでも、「自分だけの一点ものを作りたい」でも。
              <br className="hidden md:block" />
              やりたいことに合わせて、ちょうどいいクラスが見つかります。
            </p>
          </ScrollReveal>

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
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          <div role="tablist" aria-label="クラスを選ぶ" className="flex overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {courses.map((c, i) => (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls="course-panel"
                onClick={() => {
                  setActiveTab(i);
                  history.replaceState(null, "", `#${c.id}`);
                }}
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
          {/* スマホ：右にまだタブがあることを示すフェード */}
          <div aria-hidden="true" className="md:hidden pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[var(--soot)] to-transparent" />
        </div>
      </section>

      {/* ── Course Detail ── */}
      <section id="course-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="relative bg-[var(--soot)] overflow-hidden">
        <div className="absolute inset-0 grid-texture" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
          {/* ── 1. Course Hero Block (料金なし) ── */}
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
              <div className="absolute top-5 left-5 px-4 py-2.5 bg-[var(--black)]/80 backdrop-blur-md border border-[var(--iron)]">
                <Level n={active.level} size="sm" />
              </div>
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

              {/* Specs Grid — 料金なし、対象年齢と所要時間のみ */}
              <div className="mt-10 grid grid-cols-2 gap-0 border border-[var(--iron)]">
                {[
                  { label: "対象年齢", value: active.age, icon: "AGE" },
                  { label: "所要時間", value: active.time, icon: "TIME" },
                ].map((spec, i) => (
                  <div
                    key={spec.icon}
                    className={`p-5 md:p-6 ${
                      i < 1 ? "border-r border-[var(--iron)]" : ""
                    }`}
                  >
                    <span className="font-display text-[10px] md:text-[11px] tracking-[0.3em] text-[var(--steel)] block">
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

              {/* こんな方におすすめ */}
              {active.details.map((section, si) => (
                <div key={si} className="mt-8">
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    {section.label}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-3 text-sm text-[var(--ash)] leading-[1.9]"
                      >
                        <span className="mt-[10px] w-1 h-1 bg-[var(--steel)] rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── 2. ベネフィット — この体験で得られること ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  BENEFITS
                </span>
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
                この体験で得られること
              </h3>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {active.benefits.map((b, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <div className="relative pl-6 border-l-2 border-[var(--forge)]/30 hover:border-[var(--forge)] transition-colors duration-500">
                    <span className="font-display text-[2.5rem] font-extrabold text-[var(--forge)]/10 leading-none absolute -top-2 -left-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base md:text-lg font-bold text-[var(--cream)] tracking-tight mb-3 pt-4">
                      {b.title}
                    </h4>
                    <p className="text-sm text-[var(--ash)] leading-[2.1]">
                      {b.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── 3. 体験の流れ（ステップ形式） ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  FLOW
                </span>
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
                体験の流れ
              </h3>
            </ScrollReveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-[var(--iron)]" />

              <div className="space-y-10 md:space-y-12">
                {active.steps.map((step, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="relative flex gap-6 md:gap-8">
                      {/* Step number circle */}
                      <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[var(--soot)] border-2 border-[var(--forge)] flex items-center justify-center">
                        <span className="font-display text-xs md:text-sm font-extrabold text-[var(--forge)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-display text-[10px] tracking-[0.2em] text-[var(--steel)] bg-[var(--charcoal)] px-3 py-1">
                            {step.time}
                          </span>
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-[var(--cream)] tracking-tight mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-[var(--ash)] leading-[2.1]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* ── 4. 作れるもの / 制作実績 ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  GALLERY
                </span>
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
                {active.id === "self-repair" ? "修復できるもの" : "つくれるもの"}
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {active.gallery.map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                  <div className="group relative border border-[var(--iron)] bg-[var(--charcoal)] p-6 md:p-8 hover:border-[var(--forge)]/30 transition-all duration-500">
                    <span className="font-display text-[2rem] md:text-[2.5rem] font-extrabold text-[var(--forge)]/[0.08] leading-none absolute top-3 right-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base font-bold text-[var(--cream)] tracking-tight relative z-10">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── 5. 参加者の声 ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  VOICES
                </span>
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
                参加者の声
              </h3>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {active.testimonials.map((t, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <div className="relative border border-[var(--iron)] bg-[var(--charcoal)] p-8 md:p-10">
                    {/* Quote mark */}
                    <span className="absolute top-4 left-6 font-display text-[4rem] text-[var(--forge)]/10 leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="relative z-10 text-[var(--cream)] text-sm md:text-base leading-[2.1] mb-6 pt-6">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] w-6 bg-[var(--forge)]" />
                      <span className="text-[var(--steel)] text-xs font-display tracking-wider">
                        {t.attr}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── 6. 料金（ページ最後に配置） ── */}
          <div className="border-t border-[var(--iron)] py-16 md:py-24">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[var(--forge)]" />
                <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
                  PRICING
                </span>
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)] mb-12 md:mb-16">
                料金
              </h3>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="max-w-2xl">
                <div className="border border-[var(--iron)] bg-[var(--charcoal)]">
                  {/* Price header */}
                  <div className="p-8 md:p-10 border-b border-[var(--iron)]">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-[var(--forge)] leading-none">
                        {active.price}
                      </span>
                      <span className="text-[var(--steel)] text-xs">（税込）</span>
                    </div>
                    <p className="text-sm text-[var(--ash)] leading-[1.9] mt-3">
                      {active.note}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 border-b border-[var(--iron)]">
                    <div className="p-5 md:p-6 border-r border-[var(--iron)]">
                      <span className="font-display text-[10px] md:text-[11px] tracking-[0.3em] text-[var(--steel)] block">
                        AGE
                      </span>
                      <span className="mt-2 block text-[var(--cream)] text-sm md:text-base font-bold">
                        {active.age}
                      </span>
                    </div>
                    <div className="p-5 md:p-6">
                      <span className="font-display text-[10px] md:text-[11px] tracking-[0.3em] text-[var(--steel)] block">
                        TIME
                      </span>
                      <span className="mt-2 block text-[var(--cream)] text-sm md:text-base font-bold">
                        {active.time}
                      </span>
                    </div>
                  </div>

                  {/* Group pricing (welding challenge only) */}
                  {"groupPricing" in active && active.groupPricing && (
                    <div className="p-6 md:p-8">
                      <p className="text-[var(--cream)] text-sm font-bold mb-1">
                        1枠 12,000円（税込）
                      </p>
                      <p className="text-[var(--ash)] text-xs leading-[1.8] mb-4">
                        人数にかかわらず、1枠の料金は12,000円です。<br />
                        ご家族やご友人、仲間と一緒にご参加いただけます。
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {(active.groupPricing as { people: number; perPerson: string }[]).map((g) => (
                          <div
                            key={g.people}
                            className="flex items-center justify-between px-3 py-2 bg-[var(--black)]/40 text-xs"
                          >
                            <span className="text-[var(--ash)]">{g.people}名で参加</span>
                            <span className="text-[var(--forge)] font-bold">
                              1名あたり ¥{g.perPerson}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[var(--worn)] text-[10px]">
                        ※1枠あたり最大4名まで
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA within pricing section */}
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-display text-sm font-bold tracking-[0.2em] text-[var(--black)] bg-[var(--forge)] px-10 py-4 hover:bg-[var(--ember)] transition-colors duration-300 w-full md:w-auto"
                  >
                    このクラスを予約する
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
                </div>
              </div>
            </ScrollReveal>
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
                    汚れてもいい長袖・長ズボンと運動靴で来てください。溶接マスクや革手袋、エプロンはこちらで全部揃えています。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    予約について
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    完全予約制です。フォームかメールで、希望の日程・クラス・人数を教えてください。折り返しご連絡します。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    キャンセルポリシー
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    前日までなら無料でキャンセルできます。当日キャンセルは料金の50%をいただいています。体験開始後の返金は原則できませんので、ご了承ください。
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
                    どのクラスでも最初に安全講習を行います。保護具は必ず着用、スタッフが常にそばでサポート。お子さんの参加も安心してお任せください。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    お支払い方法
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    現金・銀行振込・クレジットカードに対応しています。当日、現地でのお支払いもOKです。
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--cream)] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--forge)]" />
                    グループ・団体利用
                  </h3>
                  <p className="text-[var(--ash)] text-sm leading-[2]">
                    企業研修、修学旅行、チームビルディングにも。人数やご要望に合わせてプログラムを組みます。
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
        <div className="absolute -right-20 top-0 w-[400px] h-full bg-[var(--forge)]/[0.03] -skew-x-12" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <span className="font-display text-[10px] tracking-[0.4em] text-[var(--forge)] font-bold">
              GET STARTED
            </span>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up" delay={100}>
            <h2 className="mt-6 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[var(--cream)]">
              まずは、火花を散らしてみよう。
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <p className="mt-6 text-[var(--ash)] text-base md:text-lg max-w-xl mx-auto leading-[2]">
              気になるクラスがあったら、気軽に連絡してください。
              <br className="hidden md:block" />
              あなたにぴったりの体験を一緒に考えます。
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
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
