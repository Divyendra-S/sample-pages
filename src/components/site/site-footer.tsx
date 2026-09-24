import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const navGroups = [
  { title: "Platform", links: ["Datasys360", "Why Datasys360", "Pricing"] },
  {
    title: "Data & Identity Products",
    links: [
      "Data Products Overview",
      "Identity Graph & Linkage",
      "Digital Signals & Intent",
      "Predictive & Modeled Data",
      "Data Enrichment",
      "Data Licensing & Delivery",
    ],
  },
  {
    title: "Trust & Responsibility",
    links: [
      "Trust center",
      "Responsible Data Practices",
      "Data Privacy",
      "Security",
      "Compliance",
      "Your privacy choices",
    ],
  },
  {
    title: "Company",
    links: ["About Datasys", "Leadership", "Partners", "Careers", "Contact"],
  },
];

const routes: Record<string, string> = {
  "Trust center": "/",
  Compliance: "/compliance",
};

const legalLinks = [
  "Privacy",
  "Your Privacy Choices",
  "Terms & Conditions",
  "Employment",
  "Cookie preferences",
];

const socials = [
  { name: "Facebook", icon: "/site/social/facebook.svg" },
  { name: "Instagram", icon: "/site/social/instagram.svg" },
  { name: "X", icon: "/site/social/x.svg" },
];

function FooterRow({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-white/9">
      <div className="lg:mx-16 lg:border-x lg:border-white/9">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-coal text-white">
      <FooterRow>
        <div className="flex items-center justify-between gap-6 px-4 pt-10 pb-6 sm:px-6 lg:pt-[50px] lg:pr-11 lg:pl-9">
          <div className="flex flex-col gap-1.5">
            <p className="font-serif text-[28px] leading-none font-bold tracking-[-0.01em]">
              Datasys
            </p>
            <p className="leading-[27px] tracking-[-0.0225em] text-[#acafb9]">
              ©2026 Datasys. Handcrafted with ❤️
            </p>
          </div>
          <a
            href="#top"
            aria-label="Back to top"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <Image
              src="/site/icon-back-to-top.svg"
              alt=""
              width={42}
              height={42}
            />
          </a>
        </div>
      </FooterRow>

      <FooterRow>
        <nav
          aria-label="Footer"
          className="grid grid-cols-1 gap-10 px-4 py-8 sm:grid-cols-2 sm:px-8 lg:flex lg:justify-between"
        >
          {navGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h3 className="font-mono text-sm leading-5 tracking-[-0.02em] text-soft uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2 leading-6 font-light tracking-[-0.011em]">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={routes[link] ?? "#"}
                      className="transition-colors hover:text-white/70"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </FooterRow>

      <FooterRow>
        <div className="flex flex-col lg:min-h-[86px] lg:flex-row">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 px-4 py-6 leading-6 font-light tracking-[-0.011em] sm:px-6 lg:min-w-[660px] lg:shrink-0 lg:border-r lg:border-white/9 lg:py-2.5">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center gap-2 transition-colors hover:text-white/70"
                >
                  {link}
                  {link === "Your Privacy Choices" && (
                    <Image
                      src="/site/privacy-choices.png"
                      alt=""
                      width={46}
                      height={20}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 border-t border-white/9 px-4 py-6 sm:px-6 lg:flex-1 lg:justify-end lg:border-t-0 lg:py-2.5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="block transition-opacity hover:opacity-70"
                >
                  {/* The exported icons are dark; Figma renders them white. */}
                  <Image
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FooterRow>
    </footer>
  );
}
