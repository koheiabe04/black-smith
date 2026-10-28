import type { Metadata } from "next";
import { Noto_Sans_JP, Syne } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Black Smith｜溶接体験・鉄の加工体験アトリエ｜岩手県一関市",
  description:
    "岩手県一関市の溶接体験・鉄の加工体験アトリエ Black Smith。親子で楽しめる溶接チャレンジから、DIYアイアンワーク、オーダーメイド制作、セルフリペアまで。初心者歓迎・6歳から参加OK。東北で唯一の本格溶接ものづくり体験。",
  metadataBase: new URL("https://black-smith.jp"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Black Smith｜溶接体験・鉄の加工体験アトリエ｜岩手県一関市",
    description:
      "岩手県一関市の溶接体験アトリエ。親子で楽しめる溶接チャレンジ、DIYアイアンワーク、オーダーメイド制作まで。初心者歓迎・6歳から。",
    locale: "ja_JP",
    type: "website",
    url: "https://black-smith.jp",
    siteName: "Black Smith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Smith｜溶接体験・鉄の加工体験アトリエ｜岩手県一関市",
    description:
      "岩手県一関市の溶接体験アトリエ。親子OK・初心者歓迎。溶接チャレンジからオーダーメイド制作まで。",
  },
  verification: {
    google: "ArQ8ut6fk8PtxscwkDHKpClYKJxwklx62b82gQOQ_b0",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://black-smith.jp/#business",
  name: "Black Smith（ブラックスミス）",
  alternateName: "Black Smith 溶接体験アトリエ",
  description:
    "岩手県一関市の溶接・鉄の加工体験アトリエ。初心者から上級者まで、暮らしの中で使えるものづくりを体験できます。親子での溶接体験、DIYアイアンワーク、修理まで。",
  url: "https://black-smith.jp",
  email: "blacksmith.iwate@gmail.com",
  address: {
    "@type": "PostalAddress",
    postalCode: "021-0902",
    addressRegion: "岩手県",
    addressLocality: "一関市",
    streetAddress: "萩荘霜後241",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9345,
    longitude: 141.1268,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "16:00",
  },
  priceRange: "¥11,000〜¥50,000",
  image: "https://black-smith.jp/images/logo/logo.jpg",
  areaServed: [
    { "@type": "City", name: "一関市" },
    { "@type": "State", name: "岩手県" },
    { "@type": "AdministrativeArea", name: "東北地方" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "溶接・鉄の加工体験クラス",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "溶接チャレンジ",
          description:
            "初心者向けの溶接体験。6歳から参加可能。アイアンフックやミニスタンドなどを制作できます。",
          url: "https://black-smith.jp/courses#welding-challenge",
        },
        price: "12000",
        priceCurrency: "JPY",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "クリエイティブ",
          description:
            "暮らしに使える鉄のプロダクトを制作。棚、焚き火台、プランターラックなど。12歳から。",
          url: "https://black-smith.jp/courses#creative",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "11000",
          priceCurrency: "JPY",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "マイデザイン",
          description:
            "完全オーダーメイドの鉄製品を設計から制作まで。世界にひとつだけの作品を。12歳から。",
          url: "https://black-smith.jp/courses#my-design",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "50000",
          priceCurrency: "JPY",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "セルフリペア",
          description:
            "壊れた鉄製品を自分の手で修理する体験。椅子の脚、フェンス、農具など。15歳から。",
          url: "https://black-smith.jp/courses#self-repair",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "11000",
          priceCurrency: "JPY",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${syne.variable}`}>
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="noise min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--forge)] focus:text-[var(--black)] focus:px-6 focus:py-3 focus:text-sm focus:font-bold"
        >
          コンテンツへスキップ
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
