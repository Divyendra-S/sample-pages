import { OutlineLink, Panel, SectionCard } from "./section-card";

const updates = [
  {
    date: "2026-07-30",
    title:
      "Datasys Introduces a New Generation of Market Intelligence Products",
    summary:
      "Datasys has expanded its data platform with new capabilities designed to help enterprises understand changing markets, identify emerging opportunities, and turn market intelligence into action. The latest products bring together identity, digital signals, specialized data, and predictive intelligence within a connected operating environment.",
  },
  {
    date: "2026-03-14",
    title: "Datasys Introduces New Data Delivery and Integration Options",
    summary:
      "Datasys has expanded the ways enterprises can operationalize its intelligence, including APIs, managed delivery, enrichment workflows, and configured data products. The expanded options allow teams to bring Datasys intelligence into the systems and workflows where their existing decisions already happen.",
  },
  {
    date: "2025-04-22",
    title: "New Predictive & Modeled Data Capabilities",
    summary:
      "Datasys expands its predictive data capabilities to help enterprises define business outcomes, identify relevant evidence, and turn broad markets into ranked opportunities.",
  },
];

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function Updates() {
  return (
    <SectionCard
      id="updates"
      title="Trust centre updates"
      icon="/trust-center/icon-note.svg"
      action={<OutlineLink href="#">Subscribe to updates</OutlineLink>}
      className="gap-6"
    >
      <Panel className="flex flex-col gap-2.5">
        {updates.map((update) => (
          <article
            key={update.date}
            className="flex flex-col gap-2.5 rounded-md border border-black/10 bg-white p-4 sm:p-6"
          >
            <time
              dateTime={update.date}
              className="font-mono text-[13px] leading-normal tracking-[0.01em] text-dark-35 uppercase"
            >
              {dateFormat.format(new Date(update.date))}
            </time>
            <div className="flex flex-col gap-1.5">
              <h3 className="max-w-[620px] font-serif text-xl leading-[1.2] tracking-[-0.06em] text-ink sm:text-2xl">
                {update.title}
              </h3>
              <p className="leading-normal text-body">{update.summary}</p>
            </div>
          </article>
        ))}
      </Panel>
    </SectionCard>
  );
}
