import { CellBadge } from '@/ui/table/CellBadge';

import type { Status } from '../../../types/Status.type';

interface StatusCellProps {
  value: Status;
}

export const StatusCell = ({ value }: StatusCellProps) => {
  return <CellBadge value={value} variant="secondary" />;
};
