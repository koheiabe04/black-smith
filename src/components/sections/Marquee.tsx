export default function Marquee() {
  return (
    <div aria-hidden="true" className="relative py-10 md:py-14 overflow-hidden select-none bg-[var(--charcoal)] border-y border-[var(--iron)]/50">
      {/* Row 1 — giant, slow */}
      <div className="flex whitespace-nowrap animate-[marquee_50s_linear_infinite]">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="font-display text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold tracking-tighter text-[var(--iron)]/60 mx-4">
            CUT <span className="text-[var(--forge)]/20 text-[0.6em]">●</span> WELD <span className="text-[var(--forge)]/20 text-[0.6em]">●</span> SHAPE <span className="text-[var(--forge)]/20 text-[0.6em]">●</span> CREATE <span className="text-[var(--forge)]/20 text-[0.6em]">●</span> REPAIR <span className="text-[var(--forge)]/20 text-[0.6em]">●</span> FORGE&nbsp;&nbsp;
          </span>
        ))}
      </div>

      {/* Row 2 — smaller, reverse, different content */}
      <div className="flex whitespace-nowrap animate-[marqueeReverse_35s_linear_infinite] mt-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="font-display text-sm md:text-base font-semibold tracking-[0.4em] text-[var(--steel)]/60 mx-5">
            FORGED IN IWATE&nbsp;&nbsp;●&nbsp;&nbsp;HANDS ON&nbsp;&nbsp;●&nbsp;&nbsp;MAKE IT YOURS&nbsp;&nbsp;●&nbsp;&nbsp;MADE BY HAND&nbsp;&nbsp;●&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
