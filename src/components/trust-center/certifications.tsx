import Image from "next/image";
import { OutlineLink, Panel, SectionCard } from "./section-card";

const certifications = [
  { name: "CASA", badge: "/trust-center/badges/casa.svg" },
  { name: "CCPA", badge: "/trust-center/badges/ccpa.svg" },
  { name: "FERPA", badge: "/trust-center/badges/ferpa.svg" },
  { name: "HIPAA", badge: "/trust-center/badges/hipaa.svg" },
  { name: "ISO 42001", badge: "/trust-center/badges/iso-42001.svg" },
  { name: "GDPR", badge: "/trust-center/badges/gdpr.svg" },
  { name: "SOC 2 Type 1", badge: "/trust-center/badges/soc2-type1.svg" },
  { name: "SOC 3", badge: "/trust-center/badges/soc3.svg" },
];

export function Certifications() {
  return (
    <SectionCard
      id="compliance"
      title="Certifications and compliance"
      icon="/trust-center/icon-certificate.svg"
      action={<OutlineLink href="#">Go to compliance</OutlineLink>}
    >
      <Panel>
        <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-8">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col items-center gap-2.5 border border-black/10 bg-white px-3 py-2.5"
            >
              <Image src={cert.badge} alt="" width={60} height={60} />
              <span className="text-center text-[13px] leading-normal text-ink">
                {cert.name}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </SectionCard>
  );
}
