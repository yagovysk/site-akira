import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-4xl font-extrabold text-yellow-400 mb-4 tracking-wide drop-shadow-md">
      {children}
    </h2>
  );
}
