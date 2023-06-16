export interface Service {
  id: number | null;
  type: string;
  provider: string;
  cost: number;
  currency: string;
  isPayed: boolean;
}
