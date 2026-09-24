import Image from "next/image";
import { InfoCard, Section } from "./section";

type Certification = {
  id: string;
  name: string;
  description: string;
  coverage?: {
    title: string;
    areas: { title: string; description: string }[];
  };
};

// Figma reuses the SOC 2 badge and audit highlights for ISO/IEC 27001 as
// placeholders until its own badge and copy are ready.
const badge = "/compliance/soc2-type2.svg";

const highlights = [
  {
    title: "Independent Audit",
    flag: "/flags/eu.svg",
    description:
      "Our SOC 2 Type II report is issued by an independent third-party auditor, validating our security controls over an extended period.",
  },
  {
    title: "Trust Service Criteria",
    flag: "/flags/us.svg",
    description:
      "We meet all five Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
  },
];

const certifications: Certification[] = [
  {
    id: "soc2",
    name: "SOC 2 Type II Compliance",
    description:
      "Datasys has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security, availability, and confidentiality.",
    coverage: {
      title: "SOC 2 Coverage Areas",
      areas: [
        {
          title: "Security Controls",
          description:
            "Comprehensive security policies and procedures to protect customer data",
        },
        {
          title: "Change Management",
          description: "Controlled processes for system changes and updates",
        },
        {
          title: "Access Management",
          description: "Strict access controls and authentication mechanisms",
        },
        {
          title: "Incident Response",
          description:
            "Documented procedures for detecting and responding to security incidents",
        },
      ],
    },
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001 Certification",
    description:
      "Datasys certified against ISO/IEC 27001, the international standard for information security management. The certificate is issued by an accredited certification body following a full audit of our information security management system.",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Compliance you can understand"
      intro={[
        "Enterprise data requirements can become complicated quickly. We aim to make our compliance posture easier to understand and easier to evaluate.",
        "Our documentation provides customers and partners with information about our policies, controls, certifications, and applicable data practices.",
      ]}
    >
      <div className="flex flex-col gap-12 lg:gap-[60px]">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            aria-labelledby={`${certification.id}-heading`}
            className="flex flex-col gap-8"
          >
            <div className="flex w-[111px] justify-center border border-stroke-soft py-5">
              <Image src={badge} alt="" width={60} height={60} />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h3
                  id={`${certification.id}-heading`}
                  className="font-serif text-2xl leading-[1.1] tracking-[-0.06em] text-ink"
                >
                  {certification.name}
                </h3>
                <p className="leading-normal text-body">
                  {certification.description}
                </p>
              </div>

              <ul className="grid gap-5 md:grid-cols-2">
                {highlights.map((highlight) => (
                  <li key={highlight.title} className="flex">
                    <InfoCard
                      as="h4"
                      icon={
                        <Image
                          src={highlight.flag}
                          alt=""
                          width={20}
                          height={20}
                        />
                      }
                      title={highlight.title}
                      className="flex-1"
                    >
                      {highlight.description}
                    </InfoCard>
                  </li>
                ))}
              </ul>

              {certification.coverage && (
                <div className="flex flex-col gap-4 border border-stroke-soft px-6 py-5">
                  <h4 className="leading-normal font-semibold text-ink">
                    {certification.coverage.title}
                  </h4>
                  <ul className="grid gap-2.5 md:grid-cols-2">
                    {certification.coverage.areas.map((area) => (
                      <li
                        key={area.title}
                        className="flex flex-col gap-0.5 text-sm leading-normal"
                      >
                        <span className="flex items-center gap-2.5 text-ink">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-black">
                            <Image
                              src="/compliance/icon-check.svg"
                              alt=""
                              width={14}
                              height={14}
                            />
                          </span>
                          {area.title}
                        </span>
                        <span className="text-dark-35">{area.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
