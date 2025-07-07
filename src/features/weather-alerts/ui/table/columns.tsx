import { createColumnHelper } from '@tanstack/react-table';

import { CellText } from '@/ui/table/CellText';
import { FilterHeader } from '@/ui/table/FilterHeader';
import { HeaderText } from '@/ui/table/HeaderText';
import { SearchHeader } from '@/ui/table/SearchHeader';
import { SortHeader } from '@/ui/table/SortHeader';

import { CertaintyCell } from './components/CertaintyCell';
import { SeverityCell } from './components/SeverityCell';
import { StatusCell } from './components/StatusCell';
import { UrgencyCell } from './components/UrgencyCell';
import { ViewDetails } from './components/view-details/ViewDetails';

import type { Alerts } from '../../interfaces/Alerts.interface';
import type { Certainty } from '../../types/Certainty.type';
import type { Severity } from '../../types/Severity.type';
import type { Status } from '../../types/Status.type';
import type { Urgency } from '../../types/Urgency.type';

const columnHelper = createColumnHelper<Alerts>();

const headerActionsContainerClass = 'flex items-center gap-1.5';

export const columns = [
  columnHelper.accessor('areas', {
    id: 'areas',
    header: ({ column }) => (
      <SearchHeader column={column} placeholder="Search and filter Areas" />
    ),
    cell: ({ getValue, row }) => (
      <div className="flex flex-wrap gap-1">
        {getValue().map((area, index) => (
          <CellText key={`${area}-${row.id}-${String(index)}`} value={area} />
        ))}
      </div>
    ),
    filterFn: (row, id, value: string) => {
      const areas: string[] = row.getValue(id);
      const searchValue = value.toLowerCase();
      return areas.some((area) => area.toLowerCase().includes(searchValue));
    },
  }),
  columnHelper.accessor('sent', {
    id: 'sent',
    header: ({ column }) => (
      <SortHeader
        label="Sent"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
        fullWidth
      />
    ),
    cell: ({ getValue }) => (
      <CellText isSortable value={getValue().toLocaleString()} />
    ),
  }),
  columnHelper.accessor('status', {
    id: 'status',
    header: ({ column }) => (
      <div className={headerActionsContainerClass}>
        <SortHeader
          label="Status"
          sorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
        />
        <FilterHeader<Status>
          options={['Actual', 'Exercise', 'System', 'Test', 'Draft']}
          value={column.getFilterValue() as Status}
          onFilterChange={column.setFilterValue}
        />
      </div>
    ),
    cell: ({ getValue }) => <StatusCell value={getValue()} />,
  }),
  columnHelper.accessor('event', {
    id: 'event',
    header: () => <HeaderText label="Event" />,
    cell: ({ getValue }) => <CellText value={getValue()} />,
  }),
  columnHelper.accessor('severity', {
    id: 'severity',
    header: ({ column }) => (
      <div className={headerActionsContainerClass}>
        <SortHeader
          label="Severity"
          sorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
        />
        <FilterHeader<Severity>
          options={['Extreme', 'Severe', 'Moderate', 'Minor', 'Unknown']}
          value={column.getFilterValue() as Severity}
          onFilterChange={column.setFilterValue}
        />
      </div>
    ),
    cell: ({ getValue }) => <SeverityCell value={getValue()} />,
  }),
  columnHelper.accessor('certainty', {
    id: 'certainty',
    header: ({ column }) => (
      <div className={headerActionsContainerClass}>
        <SortHeader
          label="Certainty"
          sorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
        />
        <FilterHeader<Certainty>
          options={['Observed', 'Likely', 'Possible', 'Unlikely', 'Unknown']}
          value={column.getFilterValue() as Certainty}
          onFilterChange={column.setFilterValue}
        />
      </div>
    ),
    cell: ({ getValue }) => <CertaintyCell value={getValue()} />,
  }),
  columnHelper.accessor('urgency', {
    id: 'urgency',
    header: ({ column }) => (
      <div className={headerActionsContainerClass}>
        <SortHeader
          label="Urgency"
          sorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
        />
        <FilterHeader<Urgency>
          options={['Immediate', 'Expected', 'Future', 'Past', 'Unknown']}
          value={column.getFilterValue() as Urgency}
          onFilterChange={column.setFilterValue}
        />
      </div>
    ),
    cell: ({ getValue }) => <UrgencyCell value={getValue()} />,
  }),
  columnHelper.display({
    id: 'actions',
    header: () => <HeaderText label="Actions" />,
    cell: ({ row }) => (
      <ViewDetails details={row.original.details} event={row.original.event} />
    ),
  }),
];
