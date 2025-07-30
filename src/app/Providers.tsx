// app/Providers.tsx
"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapperProvider from "./LayoutWrapperProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LayoutWrapperProvider>{children}</LayoutWrapperProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
