import type { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="h-100dvh p-4">{children}</div>
    </div>
  );
};
