"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/courses" },
  { label: "Works", href: "/#works" },
  { label: "FAQ", href: "/#faq" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[var(--black)]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <Image src="/images/logo/logo.png" alt="Black Smith" width={120} height={32} className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-[11px] font-semibold tracking-[0.25em] text-[var(--ash)] hover:text-[var(--cream)] transition-colors duration-300 link-slide"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 font-display text-[11px] font-bold tracking-[0.2em] text-[var(--black)] bg-[var(--forge)] px-7 py-3 hover:bg-[var(--ember)] transition-colors duration-300"
            >
              CONTACT
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 z-[60] flex items-center justify-center"
            aria-label="メニュー"
          >
            <div className="relative w-6 h-4">
              <span className={`absolute left-0 w-full h-[1.5px] bg-[var(--cream)] transition-all duration-300 origin-center ${open ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[7px] w-full h-[1.5px] bg-[var(--cream)] transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-[var(--cream)] transition-all duration-300 origin-center ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-[var(--black)] transition-all duration-600 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 grid-texture" />

        <div className="relative flex flex-col justify-center h-full px-10">
          <nav className="space-y-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block group"
                style={{
                  transitionDelay: open ? `${100 + i * 70}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(30px)",
                  opacity: open ? 1 : 0,
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div className="flex items-baseline gap-4 py-3 border-b border-[var(--iron)]">
                  <span className="font-display text-xs text-[var(--forge)] font-bold w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--cream)] tracking-tight group-hover:text-[var(--forge)] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-12 inline-flex self-start font-display text-sm font-bold tracking-[0.2em] text-[var(--black)] bg-[var(--forge)] px-10 py-4"
            style={{
              transitionDelay: open ? "500ms" : "0ms",
              opacity: open ? 1 : 0,
              transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            CONTACT →
          </Link>

          <div
            className="absolute bottom-8 left-10 text-[var(--steel)] text-xs"
            style={{ opacity: open ? 1 : 0, transition: "opacity 0.6s 600ms" }}
          >
            <p className="font-display tracking-wider">blacksmith.iwate@gmail.com</p>
            <p className="mt-1 text-[var(--iron)]">岩手県一関市萩荘霜後２４１</p>
          </div>
        </div>
      </div>
    </>
  );
}
