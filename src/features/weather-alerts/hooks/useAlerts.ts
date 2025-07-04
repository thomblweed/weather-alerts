import { use } from 'react';

import { AlertsContext } from '../context/AlertsContext';

export const useAlerts = () => {
  const alertsContext = use(AlertsContext);

  if (alertsContext === undefined) {
    throw new Error('useAlerts must be used within an AlertsProvider');
  }

  return alertsContext;
};
