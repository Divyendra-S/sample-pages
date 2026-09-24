import Image from "next/image";
import { SectionCard } from "./section-card";

const customers = [
  {
    name: "American Airlines",
    logo: "/trust-center/logos/american-airlines.svg",
    width: 167,
    height: 28,
  },
  {
    name: "Rent-A-Center",
    logo: "/trust-center/logos/rent-a-center.png",
    width: 46,
    height: 46,
  },
  {
    name: "MetLife",
    logo: "/trust-center/logos/metlife.png",
    width: 138,
    height: 31,
  },
  {
    name: "iHeartRadio",
    logo: "/trust-center/logos/iheartradio.svg",
    width: 78,
    height: 23,
  },
  { name: "Ford", logo: "/trust-center/logos/ford.png", width: 85, height: 36 },
  {
    name: "Microsoft",
    logo: "/trust-center/logos/microsoft.svg",
    width: 120,
    height: 26,
  },
  {
    name: "Honda",
    logo: "/trust-center/logos/honda.svg",
    width: 141,
    height: 32,
  },
  {
    name: "Mastercard",
    logo: "/trust-center/logos/mastercard.svg",
    width: 52,
    height: 40,
  },
];

export function TrustedBy() {
  return (
    <SectionCard
      id="customers"
      title="Datasys is trusted by"
      icon="/trust-center/icon-handshake.svg"
    >
      <ul className="grid grid-cols-2 border-t border-l border-stroke-soft md:grid-cols-4">
        {customers.map((customer) => (
          <li
            key={customer.name}
            className="flex h-[106px] items-center justify-center border-r border-b border-stroke-soft bg-white px-6 py-4"
          >
            <Image
              src={customer.logo}
              alt={customer.name}
              width={customer.width}
              height={customer.height}
              className="h-auto max-w-full"
            />
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
