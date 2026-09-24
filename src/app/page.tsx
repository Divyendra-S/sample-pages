import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Cta } from "@/components/site/cta";
import { Certifications } from "@/components/trust-center/certifications";
import { Documents } from "@/components/trust-center/documents";
import { Faq } from "@/components/trust-center/faq";
import { Hero } from "@/components/trust-center/hero";
import { Monitoring } from "@/components/trust-center/monitoring";
import { Overview } from "@/components/trust-center/overview";
import { Subprocessors } from "@/components/trust-center/subprocessors";
import { TrustedBy } from "@/components/trust-center/trusted-by";
import { Updates } from "@/components/trust-center/updates";

export const metadata: Metadata = {
  title: "Trust Center | Datasys",
  description:
    "A transparent view into Datasys security, privacy, compliance, and responsible data practices.",
};

export default function TrustCenterPage() {
  return (
    <main className="flex-1">
      <Hero />
      <div className="border-y border-line">
        <Container>
          <div className="flex flex-col gap-8 py-8 sm:border-x sm:border-line sm:p-6 lg:gap-[50px] lg:p-10">
            <Overview />
            <Documents />
            <Certifications />
            <TrustedBy />
            <Monitoring />
            <Subprocessors />
            <Updates />
          </div>
        </Container>
      </div>
      <Faq />
      <Cta />
    </main>
  );
}
