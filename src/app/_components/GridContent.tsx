import { ReactNode } from "react";

interface GridContentProps {
  children: ReactNode;
}
export function GridContent({
  children,
}: GridContentProps) {
  return (
    <div className="w-full h-auto p-10 flex flex-col gap-4">
      {children}
    </div>
  );
}