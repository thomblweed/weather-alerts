import { CellBadge } from '@/ui/table/CellBadge';

import type { Certainty } from '../../../types/Certainty.type';

const classNameConfig: Record<Certainty, string> = {
  Observed: 'bg-blue-400',
  Likely: 'bg-blue-400',
  Possible: 'bg-sky-400',
  Unlikely: 'bg-sky-400',
  Unknown: '',
};

interface CertaintyCellProps {
  value: Certainty;
}

export const CertaintyCell = ({ value }: CertaintyCellProps) => {
  return (
    <CellBadge
      value={value}
      className={classNameConfig[value]}
      variant={value === 'Unknown' ? 'outline' : 'default'}
    />
  );
};
