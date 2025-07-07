import clsx from 'clsx';

export const CellText = ({
  value,
  isSortable = false,
}: {
  value: string;
  isSortable?: boolean;
}) => (
  <div className={clsx('text-wrap', { 'p-2': isSortable, 'p-1': !isSortable })}>
    {value}
  </div>
);
