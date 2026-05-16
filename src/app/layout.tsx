import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waterford Auto Shine | Premium Auto Detailing in Waterford, MI",
  description:
    "Professional hand wash and auto detailing services in Waterford Township, MI. Premium care for cars, SUVs, trucks, boats, and RVs. Book your free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${figtree.variable} h-full`}
    >
      <body className="font-[family-name:var(--font-figtree)] antialiased min-h-full flex flex-col">
        <Header />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
