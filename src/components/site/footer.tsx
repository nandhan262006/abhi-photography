import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { BackToTop } from "./back-to-top";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505] text-ivory">
      <div className="container-site flex flex-col items-center pb-8 pt-16 text-center">
        <Image
          src="/logo.png"
          alt="Abhi Photography"
          width={176}
          height={68}
          className="h-14 w-auto object-contain"
          loading="lazy"
        />

        <p className="mt-5 max-w-sm font-serif text-lg italic text-ivory/55">
          Khammam&apos;s most trusted photographer — capturing moments, creating
          memories that last a lifetime.
        </p>

        <nav aria-label="Footer">
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/60 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 grid w-full max-w-3xl gap-6 border-t border-white/10 pt-8 text-left sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin size={17} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
            <p className="text-xs leading-relaxed text-ivory/60">{CONTACT.address}</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={17} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-xs leading-relaxed text-ivory/60 transition-colors hover:text-gold"
            >
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={17} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
            <p className="text-xs leading-relaxed text-ivory/60">{CONTACT.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-site py-6 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/35">
          © {new Date().getFullYear()} Abhi Photography · Khammam, Telangana. All
          rights reserved.
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}
