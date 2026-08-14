import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./brand-icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const CONTACT_ITEMS = [
  { label: "Phone", value: CONTACT.phone, Icon: Phone },
  { label: "Email", value: CONTACT.email, Icon: Mail },
  { label: "Location", value: CONTACT.location, Icon: MapPin, href: CONTACT.maps },
];

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: CONTACT.whatsapp, Icon: WhatsAppIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ivory text-ink">
      <div className="container-site py-[clamp(5rem,10vw,8.5rem)]">
        <SectionHeading
          kicker="Let's connect"
          title="Get in touch"
          align="center"
          divider="line"
        />

        <Reveal className="mx-auto mt-14 max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ul className="space-y-8">
                {CONTACT_ITEMS.map(({ label, value, Icon, href }) => (
                  <li key={label} className="flex items-center gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Icon size={19} strokeWidth={1.5} />
                    </span>
                    <div className="text-left">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/45">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block font-serif text-2xl font-medium underline-offset-4 transition-colors hover:text-gold hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 font-serif text-2xl font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center gap-4">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)]">
              <iframe
                src={CONTACT.mapEmbed}
                title="Abhi Photography location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="min-h-[360px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
