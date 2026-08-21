import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Marquee from "../components/sections/Marquee";
import Courses from "../components/sections/Courses";
import Flow from "../components/sections/Flow";
import Works from "../components/sections/Works";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import Access from "../components/sections/Access";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Marquee />
      <Courses />
      <Flow />
      <Works />
      <FAQ />
      <CTA />
      <Access />
    </>
  );
}
