"use client";

import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Gallery({ full = false }: { full?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const n = GALLERY_IMAGES.length;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: number) => {
      setSelected((cur) =>
        cur === null ? cur : (cur + dir + n) % n,
      );
    },
    [n],
  );

  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close, step]);

  return (
    <section id="gallery" className={`bg-ivory text-ink ${full ? "pt-[clamp(6rem,10vw,9rem)]" : ""}`}>
      {full && (
        <div className="container-site pb-10">
          <SectionHeading
            kicker="Gallery"
            title="The full gallery"
            align="center"
            divider="heart"
          />
        </div>
      )}

      <div className="container-site columns-2 gap-0 sm:columns-3 lg:columns-4">
        {GALLERY_IMAGES.map((item, i) => (
          <Reveal
            key={i}
            delay={(i % 4) * 0.08}
            className="break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-label={`Open ${item.alt} ${i + 1}`}
              className="block w-full cursor-zoom-in overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-[1200ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {!full && (
        <div className="container-site mt-12 flex justify-center pb-[clamp(5rem,10vw,8.5rem)]">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View full gallery
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${selected + 1} of ${n}`}
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 sm:p-6">
            <span className="pl-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory/60">
              {selected + 1} / {n}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory transition-colors hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="relative h-full max-h-[78vh] w-full max-w-5xl">
              <Image
                src={GALLERY_IMAGES[selected].image}
                alt={GALLERY_IMAGES[selected].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
