"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICE_ITEMS } from "@/data/site";
import { SectionHeading } from "./section-heading";

const ROTATE_MS = 5000;
const CARD_W = "min(300px, 65vw)";
const CARD_H = "min(400px, 87vw)";

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragX = useRef<number | null>(null);
  const n = SERVICE_ITEMS.length;

  const go = useCallback(
    (i: number) => {
      setActive(((i % n) + n) % n);
    },
    [n],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(active + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [active, paused, go]);

  return (
    <section
      id="services"
      className="bg-ink text-ivory"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="container-site py-[clamp(5rem,10vw,8.5rem)]">
        <SectionHeading
          kicker="Services"
          title="What I do"
          tone="dark"
          className="items-center text-center"
        />

        <div
          className="relative mx-auto mt-16 h-[min(400px,87vw)]"
          style={{ perspective: 1400, touchAction: "pan-y" }}
          onPointerDown={(e) => {
            dragX.current = e.clientX;
            setDragging(true);
          }}
          onPointerMove={() => {
            if (dragX.current !== null) setPaused(true);
          }}
          onPointerUp={(e) => {
            if (dragX.current === null) return;
            const dx = e.clientX - dragX.current;
            if (dx < -40) go(active + 1);
            if (dx > 40) go(active - 1);
            dragX.current = null;
            setDragging(false);
          }}
          onPointerCancel={() => {
            dragX.current = null;
            setDragging(false);
          }}
          onPointerLeave={() => setDragging(false)}
        >
          {SERVICE_ITEMS.map((service, i) => {
            const diff = ((i - active) % n + n) % n;
            const offset = diff > n / 2 ? diff - n : diff;
            const abs = Math.abs(offset);
            const hidden = abs > 2;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`View ${service.title}`}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  transform: `translateX(calc(-50% + ${offset * 62}%)) rotateY(${offset * -32}deg) scale(${1 - abs * 0.14})`,
                  opacity: hidden ? 0 : 1 - abs * 0.35,
                  zIndex: 20 - abs * 5,
                  transition: "all 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                className={`absolute left-1/2 top-0 ${
                  hidden
                    ? "pointer-events-none"
                    : dragging
                      ? "cursor-grabbing"
                      : "cursor-grab"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 300px, 65vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-coal to-[#1c1812]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left sm:p-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                      {service.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/50">
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory/80 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
            {SERVICE_ITEMS.map((service, i) => (
              <button
                key={service.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to ${service.title}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory/80 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
