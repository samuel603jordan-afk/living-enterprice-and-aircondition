export interface ServiceItem {
  id: string;
  title: string;
  category: 'ac' | 'hvac' | 'electrical';
  shortDesc: string;
  description: string;
  features: string[];
  idealFor: string;
  urgency: '24/7 Emergency' | 'Same-Day' | 'Scheduled';
  startingPriceGH: number;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
  highlight?: boolean;
}

export interface SymptomDiagnostic {
  id: string;
  title: string;
  iconType: 'wind' | 'droplet' | 'zap' | 'volume-2' | 'alert-triangle' | 'thermometer';
  quickSummary: string;
  likelyCauses: string[];
  severity: 'Immediate Danger / Urgent' | 'Moderate Attention' | 'Preventative';
  severityColor: string;
  recommendedAction: string;
  typicalFixTime: string;
  serviceMatchId: string;
}

export interface ServiceArea {
  name: string;
  distanceKm: number;
  estArrivalMin: string;
  popular: boolean;
  landmarks: string;
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  area: string;
  serviceId: string;
  urgency: 'Immediate (24/7 Emergency)' | 'Today / Within 4 Hours' | 'Specific Date & Time';
  date?: string;
  time?: string;
  notes?: string;
}
