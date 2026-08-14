"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "./brand-icons";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-500 hover:scale-105 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        <WhatsAppIcon size={20} />
      </span>
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] sm:block">
        Chat with us
      </span>
    </a>
  );
}
