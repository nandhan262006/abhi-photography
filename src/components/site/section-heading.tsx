import { Heart } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  align?: "left" | "center";
  divider?: "line" | "heart" | "none";
  tone?: "dark" | "light";
  className?: string;
};

/** Editorial section heading with kicker, serif title and optional divider. */
export function SectionHeading({
  kicker,
  title,
  align = "left",
  divider = "none",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <p className="kicker text-gold">{kicker}</p>
      <h2
        className={`mt-5 font-serif font-medium leading-[1.05] tracking-tight text-[clamp(2.1rem,5vw,3.75rem)] ${
          tone === "dark" ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {divider === "line" && (
        <div className={`mt-7 h-px w-14 ${tone === "dark" ? "bg-gold" : "bg-gold"}`} aria-hidden />
      )}

      {divider === "heart" && (
        <div className="mt-7 flex items-center gap-4" aria-hidden>
          <span className={`h-px w-16 ${tone === "dark" ? "bg-ivory/25" : "bg-ink/20"}`} />
          <Heart size={15} className={tone === "dark" ? "text-gold" : "text-gold"} strokeWidth={1.75} />
          <span className={`h-px w-16 ${tone === "dark" ? "bg-ivory/25" : "bg-ink/20"}`} />
        </div>
      )}
    </Reveal>
  );
}
