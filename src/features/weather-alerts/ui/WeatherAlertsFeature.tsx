import { AlertsProvider } from '../providers/AlertsProvider';
import { AlertsTable } from './table/AlertsTable';
import { Card } from '@/ui/card';

export const WeatherAlertsFeature = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Weather Alerts</h1>
      <Card className="h-[calc(100vh-6rem)] min-h-[30rem] max-h-[70rem] overflow-y-auto p-4">
        <AlertsProvider>
          <AlertsTable />
        </AlertsProvider>
      </Card>
    </div>
  );
};
