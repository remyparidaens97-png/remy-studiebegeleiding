import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  title: siteConfig.brandName,
  description:
    "Professionele studiebegeleiding voor leerlingen uit het secundair onderwijs in biologie, fysica, STEM en geschiedenis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
