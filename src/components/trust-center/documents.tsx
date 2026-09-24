import Image from "next/image";
import { OutlineLink, Panel, SectionCard } from "./section-card";

const documents = [
  {
    category: "Reports",
    title: "Security and Privacy of Customer Data",
    href: "#",
  },
  { category: "Policy", title: "Terms and conditions", href: "#" },
  {
    category: "Reports",
    title: "Security and Privacy of Customer Data",
    href: "#",
  },
  {
    category: "Reports",
    title: "Security and Privacy of Customer Data",
    href: "#",
  },
];

function DownloadIcon() {
  return (
    <Image
      src="/trust-center/icon-folder-download.svg"
      alt=""
      width={22}
      height={20}
      className="shrink-0"
    />
  );
}

export function Documents() {
  return (
    <SectionCard
      id="documents"
      title="Documents"
      icon="/trust-center/icon-documents.svg"
      action={
        <OutlineLink href="#">
          Bulk download
          <DownloadIcon />
        </OutlineLink>
      }
    >
      <Panel>
        <ul className="grid gap-x-3 gap-y-4 md:grid-cols-2">
          {documents.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.href}
                className="flex items-center justify-between gap-4 rounded-md border border-black/10 bg-white py-1.5 pr-4 pl-1.5 transition-colors hover:border-black/25"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="flex size-[55px] shrink-0 items-center justify-center rounded-[2px] bg-night">
                    <Image
                      src="/trust-center/icon-file.svg"
                      alt=""
                      width={26}
                      height={26}
                    />
                  </span>
                  <span className="flex min-w-0 flex-col gap-px leading-normal">
                    <span className="font-mono text-[13px] tracking-[0.01em] text-dark-35 uppercase">
                      {doc.category}
                    </span>
                    <span className="text-body">{doc.title}</span>
                  </span>
                </span>
                <DownloadIcon />
              </a>
            </li>
          ))}
        </ul>
      </Panel>
    </SectionCard>
  );
}
