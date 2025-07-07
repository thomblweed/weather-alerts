import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/ui/components/dialog';
import { DisplayField } from '@/ui/display/DisplayField';

import { ViewDetailsAction } from './ViewDetailsAction';

import type { AlertDetails } from '../../../../interfaces/AlertDetails.interface';

interface ViewDetailsDialogProps {
  details: AlertDetails;
  event: string;
}

export const ViewDetailsDialog = ({
  details,
  event,
}: ViewDetailsDialogProps) => {
  return (
    <Dialog>
      <ViewDetailsAction />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <DisplayField
              label="Effective"
              value={details.effective.toLocaleString()}
            />
            {details.ends ? (
              <DisplayField
                label="Ends"
                value={details.ends.toLocaleString()}
              />
            ) : null}
          </div>
          {details.description ? (
            <DisplayField
              label="Description"
              value={details.description
                .split('*')
                .filter(Boolean)
                .map((line) => (
                  <p key={line} className="py-1">
                    {line}
                  </p>
                ))}
            />
          ) : null}
          {details.instruction ? (
            <DisplayField label="Instruction" value={details.instruction} />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};
