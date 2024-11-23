import { ReactNode } from "react";

interface GridContentProps {
  children: ReactNode;
}
export function GridContent({ children }: GridContentProps) {
  return (
    <div className="w-full h-auto sm:p-10 p-4 flex flex-col gap-4">
      {children}
    </div>
  );
}
