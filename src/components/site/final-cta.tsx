import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="bg-ink text-center text-ivory">
      <Reveal className="relative aspect-[16/7] min-h-[360px] w-full overflow-hidden">
        <video
          className="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 -rotate-90 object-cover lg:w-[56.25%]"
          src="/quotation.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink/90"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10">
            <p className="kicker text-gold">Let&apos;s work together</p>
            <h2 className="mt-5 font-serif font-medium leading-[1.08] tracking-tight text-[clamp(1.9rem,6vw,3.5rem)]">
              Let&apos;s create something{" "}
              <em className="italic text-gold">timeless</em>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/70">
              Your story deserves to be remembered. Tell me about your day — I&apos;ll
              take care of the rest.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-[#d8ad63]"
              >
                Book your date
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center border border-white/25 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                View services
              </a>
            </div>
          </div>
      </Reveal>
    </section>
  );
}
