import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionCardProps = {
  id: string;
  title: string;
  icon: string;
  iconSize?: number;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function SectionCard({
  id,
  title,
  icon,
  iconSize = 24,
  action,
  className,
  children,
}: SectionCardProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "flex scroll-mt-20 flex-col gap-4 border border-stroke-soft p-4 sm:p-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2
          id={headingId}
          className="flex items-center gap-1.5 font-serif text-xl leading-[1.1] tracking-[-0.06em] text-ink"
        >
          <Image src={icon} alt="" width={iconSize} height={iconSize} />
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Panel({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("rounded bg-panel p-3 sm:p-4", className)} {...props} />
  );
}

export function OutlineLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2.5 rounded-[2px] border border-stroke-soft bg-white px-[13px] py-[7px] leading-normal font-medium text-black transition-colors hover:bg-weak",
        className,
      )}
      {...props}
    />
  );
}
