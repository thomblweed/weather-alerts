import { useQuery } from '@tanstack/react-query';
import { useMemo, type ReactNode } from 'react';

import { AlertsContext } from '../context/AlertsContext';
import { getAlerts } from '../services/alerts.service';

export const AlertsProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useQuery({
    queryKey: ['alerts'],
    queryFn: getAlerts,
  });

  const value = useMemo(() => ({ alerts: data?.alerts ?? [] }), [data]);

  return <AlertsContext value={value}>{children}</AlertsContext>;
};
