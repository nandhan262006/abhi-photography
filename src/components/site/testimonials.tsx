"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/site";
import { SectionHeading } from "./section-heading";

const ROTATE_MS = 6500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const t = TESTIMONIALS[index];

  return (
    <section
      className="bg-ivory text-ink"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="container-site py-[clamp(5rem,10vw,8.5rem)]">
        <SectionHeading
          kicker="Testimonials"
          title="Kind words"
          align="center"
          divider="line"
        />

        <div
          className="mx-auto mt-14 max-w-3xl cursor-pointer text-center"
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx < -40) go(index + 1);
            if (dx > 40) go(index - 1);
            touchX.current = null;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                aria-hidden
                className="block font-serif text-[5.5rem] leading-[0.6] text-gold"
              >
                &ldquo;
              </span>
              <p className="font-serif text-2xl font-light leading-snug text-ink sm:text-[1.7rem]">
                {t.quote}
              </p>
              <footer className="mt-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                  — {t.name}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
