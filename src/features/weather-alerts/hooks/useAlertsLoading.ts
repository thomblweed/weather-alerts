import { use } from 'react';

import { AlertsContextLoadingValue } from '../context/AlertsContext';

export const useAlertsLoading = () => {
  const isLoading = use(AlertsContextLoadingValue);

  if (isLoading === undefined) {
    throw new Error('useAlertsLoading must be used within an AlertsProvider');
  }

  return isLoading;
};
