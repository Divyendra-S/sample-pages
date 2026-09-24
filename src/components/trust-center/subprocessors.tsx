import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionCard } from "./section-card";

const regions = {
  EU: "/flags/eu.svg",
  US: "/flags/us.svg",
};

type Subprocessor = {
  name: string;
  logo: { src: string; width: number; height: number; fill?: boolean };
  purpose: string;
  data: string;
  region: keyof typeof regions;
  reference: { label: string; href?: string };
};

const subprocessors: Subprocessor[] = [
  {
    name: "Vercel",
    logo: {
      src: "/trust-center/subprocessors/vercel.svg",
      width: 8,
      height: 8,
    },
    purpose: "Server hosting",
    data: "IP, Browser & Device Information",
    region: "EU",
    reference: { label: "DPA", href: "https://vercel.com/legal/dpa" },
  },
  {
    name: "AWS",
    logo: { src: "/trust-center/subprocessors/aws.svg", width: 13, height: 3 },
    purpose: "Document storage",
    data: "Documents",
    region: "EU",
    reference: {
      label: "DPA",
      href: "https://docs.aws.amazon.com/whitepapers/latest/navigating-gdpr-compliance/aws-data-processing-addendum-dpa.html",
    },
  },
  {
    name: "PostHog EU",
    logo: {
      src: "/trust-center/subprocessors/posthog.svg",
      width: 9,
      height: 5,
    },
    purpose: "Product analytics",
    data: "Anon. IP, Browser & Device Information",
    region: "EU",
    reference: {
      label: "Security & DPA",
      href: "https://posthog.com/handbook/company/security",
    },
  },
  {
    name: "Stripe",
    logo: {
      src: "/trust-center/subprocessors/stripe.svg",
      width: 10,
      height: 10,
    },
    purpose: "Payment processing",
    data: "Billing Information",
    region: "US",
    reference: { label: "DPA", href: "https://stripe.com/legal/dpa" },
  },
  {
    name: "Plausible",
    logo: {
      src: "/trust-center/subprocessors/plausible.png",
      width: 12,
      height: 12,
    },
    purpose: "Website analytics",
    data: "Anon. IP, Browser & Device Information",
    region: "EU",
    reference: { label: "DPA", href: "https://plausible.io/dpa" },
  },
  {
    name: "Resend",
    logo: {
      src: "/trust-center/subprocessors/resend.svg",
      width: 11,
      height: 12,
    },
    purpose: "Email sending",
    data: "Email addresses",
    region: "EU",
    reference: { label: "DPA", href: "https://resend.com/legal/dpa" },
  },
  {
    name: "Upstash",
    logo: {
      src: "/trust-center/subprocessors/upstash.png",
      width: 20,
      height: 20,
    },
    purpose: "Redis caching & queuing infrastructure",
    data: "Temporary data & queue information",
    region: "EU",
    reference: { label: "Trust centre" },
  },
];

const columns = [
  { label: "Subprocessor", className: "w-[147px]" },
  { label: "Purpose", className: "w-[261px]" },
  { label: "Data", className: "w-[284px]" },
  { label: "Location", className: "w-[83px]" },
  { label: "Reference", className: "w-[135px]" },
];

const cell = "h-[52px] px-3 align-middle";

export function Subprocessors() {
  return (
    <SectionCard
      id="subprocessors"
      title="Subprocessors"
      icon="/trust-center/icon-network.svg"
      className="gap-6"
    >
      <div className="overflow-x-auto border border-stroke-soft">
        <table className="w-full min-w-[760px] table-fixed text-left text-sm leading-5 tracking-[-0.006em]">
          <thead className="border-b border-stroke-soft bg-weak">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.label}
                  scope="col"
                  className={cn(
                    "px-3 py-2 font-medium text-strong",
                    column.className,
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stroke-soft">
            {subprocessors.map((sp) => (
              <tr key={sp.name}>
                <th scope="row" className={cn(cell, "font-medium text-strong")}>
                  <span className="flex items-center gap-2.5">
                    <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black">
                      <Image
                        src={sp.logo.src}
                        alt=""
                        width={sp.logo.width}
                        height={sp.logo.height}
                      />
                    </span>
                    <span className="truncate">{sp.name}</span>
                  </span>
                </th>
                <td
                  className={cn(cell, "truncate text-body")}
                  title={sp.purpose}
                >
                  {sp.purpose}
                </td>
                <td className={cn(cell, "truncate text-body")} title={sp.data}>
                  {sp.data}
                </td>
                <td className={cn(cell, "text-body")}>
                  <span className="flex items-center gap-2">
                    <Image
                      src={regions[sp.region]}
                      alt=""
                      width={20}
                      height={20}
                    />
                    {sp.region}
                  </span>
                </td>
                <td className={cn(cell, "font-medium text-strong")}>
                  {sp.reference.href ? (
                    <a
                      href={sp.reference.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      {sp.reference.label}
                    </a>
                  ) : (
                    sp.reference.label
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
