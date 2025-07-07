import { ViewDetailsDialog } from './ViewDetailsDialog';

import type { AlertDetails } from '../../../../interfaces/AlertDetails.interface';

interface ViewDetailsProps {
  details: AlertDetails;
  event: string;
}

export const ViewDetails = ({ details, event }: ViewDetailsProps) => {
  return <ViewDetailsDialog details={details} event={event} />;
};
