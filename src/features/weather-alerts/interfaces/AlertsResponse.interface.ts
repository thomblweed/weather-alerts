import type { Category } from '../types/Category.type';
import type { Certainty } from '../types/Certainty.type';
import type { Severity } from '../types/Severity.type';
import type { Status } from '../types/Status.type';
import type { Urgency } from '../types/Urgency.type';

interface GeoJsonContext {
  '@version'?: string;
  wx?: string;
  s?: string;
  geo?: string;
  unit?: string;
  '@vocab'?: string;
  geometry?: string;
  properties?: string;
}

interface Geometry {
  type: string;
  coordinates: number[][] | number[] | number[][][];
}

interface WeatherAlertProperties {
  '@id'?: string;
  '@type'?: string;
  id: string;
  areaDesc: string;
  geocode?: {
    SAME?: string[];
    UGC?: string[];
  };
  affectedZones?: string[];
  references?: {
    '@id'?: string;
    identifier: string;
    sender: string;
    sent: string;
  }[];
  sent: string;
  effective: string;
  onset?: string | null;
  expires: string;
  ends?: string | null;
  status: Status;
  messageType: string;
  category: Category;
  severity: Severity;
  certainty: Certainty;
  urgency: Urgency;
  event: string;
  sender: string;
  senderName: string;
  headline?: string | null;
  description: string | null;
  instruction?: string;
  response?: string;
  parameters?: Record<string, string[]>;
  eventCode?: Record<string, string[]>;
  scope?: string;
  code?: string;
  language?: string;
  web?: string;
  contact?: string;
}

interface WeatherAlertFeature {
  id: string;
  type: 'Feature';
  geometry: Geometry | null;
  properties: WeatherAlertProperties;
}

export interface AlertsResponse {
  '@context': (string | GeoJsonContext)[];
  type: 'FeatureCollection';
  features: WeatherAlertFeature[];
  title?: string;
  updated?: string;
  pagination?: {
    next?: string;
    previous?: string;
  };
}
