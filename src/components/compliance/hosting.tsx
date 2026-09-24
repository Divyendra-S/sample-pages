import Image from "next/image";
import { InfoCard, Section } from "./section";

const regions = [
  {
    name: "EU Region",
    flag: "/flags/eu.svg",
    description:
      "GDPR-compliant hosting in eu-central-1 (Frankfurt) for European customers requiring data residency.",
  },
  {
    name: "US Region",
    flag: "/flags/us.svg",
    description:
      "Hosted on AWS infrastructure in us-east-1 (N. Virginia) with automatic backups and disaster recovery.",
  },
];

export function Hosting() {
  return (
    <Section
      id="hosting"
      title="Data Hosting Locations"
      intro={[
        "Your documents are stored with enterprise-grade infrastructure, ensuring high availability and security at all times.",
        "Out of the box, Datasys is hosted in Europe by default.",
      ]}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {regions.map((region) => (
          <li key={region.name} className="flex">
            <InfoCard
              icon={<Image src={region.flag} alt="" width={20} height={20} />}
              title={region.name}
              className="flex-1"
            >
              {region.description}
            </InfoCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
