import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/courses" },
  { label: "Works", href: "/#works" },
  { label: "FAQ", href: "/#faq" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--black)] border-t border-[var(--iron)] relative">
      {/* Caution stripe */}
      <div className="h-[4px] caution-stripe" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-20">
          {/* Left */}
          <div>
            <Link href="/" className="group">
              <Image src="/images/logo/logo.png" alt="Black Smith" width={120} height={32} className="h-8 w-auto object-contain" />
            </Link>

            <div className="mt-10 space-y-2 text-sm text-[var(--steel)]">
              <p>受付時間 09:00〜16:00（土日祝を除く）</p>
              <p><a href="mailto:blacksmith.iwate@gmail.com" className="inline-block py-1 font-display text-base tracking-wider text-[var(--ash)] hover:text-[var(--cream)] transition-colors">blacksmith.iwate@gmail.com</a></p>
            </div>
            <div className="mt-6 text-sm text-[var(--steel)] space-y-1">
              <p>〒021-0902 岩手県一関市萩荘霜後241</p>
            </div>

            {/* Social（開設済みのアカウントのみ掲載） */}
            <div className="flex gap-2 mt-10">
              <a
                href="https://www.instagram.com/blacksmith_iwate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram（新しいタブで開きます）"
                className="w-11 h-11 border border-[var(--iron)] flex items-center justify-center text-[var(--steel)] hover:text-[var(--cream)] hover:border-[var(--forge)]/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right */}
          <div className="md:text-right">
            <nav aria-label="フッターメニュー" className="flex flex-wrap gap-x-6 gap-y-1 md:justify-end">
              {links.map((l) => {
                const isExternal = l.href.startsWith("http");
                const className = "inline-block py-3 font-display text-[12px] tracking-[0.2em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors duration-300 font-bold";
                return isExternal ? (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {l.label.toUpperCase()}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href} className={className}>
                    {l.label.toUpperCase()}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 md:justify-end">
              <Link href="/privacy" className="inline-block py-3 text-[12px] tracking-[0.05em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/legal" className="inline-block py-3 text-[12px] tracking-[0.05em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--iron)]/50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[var(--steel)]">&copy; (有)光成工業</p>
          <span className="font-display text-[10px] tracking-[0.3em] text-[var(--iron)]">FORGED IN IWATE</span>
        </div>
      </div>
    </footer>
  );
}
