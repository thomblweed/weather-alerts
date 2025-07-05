import type { Category } from '../types/Category.type';
import type { Certainty } from '../types/Certainty.type';
import type { Severity } from '../types/Severity.type';
import type { Status } from '../types/Status.type';
import type { Urgency } from '../types/Urgency.type';

export interface Alerts {
  id: string;
  sender: string;
  event: string;
  areaDescription: string;
  status: Status;
  category: Category;
  severity: Severity;
  certainty: Certainty;
  urgency: Urgency;
}
