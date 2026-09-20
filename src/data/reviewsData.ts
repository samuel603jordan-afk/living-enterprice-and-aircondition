import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Kojo Mensah',
    location: 'Airport Residential Area, Accra',
    rating: 5,
    date: '3 weeks ago',
    comment: 'He was very understanding and calm and knows how to do his job well. Came around late evening when our master bedroom AC was blowing hot air. Fixed the capacitor and balanced the refrigerant with zero fuss.',
    serviceUsed: 'A/C System Repair & Gas Recharge',
    verified: true,
    highlight: true
  },
  {
    id: 'rev-2',
    author: 'Esi Ampofo',
    location: 'Dzorwulu, Accra',
    rating: 5,
    date: '1 month ago',
    comment: 'Living Electrical arrived in less than 30 minutes to Dzorwulu. Very neat work on our distribution board when a short circuit kept tripping the main switch. Meticulous, polite, and very fair pricing.',
    serviceUsed: 'Electrical Installation & DB Board Rewiring',
    verified: true,
    highlight: true
  },
  {
    id: 'rev-3',
    author: 'David Osei-Tutu',
    location: 'East Legon, Accra',
    rating: 5,
    date: '1 month ago',
    comment: 'Called them on a Sunday night at 11:30 PM because our twin inverter ACs stopped working. The 24 hours service is 100% genuine. The technician was respectful, diagnosed the issue quickly, and got it cooling like a freezer.',
    serviceUsed: '24/7 Emergency AC Repair',
    verified: true,
    highlight: true
  },
  {
    id: 'rev-4',
    author: 'Beatrice Quaye',
    location: 'Alajo, Accra',
    rating: 5,
    date: '2 months ago',
    comment: 'He is our go-to technician right here in Alajo. Installed 3 new split ACs in our new apartment. Used high quality brackets, proper copper piping, and even swept up all the drilling dust afterwards.',
    serviceUsed: 'AC Installation',
    verified: true,
    highlight: true
  },
  {
    id: 'rev-5',
    author: 'Nana Yaw Addo',
    location: 'Roman Ridge, Accra',
    rating: 5,
    date: '2 months ago',
    comment: 'The deep chemical coil wash made our AC run completely silent and smelling fresh again. Airflow tripled. True professional who explains everything calmly.',
    serviceUsed: 'Deep AC Cleaning & Coil Wash',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Michael Vanderpuije',
    location: 'Cantonments, Accra',
    rating: 5,
    date: '3 months ago',
    comment: 'Diagnosed a tricky thermostat communication fault between our multi-split system that two other technicians failed to figure out. Exceptional technical knowledge.',
    serviceUsed: 'HVAC Repair and Thermostat repair',
    verified: true
  },
  {
    id: 'rev-7',
    author: 'Grace Annan',
    location: 'Achimota, Accra',
    rating: 5,
    date: '3 months ago',
    comment: 'Installed our water heating system and electrical surge protector. Very safe, grounded, and clean wiring. Highly recommend for any electrical job.',
    serviceUsed: 'Heating System Installation',
    verified: true
  },
  {
    id: 'rev-8',
    author: 'Kwame Boateng',
    location: 'Spintex Road, Accra',
    rating: 5,
    date: '4 months ago',
    comment: 'Came to our bakery office on short notice. Very calm demeanour, fair billing, no hidden fees. Definitely keeping his contact on speed dial.',
    serviceUsed: 'HVAC system maintenance',
    verified: true
  }
];

export const GOOGLE_RATING_STATS = {
  averageRating: 5.0,
  totalReviews: 13,
  fiveStarCount: 13,
  fourStarCount: 0,
  threeStarCount: 0,
  twoStarCount: 0,
  oneStarCount: 0,
  recommendationRate: '100%'
};
