import { use } from 'react';

import { AlertsContextValue } from '../context/AlertsContext';

export const useAlerts = () => {
  const alertsContext = use(AlertsContextValue);

  if (alertsContext === undefined) {
    throw new Error('useAlerts must be used within an AlertsProvider');
  }

  return alertsContext;
};
