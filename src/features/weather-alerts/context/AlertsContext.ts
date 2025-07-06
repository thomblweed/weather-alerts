import { createContext } from 'react';

import type { Alerts } from '../interfaces/Alerts.interface';

interface AlertsContextType {
  alerts: Alerts[];
}

export const AlertsContextValue = createContext<AlertsContextType | undefined>({
  alerts: [],
});

export const AlertsContextDateRangeParamsValue = createContext<
  | {
      start?: Date;
      end?: Date;
    }
  | undefined
>(undefined);

export const SetAlertsContextDateRangeParams = createContext<
  ((params: { start?: Date; end?: Date }) => void) | undefined
>(undefined);

export const AlertsContextLoadingValue = createContext<boolean | undefined>(
  undefined,
);
