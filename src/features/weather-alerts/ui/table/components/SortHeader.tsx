import clsx from 'clsx';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

import { Button } from '@/ui/button';

import type { SortDirection } from '@tanstack/react-table';

interface SortHeaderProps {
  label: string;
  sorted: false | SortDirection;
  toggleSorting: (desc?: boolean, isMulti?: boolean) => void;
  fullWidth?: boolean;
}

export const SortHeader = ({
  label,
  sorted,
  toggleSorting,
  fullWidth = false,
}: SortHeaderProps) => {
  const handleButtonClick = () => {
    toggleSorting(sorted === 'asc' ? true : false);
  };

  return (
    <Button
      className={clsx({ 'w-full': fullWidth })}
      variant="ghost"
      onClick={handleButtonClick}
    >
      {label}
      {sorted === false ? (
        <ArrowUpDown className="ml-2 h-4 w-4" />
      ) : sorted === 'asc' ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : (
        <ArrowDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
};
