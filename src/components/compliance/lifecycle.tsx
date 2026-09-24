import { LifecycleStages } from "./lifecycle-stages";
import { Section } from "./section";

export function Lifecycle() {
  return (
    <Section
      id="lifecycle"
      title="Data has a lifecycle. So does accountability."
      intro={[
        "Data intelligence only creates lasting value when it is built on trust.",
        "We maintain policies, controls, and operational practices designed to protect the data we work with and support responsible use across the Datasys platform.",
        "From data acquisition and identity resolution to modeling, delivery, and deletion, governance is considered throughout the data lifecycle.",
      ]}
    >
      <LifecycleStages />
    </Section>
  );
}
