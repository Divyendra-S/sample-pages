import Image from "next/image";
import { cn } from "@/lib/utils";
import { Panel, SectionCard } from "./section-card";

type Status = "running" | "maintenance";

const statusStyles: Record<
  Status,
  { label: string; dot: string; className: string }
> = {
  running: {
    label: "Running",
    dot: "/trust-center/dot-success.svg",
    className: "bg-success-light text-success-dark",
  },
  maintenance: {
    label: "Maintenance",
    dot: "/trust-center/dot-away.svg",
    className: "bg-away-light text-away-dark",
  },
};

const groups: { title: string; checks: { name: string; status: Status }[] }[] =
  [
    {
      title: "App Security",
      checks: [
        { name: "Annual Penetration Test", status: "running" },
        { name: "Code Review Process", status: "running" },
        { name: "Quarterly Vulnerability Scan", status: "maintenance" },
        { name: "Annual Penetration Test", status: "running" },
        { name: "Software Development Lifecycle", status: "running" },
        { name: "Vulnerability Management", status: "running" },
      ],
    },
    {
      title: "Data Security",
      checks: [
        { name: "Daily Database Backups", status: "running" },
        { name: "Encryption at Rest", status: "running" },
        { name: "Security Policy", status: "running" },
        { name: "SSL/TLS Enforced", status: "running" },
        { name: "System Access Control Policy", status: "running" },
        { name: "Cloud Data Storage Restricted", status: "running" },
      ],
    },
  ];

function StatusBadge({ status }: { status: Status }) {
  const { label, dot, className } = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full py-0.5 pr-2 font-inter text-[11px] leading-3 font-medium tracking-[0.02em] uppercase",
        className,
      )}
    >
      <Image src={dot} alt="" width={16} height={16} />
      {label}
    </span>
  );
}

export function Monitoring() {
  return (
    <SectionCard
      id="monitoring"
      title="Monitoring"
      icon="/trust-center/icon-monitor.svg"
    >
      <Panel className="grid gap-6 md:grid-cols-2 md:gap-2.5">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-2.5">
            <h3 className="text-sm leading-[14px] font-medium tracking-[-0.006em] text-strong">
              {group.title}
            </h3>
            <ul className="divide-y divide-black/10 overflow-hidden rounded-md border border-black/10 bg-white">
              {group.checks.map((check, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-3 py-2.5 pr-4 pl-2.5"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-[1px] bg-night">
                      <Image
                        src="/trust-center/icon-file-sm.svg"
                        alt=""
                        width={11}
                        height={11}
                      />
                    </span>
                    <span className="leading-normal text-body">
                      {check.name}
                    </span>
                  </span>
                  <StatusBadge status={check.status} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Panel>
    </SectionCard>
  );
}
