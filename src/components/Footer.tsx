import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/courses" },
  { label: "Works", href: "/#works" },
  { label: "FAQ", href: "/#faq" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "https://docs.google.com/forms/d/e/1FAIpQLSf1E1xx1djBqwg0tZk1DzpNR9vwyFJBE00UDEFnHPJkwb-zEw/viewform?usp=dialog" },
];

const socials = [
  { label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LINE", icon: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" },
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
              <p className="font-display text-base tracking-wider text-[var(--ash)]">blacksmith.iwate@gmail.com</p>
            </div>
            <div className="mt-6 text-sm text-[var(--steel)] space-y-1">
              <p>〒021-0902 岩手県一関市萩荘霜後２４１</p>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-10">
              {socials.map((s) => (
                <span key={s.label} aria-label={s.label} className="w-10 h-10 border border-[var(--iron)] flex items-center justify-center text-[var(--steel)] cursor-default" title={`${s.label}（準備中）`}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
              {links.map((l) => {
                const isExternal = l.href.startsWith("http");
                const className = "font-display text-[11px] tracking-[0.2em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors duration-300 font-bold";
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
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              <Link href="/privacy" className="font-display text-[11px] tracking-[0.2em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="/legal" className="font-display text-[11px] tracking-[0.2em] text-[var(--steel)] hover:text-[var(--cream)] transition-colors">
                LEGAL
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--iron)]/50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[var(--steel)]">&copy; (有)光成工業</p>
          <span className="font-display text-[9px] tracking-[0.3em] text-[var(--iron)]">FORGED IN IWATE</span>
        </div>
      </div>
    </footer>
  );
}
