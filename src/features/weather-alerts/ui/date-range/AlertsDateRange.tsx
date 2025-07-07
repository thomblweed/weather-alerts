import { Button } from '@/ui/components/button';
import { DatePicker } from '@/ui/form/DatePicker';

import { useAlertsDateRangeParams } from '../../hooks/useAlertsDateRangeParams';
import { useSetAlertsDateRangeParams } from '../../hooks/useSetAlertsDateRangeParams';

export const AlertsDateRange = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Select Date Range</h2>
        <p className="text-sm text-muted-foreground">
          Select a date range to get alerts for a specific time period.
        </p>
      </div>
      <AlertsDatePicker />
    </div>
  );
};

const AlertsDatePicker = () => {
  const setParams = useSetAlertsDateRangeParams();
  const { start, end } = useAlertsDateRangeParams();

  return (
    <div className="flex items-end gap-4 flex-wrap">
      <div className="flex gap-4 flex-wrap">
        <DatePicker
          label="Start Date"
          id="start-date"
          value={start}
          onSelect={(date) => {
            setParams({ start: date });
          }}
        />
        <DatePicker
          label="End Date"
          id="end-date"
          value={end}
          onSelect={(date) => {
            setParams({ end: date });
          }}
        />
      </div>
      <Button
        disabled={!start && !end}
        onClick={() => {
          setParams({ start: undefined, end: undefined });
        }}
      >
        Clear Date Range
      </Button>
    </div>
  );
};
