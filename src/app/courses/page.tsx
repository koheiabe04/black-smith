import type { Metadata } from "next";
import Link from "next/link";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "溶接体験クラス・料金一覧｜Black Smith｜岩手県一関市",
  description:
    "溶接チャレンジ（¥12,000〜/6歳OK）、クリエイティブ、マイデザイン、セルフリペアの4クラス。初心者歓迎・親子参加OK。料金・対象年齢・所要時間を比較して、あなたにぴったりの溶接体験を見つけてください。",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "溶接体験クラス・料金一覧｜Black Smith｜岩手県一関市",
    description:
      "溶接チャレンジ、クリエイティブ、マイデザイン、セルフリペアの4クラス。初心者歓迎・親子参加OK。料金・対象年齢・所要時間を比較。",
    url: "https://black-smith.jp/courses",
    images: [
      {
        url: "https://black-smith.jp/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Black Smith 溶接体験クラス紹介",
      },
    ],
  },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
