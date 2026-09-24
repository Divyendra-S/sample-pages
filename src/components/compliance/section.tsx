import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionTitle =
  "font-serif text-[28px] leading-[1.1] tracking-[-0.06em] text-ink sm:text-[34px]";

type SectionProps = {
  id: string;
  title: string;
  intro: string[];
  children?: ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="flex scroll-mt-20 flex-col gap-8 lg:gap-10"
    >
      <div className="flex flex-col gap-2.5">
        <h2 id={headingId} className={sectionTitle}>
          {title}
        </h2>
        <div className="leading-normal text-body">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  as?: "h3" | "h4";
  className?: string;
  children: ReactNode;
};

export function InfoCard({
  icon,
  title,
  as: Heading = "h3",
  className,
  children,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 border border-stroke-soft px-6 py-5",
        className,
      )}
    >
      <Heading className="flex items-center gap-2.5 leading-normal text-ink">
        {icon}
        {title}
      </Heading>
      <p className="text-sm leading-normal text-dark-35">{children}</p>
    </div>
  );
}
