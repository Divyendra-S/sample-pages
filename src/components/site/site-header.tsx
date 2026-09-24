import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/90 backdrop-blur-md">
      <div className="flex h-[63px] items-center px-4 sm:px-6 lg:px-[100px]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/site/logo-mark.svg" alt="" width={25} height={25} />
          <span className="text-[20px] leading-[1.04] font-semibold text-ink">
            Datasys
          </span>
          <span className="ml-1 text-sm leading-[1.04] text-muted">
            Trust center
          </span>
        </Link>
      </div>
    </header>
  );
}
