export interface AlertDetails {
  effective: Date;
  ends: Date | null;
  description: string | null;
  instruction: string | undefined;
}
