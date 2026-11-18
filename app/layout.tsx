import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shipyard — Field goods for the long way home",
  description: "A considered kit for open air and unhurried days. Explore the Shipyard field goods collection.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
