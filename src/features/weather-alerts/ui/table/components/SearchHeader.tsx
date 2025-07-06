import { Input } from '@/ui/input';

import type { Alerts } from '@/features/weather-alerts/interfaces/Alerts.interface';
import type { Column } from '@tanstack/react-table';

interface SearchHeaderProps {
  column: Column<Alerts>;
  placeholder: string;
}

export const SearchHeader = ({ column, placeholder }: SearchHeaderProps) => {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={placeholder}
        value={column.getFilterValue() as string}
        onChange={(event) => {
          column.setFilterValue(event.target.value);
        }}
        className="max-w-sm"
      />
    </div>
  );
};
