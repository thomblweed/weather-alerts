import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState, type ReactNode } from 'react';

import {
  AlertsContextValue,
  AlertsContextDateRangeParamsValue,
  SetAlertsContextDateRangeParams,
} from '../context/AlertsContext';
import { getAlerts } from '../services/alerts.service';

export const AlertsProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useState<{ start?: Date; end?: Date }>({
    start: undefined,
    end: undefined,
  });
  const { data } = useQuery({
    queryKey: ['alerts', params],
    queryFn: () => getAlerts({ start: params.start, end: params.end }),
  });

  const alertsValue = useMemo(() => ({ alerts: data?.alerts ?? [] }), [data]);

  const paramsValue = useMemo(
    () => ({ start: params.start, end: params.end }),
    [params],
  );

  const handleSetParams = useCallback(
    (params: { start?: Date; end?: Date }) => {
      setParams((prev) => ({ ...prev, ...params }));
    },
    [],
  );

  return (
    <AlertsContextValue value={alertsValue}>
      <SetAlertsContextDateRangeParams value={handleSetParams}>
        <AlertsContextDateRangeParamsValue value={paramsValue}>
          {children}
        </AlertsContextDateRangeParamsValue>
      </SetAlertsContextDateRangeParams>
    </AlertsContextValue>
  );
};
