import type { ReactNode } from 'react';

export const DisplayField = ({
  label,
  value,
}: {
  label: string;
  value: string | ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <p className="font-semibold">{label}</p>
    <p className="text-sm">{value}</p>
  </div>
);
