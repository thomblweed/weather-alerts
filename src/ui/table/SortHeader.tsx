import clsx from 'clsx';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

import { Button } from '@/ui/components/button';

import type { SortDirection } from '@tanstack/react-table';

const iconClassName = 'h-4 w-4';

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
        <ArrowUpDown className={iconClassName} />
      ) : sorted === 'asc' ? (
        <ArrowUp className={iconClassName} />
      ) : (
        <ArrowDown className={iconClassName} />
      )}
    </Button>
  );
};
