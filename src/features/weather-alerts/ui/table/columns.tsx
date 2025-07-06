import { createColumnHelper } from '@tanstack/react-table';

import { CellText } from './components/CellText';
import { FilterHeader } from './components/FilterHeader';
import { HeaderText } from './components/HeaderText';
import { SearchHeader } from './components/SearchHeader';
import { SortHeader } from './components/SortHeader';

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
    cell: ({ getValue }) => {
      return (
        <div className="flex flex-wrap gap-1">
          {getValue().map((area) => (
            <CellText key={area} value={area} />
          ))}
        </div>
      );
    },
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
    cell: ({ getValue }) => {
      return <CellText isSortable value={getValue()} />;
    },
  }),
  columnHelper.accessor('event', {
    id: 'event',
    header: () => <HeaderText label="Event" />,
    cell: ({ getValue }) => {
      return <CellText value={getValue()} />;
    },
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
    cell: ({ getValue }) => {
      return <CellText isSortable value={getValue()} />;
    },
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
    cell: ({ getValue }) => {
      return <CellText isSortable value={getValue()} />;
    },
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
    cell: ({ getValue }) => {
      return <CellText isSortable value={getValue()} />;
    },
  }),
];
