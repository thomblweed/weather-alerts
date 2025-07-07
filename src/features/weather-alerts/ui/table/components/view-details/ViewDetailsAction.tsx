import { EyeIcon } from 'lucide-react';

import { Button } from '@/ui/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/ui/components/tooltip';

export const ViewDetailsAction = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <EyeIcon className="size-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>View Details</TooltipContent>
    </Tooltip>
  );
};
