'use client';

import { ContextProvider } from './ContextProvider';

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
  return <ContextProvider>{children}</ContextProvider>;
}
