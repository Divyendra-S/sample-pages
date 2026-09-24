import Image from "next/image";
import { cn } from "@/lib/utils";
import { InfoCard, sectionTitle } from "./section";

const principles = [
  {
    title: "Privacy by design",
    description:
      "Privacy considerations are incorporated into how Datasys products and workflows are designed, developed, and operated.",
  },
  {
    title: "Data governance",
    description:
      "We maintain controls around how data is sourced, classified, accessed, processed, retained, and delivered.",
  },
  {
    title: "Security",
    description:
      "Datasys applies technical and organizational safeguards designed to protect systems and data from unauthorized access, misuse, and loss.",
  },
  {
    title: "Responsible data use",
    description:
      "We establish policies and controls around appropriate data usage, helping customers understand what data represents and how it can be used.",
  },
];

export function Framework() {
  return (
    <section
      aria-labelledby="framework-heading"
      className="flex flex-col border border-stroke-soft xl:flex-row"
    >
      <div className="flex flex-col justify-center gap-3 border-b border-stroke-soft px-6 py-10 sm:px-8 xl:w-[314px] xl:shrink-0 xl:border-r xl:border-b-0 xl:py-[60px]">
        <p className="font-mono text-[13px] leading-normal tracking-[0.01em] text-dark-35 uppercase">
          Data protection
        </p>
        <h2
          id="framework-heading"
          className={cn(sectionTitle, "max-w-[254px]")}
        >
          Our compliance framework
        </h2>
      </div>

      <ul className="grid flex-1 sm:grid-cols-2">
        {principles.map((principle) => (
          <li
            key={principle.title}
            className="border-b border-stroke-soft last:border-b-0 sm:nth-3:border-b-0"
          >
            <InfoCard
              icon={
                <span className="flex size-6 shrink-0 items-center justify-center">
                  <Image
                    src="/compliance/icon-framework.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </span>
              }
              title={principle.title}
              className="h-full justify-center border-0"
            >
              {principle.description}
            </InfoCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
