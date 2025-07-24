"use client"; // Client component

import dynamic from "next/dynamic";

// Dynamically import LayoutWrapper with ssr: false
const LayoutWrapper = dynamic(() => import("./LayoutWrapper"), { ssr: false });

export default function LayoutWrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
