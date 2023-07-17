import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import { Providers } from "./providers";

import "./globals.css";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "YSRS",
  description: "Yaryar Symphonics Research Suite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
