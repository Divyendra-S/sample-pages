import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionCard } from "./section-card";

const regions = {
  EU: "/flags/eu.svg",
  US: "/flags/us.svg",
};

type Subprocessor = {
  name: string;
  logo: { src: string; width: number; height: number };
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
  { label: "Subprocessor", className: "lg:w-[16%]" },
  { label: "Purpose", className: "lg:w-[29%]" },
  { label: "Data", className: "lg:w-[31%]" },
  { label: "Location", className: "lg:w-[9%]" },
  { label: "Reference", className: "lg:w-[15%]" },
];

const cell = "h-[52px] px-3 py-2 align-middle";

function Name({ subprocessor }: { subprocessor: Subprocessor }) {
  const { logo } = subprocessor;

  return (
    <span className="flex items-center gap-2.5 font-medium text-strong">
      <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black">
        <Image src={logo.src} alt="" width={logo.width} height={logo.height} />
      </span>
      <span className="lg:truncate">{subprocessor.name}</span>
    </span>
  );
}

function Region({ region }: { region: Subprocessor["region"] }) {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap text-body">
      <Image src={regions[region]} alt="" width={20} height={20} />
      {region}
    </span>
  );
}

function Reference({ reference }: { reference: Subprocessor["reference"] }) {
  if (!reference.href) return reference.label;

  return (
    <a
      href={reference.href}
      target="_blank"
      rel="noreferrer"
      className="underline-offset-2 hover:underline"
    >
      {reference.label}
    </a>
  );
}

export function Subprocessors() {
  return (
    <SectionCard
      id="subprocessors"
      title="Subprocessors"
      icon="/trust-center/icon-network.svg"
      className="gap-6"
    >
      <ul className="divide-y divide-stroke-soft border border-stroke-soft text-sm leading-5 tracking-[-0.006em] sm:hidden">
        {subprocessors.map((sp) => (
          <li key={sp.name} className="flex flex-col gap-3 p-3">
            <div className="flex items-center justify-between gap-3">
              <Name subprocessor={sp} />
              <Region region={sp.region} />
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
              <dt className="text-soft">Purpose</dt>
              <dd className="text-body">{sp.purpose}</dd>
              <dt className="text-soft">Data</dt>
              <dd className="text-body">{sp.data}</dd>
              <dt className="text-soft">Reference</dt>
              <dd className="font-medium text-strong">
                <Reference reference={sp.reference} />
              </dd>
            </dl>
          </li>
        ))}
      </ul>

      <div className="scrollbar-none hidden overflow-x-auto border border-stroke-soft sm:block">
        <table className="w-full text-left text-sm leading-5 tracking-[-0.006em] whitespace-nowrap lg:table-fixed">
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
                <th scope="row" className={cell}>
                  <Name subprocessor={sp} />
                </th>
                <td
                  className={cn(cell, "text-body lg:truncate")}
                  title={sp.purpose}
                >
                  {sp.purpose}
                </td>
                <td
                  className={cn(cell, "text-body lg:truncate")}
                  title={sp.data}
                >
                  {sp.data}
                </td>
                <td className={cell}>
                  <Region region={sp.region} />
                </td>
                <td
                  className={cn(
                    cell,
                    "font-medium whitespace-nowrap text-strong",
                  )}
                >
                  <Reference reference={sp.reference} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
