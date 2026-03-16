import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fake.legal — Get Premium Legal Access Free",
  description:
    "Recommend Fake.legal's paid service and unlock premium legal benefits at no cost."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
