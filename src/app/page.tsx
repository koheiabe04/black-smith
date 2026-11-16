import type { Metadata } from "next";
import Hero from "../components/sections/Hero";
import LocalFree from "../components/sections/LocalFree";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Marquee from "../components/sections/Marquee";
import Courses from "../components/sections/Courses";
import Flow from "../components/sections/Flow";
import Works from "../components/sections/Works";
import NewsSection from "../components/sections/NewsSection";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import Access from "../components/sections/Access";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Marquee />
      <Courses />
      <Flow />
      <LocalFree />
      <Works />
      <NewsSection />
      <FAQ />
      <CTA />
      <Access />
    </>
  );
}
