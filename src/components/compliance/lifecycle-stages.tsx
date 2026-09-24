"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

// Figma only designs the Source stage: the other stages reuse its icon and
// their descriptions are placeholder copy pending approval.
const stageIcon = "/compliance/icon-source.svg";

const stages = [
  {
    title: "Source",
    description:
      "We evaluate data sources and establish requirements for how information enters our environment.",
  },
  {
    title: "Govern",
    description:
      "We classify incoming data and apply policies that define who can access it and how it can be used.",
  },
  {
    title: "Process",
    description:
      "We resolve, model, and enrich data within monitored environments governed by documented controls.",
  },
  {
    title: "Deliver",
    description:
      "We deliver data through approved channels with the context customers need to use it responsibly.",
  },
];

const columnStart = [
  "md:col-start-1",
  "md:col-start-2",
  "md:col-start-3",
  "md:col-start-4",
];

export function LifecycleStages() {
  const id = useId();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent) {
    const last = stages.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    const target = targets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target);
  }

  return (
    <div className="border border-line px-4 pt-[55px] pb-4 sm:px-8">
      <div
        role="tablist"
        aria-label="Data lifecycle stages"
        onKeyDown={onKeyDown}
        className="relative grid max-w-[800px] grid-cols-4"
      >
        <span
          aria-hidden
          className="absolute top-[30px] right-0 -left-4 h-px bg-line sm:-left-8"
        />
        {stages.map((stage, index) => {
          const selected = index === active;

          return (
            <button
              key={stage.title}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index)}
              className="group relative flex cursor-pointer flex-col items-center gap-4"
            >
              <span className="flex h-[61px] items-center">
                {selected ? (
                  <span className="flex size-[61px] items-center justify-center border border-[#e5e5e5] bg-white">
                    <Image src={stageIcon} alt="" width={38} height={38} />
                  </span>
                ) : (
                  <span className="size-2 bg-[#bababa]/60 backdrop-blur-[2px] transition-colors group-hover:bg-[#bababa]" />
                )}
              </span>
              <span
                className={cn(
                  "relative font-serif leading-[1.1] tracking-[-0.06em] text-ink",
                  !selected &&
                    "opacity-30 transition-opacity group-hover:opacity-60",
                )}
              >
                {stage.title}
                {selected && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-full ml-1.5 -translate-y-1/2 font-sans text-sm leading-normal tracking-normal text-body/50"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid max-w-[800px] grid-cols-4">
        <p
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${active}`}
          className={cn(
            "col-span-4 mx-auto mt-0.5 max-w-[228px] text-center text-[13px] leading-normal text-body md:col-span-1 md:-mx-3.5",
            columnStart[active],
          )}
        >
          {stages[active].description}
        </p>
      </div>
    </div>
  );
}
