import Image from "next/image";

export function Cta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-coal"
    >
      <Image
        src="/site/cta-map.png"
        alt=""
        width={1578}
        height={387}
        sizes="1578px"
        className="pointer-events-none absolute top-14 -z-10 hidden max-w-none md:left-[55%] md:block lg:left-[444px]"
      />

      <div className="flex flex-col gap-8 px-4 py-16 sm:px-6 lg:min-h-[415px] lg:justify-center lg:px-[100px] lg:py-[60px]">
        <div className="flex max-w-[571px] flex-col gap-[13px]">
          <h2
            id="cta-heading"
            className="font-serif text-4xl leading-[1.1] tracking-[-0.06em] text-balance text-white sm:text-[50px]"
          >
            The next customer is already signaling.
          </h2>
          <p className="max-w-[482px] leading-normal text-white/70">
            Bring us the market question your current systems cannot answer. We
            will show you how Datasys360 connects the signal to the identity,
            the opportunity, the action, and the business outcome.
          </p>
        </div>

        <a href="#" className="group inline-flex w-fit items-center gap-0.5">
          <span className="flex h-10 items-center bg-white px-5 leading-normal font-medium tracking-[-0.01em] text-[#17181c] transition-colors group-hover:bg-white/85">
            Request a Datasys360 Demo
          </span>
          <Image src="/site/cta-arrow.svg" alt="" width={48} height={40} />
        </a>
      </div>
    </section>
  );
}
