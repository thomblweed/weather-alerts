import { CellBadge } from '@/ui/table/CellBadge';

import type { Urgency } from '../../../types/Urgency.type';

const classNameConfig: Record<Urgency, string> = {
  Immediate: 'bg-gray-400',
  Expected: 'bg-gray-400',
  Future: 'bg-gray-200 text-foreground',
  Past: 'bg-gray-200 text-foreground',
  Unknown: '',
};

interface UrgencyCellProps {
  value: Urgency;
}

export const UrgencyCell = ({ value }: UrgencyCellProps) => {
  return (
    <CellBadge
      value={value}
      className={classNameConfig[value]}
      variant={value === 'Unknown' ? 'outline' : 'default'}
    />
  );
};
