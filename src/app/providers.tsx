"use client";

import { ThemeProvider } from "next-themes";

import { StateProvider } from "../state";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StateProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StateProvider>
  );
}
