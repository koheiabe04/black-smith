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

export default function Home() {
  return (
    <>
      <Hero />
      <LocalFree />
      <About />
      <Features />
      <Marquee />
      <Courses />
      <Flow />
      <Works />
      <NewsSection />
      <FAQ />
      <CTA />
      <Access />
    </>
  );
}
