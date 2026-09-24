"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return items.map((item, index) => {
    const open = index === openIndex;
    const buttonId = `${id}-question-${index}`;
    const panelId = `${id}-answer-${index}`;

    return (
      <div
        key={item.question}
        className="border-b border-black/10 last:border-b-0"
      >
        <h3>
          <button
            type="button"
            id={buttonId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpenIndex(open ? null : index)}
            className="flex w-full cursor-pointer items-center gap-2.5 p-4 text-left leading-normal font-medium text-ink sm:p-6"
          >
            <Image
              src="/trust-center/icon-chevron.svg"
              alt=""
              width={12}
              height={12}
              className={cn(
                "shrink-0 transition-transform duration-300 motion-reduce:transition-none",
                !open && "-rotate-90",
              )}
            />
            {item.question}
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!open}
          className={cn(
            "grid transition-[grid-template-rows,margin] duration-300 ease-out motion-reduce:transition-none",
            open ? "-mt-1.5 grid-rows-[1fr] sm:-mt-3.5" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <p className="max-w-[791px] pr-4 pb-4 pl-[38px] leading-normal text-dark-35 sm:pr-6 sm:pb-6 sm:pl-[46px]">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  });
}
