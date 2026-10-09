import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marian Jade Gorenzo | Programmer Profile",
  description: "Programmer profile of Marian Jade Gorenzo, also known as Jidjeyd, a 3rd Year BSIT student majoring in Network Design and Management at Nueva Vizcaya State University (NVSU).",
  keywords: ["Marian Jade Gorenzo", "Jidjeyd", "BSIT", "Network Design and Management", "NVSU", "Programmer Profile"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
