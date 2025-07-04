import type { Alerts } from '../../interfaces/Alerts.interface';
import type { AlertsResponse } from '../../interfaces/AlertsResponse.interface';

export const mapAlertsResponseToAlerts = (
  alertsResponse: AlertsResponse,
): Alerts[] =>
  alertsResponse.features.map((alert) => ({
    id: alert.id,
    sender: alert.properties.senderName,
    areaDescription: alert.properties.areaDesc,
    status: alert.properties.status,
    category: alert.properties.category,
    severity: alert.properties.severity,
    certainty: alert.properties.certainty,
    urgency: alert.properties.urgency,
  }));
