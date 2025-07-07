import { Badge } from '@/ui/components/badge';

interface CellBadgeProps {
  value: string;
  variant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'destructive'
    | null
    | undefined;
  className?: string;
}

export const CellBadge = ({ value, variant, className }: CellBadgeProps) => {
  return (
    <div className="flex items-center justify-center">
      <Badge variant={variant} className={className}>
        {value}
      </Badge>
    </div>
  );
};
