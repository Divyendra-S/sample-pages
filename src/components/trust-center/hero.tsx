import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

function HeroPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-[-42.5px] hidden size-[500px] mix-blend-lighten md:block",
        className,
      )}
    >
      <Image
        src="/trust-center/hero-pattern.png"
        alt=""
        fill
        sizes="500px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-l from-night to-night/0" />
    </div>
  );
}

const links = [
  {
    href: "mailto:contact@datasys.com",
    label: "contact@datasys.com",
    icon: "/trust-center/icon-mail.svg",
  },
  { href: "#", label: "Privacy Policy", icon: "/trust-center/icon-link.svg" },
];

export function Hero() {
  return (
    <section className="pt-10">
      <Container>
        <div className="relative isolate flex min-h-[415px] flex-col items-center justify-center overflow-hidden bg-night px-6 py-16 text-center sm:py-[100px]">
          <HeroPattern className="left-[-230px]" />
          <HeroPattern className="right-[-262px] -scale-x-100" />

          <div className="relative flex max-w-[451px] flex-col items-center gap-11">
            <div className="flex flex-col items-center gap-4">
              <p className="border-t border-white/12 pt-[7px] font-mono text-[13px] leading-normal tracking-[0.01em] text-white/70 uppercase">
                Last updated: February, 2026
              </p>
              <div className="flex flex-col items-center gap-2.5">
                <h1 className="max-w-[421px] font-serif text-[32px] leading-[1.2] tracking-[-0.06em] text-balance text-white sm:text-[44px]">
                  Trust is built into every layer of Datasys
                </h1>
                <p className="leading-normal text-white/70">
                  This Trust Center provides a transparent view into our
                  security, privacy, compliance, and responsible data practices.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-[23px] gap-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    <Image src={link.icon} alt="" width={24} height={24} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
