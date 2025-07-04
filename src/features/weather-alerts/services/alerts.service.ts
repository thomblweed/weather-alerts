import { mapAlertsResponseToAlerts } from './mappers/mapAlertsResponseToAlerts';
import api from '../../../services/api.service';

import type { AlertsResponse } from '../interfaces/AlertsResponse.interface';

const alertsOptions = {
  options: {
    baseURL: 'https://api.weather.gov',
  },
};

export const getAlerts = async () => {
  const response = await api(alertsOptions).get<AlertsResponse>('/alerts');

  return {
    alerts: mapAlertsResponseToAlerts(response.data),
  };
};
