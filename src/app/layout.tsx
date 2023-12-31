import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";

const jammycreamer = localFont({
  src: "./Jammycreamer.ttf",
  variable: "--font-jammyCreamer",
});

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
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${ubuntu.variable} ${jammycreamer.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
