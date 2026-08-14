"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "./brand-icons";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/919876543210", Icon: WhatsAppIcon },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-ivory">
      {/* Image block */}
      <div className="relative h-screen min-h-[460px] w-full lg:min-h-[620px]">
        <Image
          src="/herodesktop.png"
          alt="Cinematic wedding photograph"
          fill
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
          loading="eager"
          fetchPriority="high"
        />
        <Image
          src="/hero.png"
          alt="Cinematic wedding photograph"
          fill
          sizes="100vw"
          className="object-cover object-[50%_18%] lg:hidden"
          loading="eager"
          fetchPriority="high"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" />

        {/* Desktop content */}
        <div className="absolute inset-x-0 bottom-0 hidden pb-24 lg:block">
          <div className="container-site">
            <HeroContent />
          </div>
        </div>

        {/* Mobile content overlay */}
        <div className="absolute inset-x-0 top-0 pt-52 lg:hidden">
          <div className="container-site">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="max-w-2xl">
      <motion.p {...fadeUp(0)} className="kicker text-gold">
        Cinematic Wedding &amp; Portrait Photography
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        className="mt-6 font-serif font-medium leading-[1.03] text-[clamp(2.8rem,6.5vw,5.75rem)]"
      >
        Every moment
        <br />
        tells a story.
      </motion.h1>

      <motion.p
        {...fadeUp(0.3)}
        className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
      >
        Fine-art weddings, intimate pre-wedding shoots and honest portraits —
        crafted with cinematic light and real emotion, in every single frame.
      </motion.p>

      <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-[#d8ad63]"
        >
          Explore my work
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <a
          href="#about"
          className="inline-flex items-center border border-white/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          About me
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.6)} className="mt-12 flex items-center gap-6">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 text-[11px] uppercase tracking-[0.24em] text-ivory/60 transition-colors hover:text-gold"
            aria-label={label}
          >
            <Icon
              size={18}
              className="transition-colors group-hover:text-gold"
            />
            {label}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
