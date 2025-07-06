import { use } from 'react';

import { AlertsContextDateRangeParamsValue } from '../context/AlertsContext';

export const useAlertsDateRangeParams = () => {
  const params = use(AlertsContextDateRangeParamsValue);

  if (params === undefined) {
    throw new Error(
      'useAlertsDateRangeParams must be used within an AlertsProvider',
    );
  }

  return params;
};
