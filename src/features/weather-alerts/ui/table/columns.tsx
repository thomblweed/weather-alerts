import { createColumnHelper } from '@tanstack/react-table';

import { FilterHeader } from './components/FilterHeader';
import { SortHeader } from './components/SortHeader';

import type { Alerts } from '../../interfaces/Alerts.interface';
import type { Certainty } from '../../types/Certainty.type';
import type { Severity } from '../../types/Severity.type';
import type { Status } from '../../types/Status.type';
import type { Urgency } from '../../types/Urgency.type';

const columnHelper = createColumnHelper<Alerts>();

const headerActionsContainerClass = 'flex items-center gap-2';

export const columns = [
  columnHelper.accessor('sender', {
    id: 'sender',
    header: ({ column }) => (
      <SortHeader
        label="Sender"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
      />
    ),
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('sent', {
    id: 'sent',
    header: ({ column }) => (
      <SortHeader
        label="Sent"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
      />
    ),
    cell: ({ getValue }) => <div>{getValue().toLocaleString()}</div>,
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
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('event', {
    id: 'event',
    header: 'Event',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
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
      return <div>{getValue()}</div>;
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
      return <div>{getValue()}</div>;
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
      return <div>{getValue()}</div>;
    },
  }),
];
