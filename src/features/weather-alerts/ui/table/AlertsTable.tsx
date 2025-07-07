import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type Table as TableType,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Skeleton } from '@/ui/components/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/components/table';

import { columns } from './columns';
import { useAlerts } from '../../hooks/useAlerts';
import { useAlertsLoading } from '../../hooks/useAlertsLoading';

import type { Alerts } from '../../interfaces/Alerts.interface';

export const AlertsTable = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const { alerts } = useAlerts();
  const isLoading = useAlertsLoading();

  const table = useReactTable({
    data: alerts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Table>
        <TableHeader className="sticky top-[-1px] bg-background z-1">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="flex-1 overflow-y-auto">
          {isLoading ? (
            <TableSkeletonContent />
          ) : (
            <TableContent table={table} />
          )}
        </TableBody>
      </Table>
    </div>
  );
};

const TableSkeletonContent = () =>
  Array.from({ length: 20 }).map((_, index) => (
    // index is ok to use here because the order of the rows is not important for skeleton content
    // eslint-disable-next-line react-x/no-array-index-key
    <TableRow key={index}>
      {columns.map((column) => (
        <TableCell key={column.id}>
          <Skeleton className="h-6 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));

const TableContent = ({ table }: { table: TableType<Alerts> }) =>
  table.getRowModel().rows.length ? (
    table.getRowModel().rows.map((row) => (
      <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
