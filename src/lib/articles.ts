export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updatedAt?: string;
  category: "column" | "news" | "report";
  tags: string[];
  image?: string;
  body: ArticleBlock[];
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "faq"; question: string; answer: string }
  | { type: "cta"; text: string; href: string; label: string };

/**
 * 記事データ
 * 新しい記事を追加するときは、この配列の先頭に追加してください。
 * 公開日(date)の降順で並べてください。
 */
export const articles: Article[] = [
  {
    slug: "welding-experience-age",
    title: "溶接体験は何歳から？子どもが参加できる年齢とクラスの選び方",
    description:
      "溶接体験は6歳から参加可能。年齢別のおすすめクラス、安全対策、保護者同伴のルール、料金の目安を紹介。岩手県一関市 Black Smith。",
    date: "2026-11-01",
    category: "column",
    tags: ["溶接体験", "子ども", "親子", "年齢"],
    image: "/images/news/welding-age.jpg",
    body: [
      {
        type: "paragraph",
        text: "「溶接体験をやらせてみたいけど、うちの子の年齢で大丈夫？」——そんな疑問にお答えします。結論から言うと、Black Smithの溶接チャレンジは6歳から参加可能。安全講習と保護具の着用で、お子さんも安心して体験できます。",
      },
      { type: "heading", level: 2, text: "溶接体験の参加可能年齢はクラスで違う" },
      {
        type: "paragraph",
        text: "Black Smithには4つのクラスがあり、それぞれ対象年齢が異なります。",
      },
      {
        type: "list",
        items: [
          "溶接チャレンジ: 6歳〜（保護者同伴必須）— フック、スタンド等の小物を制作",
          "クリエイティブ: 12歳〜 — 棚、焚き火台等の実用品を制作",
          "マイデザイン: 12歳〜 — 完全オーダーメイドの設計から制作まで",
          "セルフリペア: 15歳〜 — 壊れた鉄製品の修理体験",
        ],
      },
      { type: "heading", level: 2, text: "なぜ6歳から参加できるのか？安全対策の仕組み" },
      {
        type: "paragraph",
        text: "溶接は火花が出る作業ですが、適切な保護具と指導があれば子どもでも安全に体験できます。Black Smithでは以下の安全対策を徹底しています。",
      },
      {
        type: "list",
        items: [
          "溶接マスク・革手袋・エプロンなど保護具はすべて無料貸出（子ども用サイズあり）",
          "体験前に必ず15分間の安全講習を実施",
          "スタッフが常にそばでマンツーマンサポート",
          "練習時間を設けてから本番に入るステップ式",
        ],
      },
      { type: "heading", level: 2, text: "年齢別おすすめの溶接体験" },
      { type: "heading", level: 3, text: "6〜11歳: 溶接チャレンジがおすすめ" },
      {
        type: "paragraph",
        text: "親子で一緒に参加できる溶接チャレンジは、アイアンフックやミニスタンド、キーホルダーなどの小物を制作します。1枠¥12,000で最大4名まで参加OK。家族で来れば1人あたり¥3,000とお手頃です。所要時間は約1時間〜。",
      },
      { type: "heading", level: 3, text: "12歳以上: クリエイティブで本格的な作品を" },
      {
        type: "paragraph",
        text: "中学生以上なら、棚やプランターラック、焚き火台など暮らしで使えるものを制作できるクリエイティブクラスがおすすめ。自由研究の作品としても評価が高く、「自分で作った」という実体験は大きな学びになります。",
      },
      { type: "heading", level: 2, text: "保護者が知っておきたいこと" },
      {
        type: "list",
        items: [
          "小学生以下のお子様は保護者の同伴が必須です",
          "汚れてもいい長袖・長ズボン・運動靴でお越しください",
          "完全予約制です。フォームかメールで事前にご予約ください",
          "当日キャンセルは料金の50%を申し受けます（前日までは無料）",
        ],
      },
      {
        type: "faq",
        question: "幼児（3〜5歳）は参加できますか？",
        answer:
          "基本的には6歳以上を推奨していますが、保護者と一緒に見学しながら簡単な作業を手伝うことは可能です。お気軽にご相談ください。",
      },
      {
        type: "faq",
        question: "夏休みの自由研究に使えますか？",
        answer:
          "はい、多くのご家族が自由研究の題材として溶接体験を選んでいます。制作過程の写真撮影もOKなので、レポート作りにも活用できます。",
      },
      {
        type: "cta",
        text: "溶接チャレンジの詳細を見る",
        href: "/courses#welding-challenge",
        label: "クラス詳細",
      },
      {
        type: "cta",
        text: "予約・お問い合わせはこちら",
        href: "/contact",
        label: "お問い合わせ",
      },
    ],
  },
  {
    slug: "welding-beginner-guide",
    title: "溶接初心者は何から始める？道具不要で始められる体験という選択肢",
    description:
      "溶接を始めたい初心者向けガイド。道具の購入は不要、手ぶらで体験できるBlack Smithの溶接チャレンジで基本を学べます。岩手県一関市。",
    date: "2026-11-08",
    category: "column",
    tags: ["溶接", "初心者", "始め方"],
    image: "/images/news/beginner-guide.jpg",
    body: [
      {
        type: "paragraph",
        text: "「溶接をやってみたいけど、何から始めればいいかわからない」——そう思っている方に、まずおすすめしたいのが溶接体験です。道具の購入も資格も不要。手ぶらで来て、プロに教わりながら実際に溶接を体験できます。",
      },
      { type: "heading", level: 2, text: "溶接を始めるのに資格は必要？" },
      {
        type: "paragraph",
        text: "趣味やDIYでの溶接に資格は不要です。JIS溶接技能者などの資格は、工場や建設現場で業務として溶接する場合に求められるもの。自分の作品を作るための溶接なら、誰でもすぐに始められます。",
      },
      { type: "heading", level: 2, text: "いきなり道具を買うのはもったいない" },
      {
        type: "paragraph",
        text: "溶接機は安いものでも数万円、保護具や作業台を揃えるとさらに費用がかかります。まず体験で「自分に合っているか」を確かめてから、道具の購入を検討するのが賢い選択です。",
      },
      { type: "heading", level: 2, text: "Black Smithの溶接体験なら手ぶらでOK" },
      {
        type: "list",
        items: [
          "溶接機・保護具・材料はすべて用意",
          "道具の持ち方から丁寧にレクチャー",
          "練習時間あり。いきなり本番ではありません",
          "作ったものはお持ち帰り。暮らしの中で使えます",
        ],
      },
      {
        type: "cta",
        text: "溶接体験のクラスを見る",
        href: "/courses",
        label: "クラス一覧",
      },
      {
        type: "cta",
        text: "予約・お問い合わせはこちら",
        href: "/contact",
        label: "お問い合わせ",
      },
    ],
  },
  {
    slug: "welding-experience-clothes",
    title: "溶接体験に行くときの服装・持ち物リスト｜手ぶらでOKな理由",
    description:
      "溶接体験の服装は長袖・長ズボン・運動靴でOK。保護具はすべて貸出。持ち物、NGな服装、当日の準備を解説。岩手県一関市 Black Smith。",
    date: "2026-11-15",
    category: "column",
    tags: ["溶接体験", "服装", "持ち物", "準備"],
    image: "/images/news/clothes.jpg",
    body: [
      {
        type: "paragraph",
        text: "溶接体験に行くとき、何を着ていけばいい？何を持っていけばいい？結論は「汚れてもいい長袖・長ズボン・運動靴」だけ。保護具はすべてBlack Smithで用意しています。",
      },
      { type: "heading", level: 2, text: "溶接体験の服装: これだけ守ればOK" },
      {
        type: "list",
        items: [
          "長袖のトップス（腕の露出を防ぐため）",
          "長ズボン（ジーンズやワークパンツが最適）",
          "運動靴またはスニーカー（サンダル・ヒールはNG）",
          "汚れてもいい服（火花で小さな穴が開くことがあります）",
        ],
      },
      { type: "heading", level: 2, text: "NGな服装" },
      {
        type: "list",
        items: [
          "半袖・タンクトップ（火花によるやけどの恐れ）",
          "化繊100%の素材（溶けやすいため。綿素材が安心）",
          "サンダル・ヒール（重いものの落下リスク）",
          "ひらひらした服（巻き込みの恐れ）",
        ],
      },
      { type: "heading", level: 2, text: "持ち物は基本的に不要" },
      {
        type: "paragraph",
        text: "溶接マスク、革手袋、エプロン、保護メガネなどの保護具はすべてBlack Smithで用意しています。材料も含まれているので、本当に手ぶらでOKです。作品を持ち帰る袋だけあると便利です。",
      },
      {
        type: "faq",
        question: "メガネをかけていても溶接できますか？",
        answer: "はい、メガネの上から溶接マスクを装着できます。コンタクトレンズでも問題ありません。",
      },
      {
        type: "cta",
        text: "予約・お問い合わせはこちら",
        href: "/contact",
        label: "お問い合わせ",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
