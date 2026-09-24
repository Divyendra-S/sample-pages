import { SectionCard } from "./section-card";

export function Overview() {
  return (
    <SectionCard
      id="overview"
      title="Overview"
      icon="/trust-center/icon-overview.svg"
      iconSize={20}
    >
      <p className="leading-normal text-body">
        Datasys built proprietary audiences around each property and acquisition
        goal, then carried those audiences across email, display, Meta, and
        co-registration. Campaign activity was matched with downstream
        ticket-sale and resort-booking data, giving Six Flags one connected view
        across the portfolio. Datasys built proprietary audiences around each
        property and acquisition goal, then carried those audiences across
        email, display, Meta, and co-registration. Campaign activity was matched
        with downstream ticket-sale and resort-booking data, giving Six Flags
        one connected view across the portfolio.
      </p>
    </SectionCard>
  );
}
