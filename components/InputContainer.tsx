import { ReactNode } from "react";

export default function InputContainer({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <label className="flex flex-col gap-1">
      <div className="text-black">{label}</div>
      {children}
    </label>
  );
}
