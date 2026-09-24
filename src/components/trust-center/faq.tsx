import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "./faq-accordion";

// Only the first answer comes from the design; the rest are placeholder copy pending approval.
const faqs = [
  {
    question: "What privacy rights do I have?",
    answer:
      "Datasys's public policy describes circumstances in which personal information may be sold or shared and provides applicable rights to opt out of sale, sharing, or targeted advertising. Use the Privacy Rights Center to submit the request.",
  },
  {
    question: "How do I submit a privacy request?",
    answer:
      "Use the Privacy Rights Center to choose the type of request you want to make, provide the requested details, and submit the form. You can also reach us at contact@datasys.com.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "We confirm receipt, verify your identity where required, and then process the request. We will let you know once it is complete or if we need more information.",
  },
  {
    question: "How does Datasys verify my identity?",
    answer:
      "We match the information you provide against the information we already hold. For some requests we may ask for additional details before we can proceed.",
  },
  {
    question: "How long does it take to process a request?",
    answer:
      "We respond within the timeframes required by applicable privacy laws and will notify you if we need additional time.",
  },
  {
    question:
      "What is the difference between opting out and requesting deletion?",
    answer:
      "Opting out stops the sale or sharing of your personal information and its use for targeted advertising. Requesting deletion asks us to remove the personal information we hold about you, subject to legal exceptions.",
  },
  {
    question: "How do I manage cookie preferences?",
    answer:
      "Select Cookie preferences in the site footer at any time to review and update how we use cookies and similar technologies.",
  },
  {
    question: "Can an authorized agent submit a request on my behalf?",
    answer:
      "Yes. An authorized agent can submit a request through the Privacy Rights Center. We may ask for proof that the agent is authorized to act on your behalf.",
  },
];

const corners = [
  "-top-px -left-px",
  "-top-px -right-px -scale-x-100",
  "-right-px -bottom-px rotate-180",
  "-bottom-px -left-px -scale-y-100",
];

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-16 lg:py-[100px]"
    >
      <Container size="lg" className="flex flex-col gap-8 lg:gap-10">
        <h2
          id="faq-heading"
          className="font-serif text-[32px] leading-[1.2] tracking-[-0.06em] text-ink sm:text-[44px]"
        >
          Frequently Asked Questions
        </h2>

        <div className="relative border border-black/10">
          {corners.map((position) => (
            <Image
              key={position}
              src="/trust-center/faq-corner.svg"
              alt=""
              width={20}
              height={20}
              className={cn("pointer-events-none absolute", position)}
            />
          ))}

          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
