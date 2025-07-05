import { createColumnHelper } from '@tanstack/react-table';

import { SortHeader } from './components/SortHeader';

import type { Alerts } from '../../interfaces/Alerts.interface';

const columnHelper = createColumnHelper<Alerts>();

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
  columnHelper.accessor('status', {
    id: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('category', {
    id: 'category',
    header: 'Category',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('severity', {
    id: 'severity',
    header: ({ column }) => (
      <SortHeader
        label="Severity"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
      />
    ),
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('certainty', {
    id: 'certainty',
    header: ({ column }) => (
      <SortHeader
        label="Certainty"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
      />
    ),
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('urgency', {
    id: 'urgency',
    header: ({ column }) => (
      <SortHeader
        label="Urgency"
        sorted={column.getIsSorted()}
        toggleSorting={column.toggleSorting}
      />
    ),
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
];
