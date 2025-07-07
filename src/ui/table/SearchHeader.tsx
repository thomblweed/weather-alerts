import { Input } from '@/ui/components/input';

import type { Column } from '@tanstack/react-table';

interface SearchHeaderProps<T> {
  column: Column<T>;
  placeholder: string;
}

export const SearchHeader = <T,>({
  column,
  placeholder,
}: SearchHeaderProps<T>) => {
  return (
    <div className="flex items-center py-4">
      <Input
        className="min-w-50"
        type="search"
        placeholder={placeholder}
        value={column.getFilterValue() as string}
        onChange={(event) => {
          column.setFilterValue(event.target.value);
        }}
      />
    </div>
  );
};
