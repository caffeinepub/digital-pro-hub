// Centralized pricing configuration for the Instant Price Calculator
// Update prices here without touching UI markup

type ServiceType = 'PPT Making' | 'Website Help' | 'Document / Notes Work';
type WorkLevel = 'Basic' | 'Medium' | 'Advanced';

interface PricingMatrix {
  [service: string]: {
    [level: string]: number;
  };
}

const pricingMatrix: PricingMatrix = {
  'PPT Making': {
    Basic: 500,
    Medium: 1000,
    Advanced: 2000,
  },
  'Website Help': {
    Basic: 1000,
    Medium: 2500,
    Advanced: 5000,
  },
  'Document / Notes Work': {
    Basic: 300,
    Medium: 700,
    Advanced: 1500,
  },
};

export function getEstimatedPrice(
  serviceType: ServiceType | null,
  workLevel: WorkLevel | null
): number | null {
  if (!serviceType || !workLevel) {
    return null;
  }
  return pricingMatrix[serviceType]?.[workLevel] ?? null;
}

export const serviceTypes: ServiceType[] = ['PPT Making', 'Website Help', 'Document / Notes Work'];
export const workLevels: WorkLevel[] = ['Basic', 'Medium', 'Advanced'];
