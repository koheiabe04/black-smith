import type { Metadata } from "next";
import Link from "next/link";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "クラス紹介｜Black Smith",
  description:
    "溶接チャレンジ、クリエイティブ、マイデザイン、セルフリペア — 4つのクラスで、あなたのものづくりを始めましょう。初心者から経験者まで、それぞれのレベルに合わせた体験をご用意しています。",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "クラス紹介｜Black Smith",
    description:
      "溶接チャレンジ、クリエイティブ、マイデザイン、セルフリペア — 4つのクラスで、あなたのものづくりを始めましょう。",
    url: "https://black-smith.jp/courses",
    images: [
      {
        url: "https://black-smith.jp/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Black Smith クラス紹介",
      },
    ],
  },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
