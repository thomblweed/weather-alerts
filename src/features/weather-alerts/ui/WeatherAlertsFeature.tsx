import { Card } from '@/ui/components/card';

import { AlertsProvider } from '../providers/AlertsProvider';
import { AlertsDateRange } from './date-range/AlertsDateRange';
import { AlertsTable } from './table/AlertsTable';

export const WeatherAlertsFeature = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Weather Alerts</h1>
      <Card className="h-[calc(100vh-5rem)] min-h-[70rem] overflow-y-auto p-4">
        <AlertsProvider>
          <AlertsDateRange />
          <AlertsTable />
        </AlertsProvider>
      </Card>
    </div>
  );
};
