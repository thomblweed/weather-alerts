import { createColumnHelper } from '@tanstack/react-table';

import type { Alerts } from '../../interfaces/Alerts.interface';

const columnHelper = createColumnHelper<Alerts>();

export const columns = [
  columnHelper.accessor('sender', {
    id: 'sender',
    header: 'Sender',
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
    header: 'Severity',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('certainty', {
    id: 'certainty',
    header: 'Certainty',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
  columnHelper.accessor('urgency', {
    id: 'urgency',
    header: 'Urgency',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>;
    },
  }),
];
