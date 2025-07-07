import { CellBadge } from '@/ui/table/CellBadge';

import type { Severity } from '../../../types/Severity.type';

const classNameConfig: Record<Severity, string> = {
  Extreme: 'bg-fuchsia-400',
  Severe: 'bg-red-400',
  Moderate: 'bg-orange-400',
  Minor: 'bg-amber-400',
  Unknown: '',
};

interface SeverityCellProps {
  value: Severity;
}

export const SeverityCell = ({ value }: SeverityCellProps) => {
  return (
    <CellBadge
      value={value}
      className={classNameConfig[value]}
      variant={value === 'Unknown' ? 'outline' : 'default'}
    />
  );
};
