import { Camera } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="bg-ivory text-ink">
      <div className="container-site grid items-center gap-16 py-[clamp(5rem,10vw,8.5rem)] lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <Reveal>
          <p className="kicker text-gold">About me</p>
          <h2 className="mt-5 font-serif font-medium leading-[1.05] tracking-tight text-[clamp(2.1rem,5vw,3.75rem)]">
            A storyteller behind <em className="italic text-gold">the camera</em>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70">
            <p>
              Photography began for me as a way of holding on to moments — the
              quiet ones and the overwhelming ones alike. Today it is my
              language: every wedding, every portrait, every celebration is a
              story waiting to be told honestly.
            </p>
            <p>
              I believe in light that feels natural, emotions that never feel
              posed, and images that will feel just as alive in twenty years as
              they do today. My work is minimal interference, maximum feeling.
            </p>
          </div>

          <div className="mt-10 flex items-end gap-5">
            <span className="font-script text-[3.25rem] leading-none text-gold">
              Abhi
            </span>
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-ink/50">
              — Photographer
            </span>
          </div>
        </Reveal>

        {/* Portrait */}
        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div className="absolute -inset-4 translate-x-5 translate-y-5 border border-gold/60" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/ABOUT.png"
                alt="Abhi, photographer behind the camera"
                width={708}
                height={843}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Experience card */}
            <div className="absolute -left-4 -top-6 flex items-center gap-4 rounded-2xl bg-coal px-5 py-4 text-ivory shadow-[0_28px_60px_-20px_rgba(0,0,0,0.55)] sm:-left-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Camera size={17} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-3xl font-medium leading-none text-gold">
                  7+
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-ivory/60">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
