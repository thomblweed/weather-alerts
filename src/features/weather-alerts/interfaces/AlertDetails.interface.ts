export interface AlertDetails {
  effective: Date;
  ends: Date | null;
  description: string;
  instruction: string | undefined;
}
