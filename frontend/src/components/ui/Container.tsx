import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
