import { createContext } from 'react';

import type { Alerts } from '../interfaces/Alerts.interface';

interface AlertsContextType {
  alerts: Alerts[];
}

export const AlertsContext = createContext<AlertsContextType | undefined>({
  alerts: [],
});
