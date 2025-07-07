import { DialogTrigger } from '@radix-ui/react-dialog';
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
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <EyeIcon className="size-6" />
          </Button>
        </DialogTrigger>
      </TooltipTrigger>
      <TooltipContent>View Details</TooltipContent>
    </Tooltip>
  );
};
