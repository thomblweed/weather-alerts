import { ViewDetailsAction } from './ViewDetailsAction';

import type { AlertDetails } from '../../../../interfaces/AlertDetails.interface';

interface ViewDetailsProps {
  details: AlertDetails;
}

export const ViewDetails = ({ details }: ViewDetailsProps) => {
  return <ViewDetailsAction />;
};
