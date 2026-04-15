import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rémy Paridaens | Studiebegeleiding in wetenschappen en geschiedenis",
  description:
    "Professionele studiebegeleiding voor leerlingen uit de 2e en 3e graad secundair in biologie, fysica, STEM-vakken en geschiedenis.",
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
