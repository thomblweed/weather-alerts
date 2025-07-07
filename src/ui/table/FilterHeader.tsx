import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/components/dropdown-menu';

interface FilterHeaderProps<T extends string> {
  options: T[];
  value: T;
  onFilterChange: (value: T | undefined) => void;
}

export const FilterHeader = <T extends string>({
  options,
  value,
  onFilterChange,
}: FilterHeaderProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: T) => {
    const newValue = selectedValue === value ? undefined : selectedValue;
    onFilterChange(newValue);
    setIsOpen(false);
  };

  const handleClear = () => {
    onFilterChange(undefined);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {value ? (
            <span className="rounded bg-primary px-1 text-xs text-primary-foreground">
              {value}
            </span>
          ) : null}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => {
              handleSelect(option);
            }}
            className={value === option ? 'bg-accent' : ''}
          >
            {option}
          </DropdownMenuItem>
        ))}
        {value ? (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleClear}
              className="text-destructive"
            >
              Clear filter
            </DropdownMenuItem>
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
