import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<{
  id: string;
}>();

export const columns = [
  columnHelper.accessor('id', {
    id: 'id',
    header: 'ID',
  }),
];
