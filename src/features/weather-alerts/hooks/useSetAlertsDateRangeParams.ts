import { use } from 'react';

import { SetAlertsContextDateRangeParams } from '../context/AlertsContext';

export const useSetAlertsDateRangeParams = () => {
  const setParams = use(SetAlertsContextDateRangeParams);

  if (!setParams) {
    throw new Error(
      'useSetAlertsDateRangeParams should be used within an AlertsProvider',
    );
  }

  return setParams;
};
