export interface PlanFeature {
  text: string;
  available: boolean;
}

export interface Plan {
  planName: string;
  price: string;
  badge?: string;
  features: PlanFeature[];
  buttonText: string;
  duration?: string;
}
