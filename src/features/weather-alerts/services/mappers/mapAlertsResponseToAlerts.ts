import type { Alerts } from '../../interfaces/Alerts.interface';
import type { AlertsResponse } from '../../interfaces/AlertsResponse.interface';

export const mapAlertsResponseToAlerts = (
  alertsResponse: AlertsResponse,
): Alerts[] =>
  alertsResponse.features.map((alert) => ({
    id: alert.id,
    area: alert.properties.areaDesc,
    sender: alert.properties.senderName,
    sent: new Date(alert.properties.sent),
    effective: new Date(alert.properties.effective),
    ends: alert.properties.ends ? new Date(alert.properties.ends) : null,
    event: alert.properties.event,
    status: alert.properties.status,
    category: alert.properties.category,
    severity: alert.properties.severity,
    certainty: alert.properties.certainty,
    urgency: alert.properties.urgency,
  }));
