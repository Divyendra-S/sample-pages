import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const sentient = localFont({
  variable: "--font-sentient",
  src: [
    { path: "./fonts/Sentient-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Sentient-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: { template: "%s | Datasys", default: "Datasys" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${sentient.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
