import type { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-4 h-screen">{children}</div>
    </div>
  );
};
