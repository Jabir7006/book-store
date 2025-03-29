"use client";

import dynamic from "next/dynamic";

// Dynamically import MobileSearch with no SSR to avoid hydration issues
const MobileSearch = dynamic(() => import("../MobileSearch"), { ssr: false });

export default function MobileSearchWrapper() {
  return <MobileSearch />;
}
