import type { PracticeSummary } from '../types/PracticeSummary';

export const mockPractices: PracticeSummary[] = [
  {
    id: '1',
    name: 'Bright Smile Dental',
    city: 'San Francisco',
    country: 'USA',
    newPatientsThisMonth: 47,
    appointmentRequests: 156,
    conversionRate: 30.1,
    monthlyTrend: [28, 31, 35, 42, 39, 47]
  },
  {
    id: '2',
    name: 'Oakwood Family Dentistry',
    city: 'Austin',
    country: 'USA',
    newPatientsThisMonth: 23,
    appointmentRequests: 89,
    conversionRate: 25.8,
    monthlyTrend: [19, 22, 20, 25, 21, 23]
  },
  {
    id: '3',
    name: 'Metro Dental Care',
    city: 'Toronto',
    country: 'Canada',
    newPatientsThisMonth: 12,
    appointmentRequests: 145,
    conversionRate: 8.3,
    monthlyTrend: [15, 18, 14, 16, 13, 12]
  }
];