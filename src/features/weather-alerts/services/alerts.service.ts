import { mapAlertsResponseToAlerts } from './mappers/mapAlertsResponseToAlerts';
import api from '../../../services/api.service';

import type { AlertsResponse } from '../interfaces/AlertsResponse.interface';

const alertsOptions = {
  options: {
    baseURL: 'https://api.weather.gov',
  },
};

interface GetAlertsParams {
  start?: Date;
  end?: Date;
}

export const getAlerts = async ({ start, end }: GetAlertsParams) => {
  const response = await api(alertsOptions).get<AlertsResponse>('/alerts', {
    params: {
      start: start?.toISOString(),
      end: end?.toISOString(),
    },
  });

  return {
    alerts: mapAlertsResponseToAlerts(response.data),
  };
};
