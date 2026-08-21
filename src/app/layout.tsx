import type { Metadata } from "next";
import { Noto_Sans_JP, Syne } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

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
  title: "Black Smith｜溶接・鉄の加工体験アトリエ",
  description:
    "岩手県一関市の溶接・鉄の加工体験アトリエ Black Smith。欲しければ、作る。壊れたら、直す。初心者から上級者まで、暮らしの中で使えるものづくりを体験できます。",
  metadataBase: new URL("https://black-smith.jp"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Black Smith｜溶接・鉄の加工体験アトリエ",
    description:
      "岩手県一関市の溶接・鉄の加工体験アトリエ。欲しければ、作る。壊れたら、直す。",
    locale: "ja_JP",
    type: "website",
    url: "https://black-smith.jp",
    siteName: "Black Smith",
    images: [
      {
        url: "https://black-smith.jp/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Black Smith — 溶接・鉄の加工体験アトリエ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Smith｜溶接・鉄の加工体験アトリエ",
    description:
      "岩手県一関市の溶接・鉄の加工体験アトリエ。欲しければ、作る。壊れたら、直す。",
    images: ["https://black-smith.jp/images/logo/logo.jpg"],
  },
  verification: {
    google: "ArQ8ut6fk8PtxscwkDHKpClYKJxwklx62b82gQOQ_b0",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Black Smith",
  description:
    "岩手県一関市の溶接・鉄の加工体験アトリエ。初心者から上級者まで、暮らしの中で使えるものづくりを体験できます。",
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
  priceRange: "$$",
  image: "https://black-smith.jp/images/logo/logo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${syne.variable}`}>
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
