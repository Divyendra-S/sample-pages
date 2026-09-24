import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

function HeroPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-0 hidden size-[432px] opacity-40 lg:block",
        className,
      )}
    >
      <Image
        src="/compliance/hero-pattern.png"
        alt=""
        fill
        sizes="432px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-l from-night from-27% to-night/0" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-10">
      <Container size="xl">
        <div className="relative isolate flex flex-col items-center overflow-hidden bg-night px-6 py-16 text-center sm:py-[100px]">
          <HeroPattern className="left-0" />
          <HeroPattern className="right-0 -scale-x-100" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 shadow-[inset_0_4px_26px_25px_var(--color-night)]"
          />

          <div className="relative flex max-w-[694px] flex-col items-center gap-4">
            <p className="border-t border-white/12 pt-[7px] font-mono text-[13px] leading-normal tracking-[0.01em] text-white/70 uppercase">
              Compliance
            </p>
            <div className="flex flex-col items-center gap-2.5">
              <h1 className="max-w-[491px] font-serif text-[32px] leading-[1.2] tracking-[-0.06em] text-balance text-white sm:text-[44px]">
                Built with accountability at every layer
              </h1>
              <p className="leading-normal text-white/70">
                Datasys operates in a world where data has to be useful,
                responsible, and governed at the same time. Our approach to
                compliance is built into how we collect, process, protect,
                model, and deliver data — giving our customers greater clarity
                and control over the intelligence they use.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
