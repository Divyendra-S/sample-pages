import type { Metadata } from "next";
import { Certifications } from "@/components/compliance/certifications";
import { Framework } from "@/components/compliance/framework";
import { Hero } from "@/components/compliance/hero";
import { Hosting } from "@/components/compliance/hosting";
import { Lifecycle } from "@/components/compliance/lifecycle";
import { Responsibility } from "@/components/compliance/responsibility";
import { Cta } from "@/components/site/cta";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "How Datasys builds accountability into how data is collected, processed, protected, modeled, and delivered.",
};

export default function CompliancePage() {
  return (
    <main className="flex-1">
      <Hero />
      <div className="border-y border-line">
        <Container size="xl">
          <div className="flex flex-col gap-14 py-12 sm:border-x sm:border-line sm:px-8 sm:py-16 lg:gap-20 lg:px-16 lg:py-20 xl:p-[100px]">
            <Responsibility />
            <Framework />
            <Lifecycle />
            <Hosting />
            <Certifications />
          </div>
        </Container>
      </div>
      <Cta />
    </main>
  );
}
