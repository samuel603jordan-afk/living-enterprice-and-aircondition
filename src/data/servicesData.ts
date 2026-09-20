import { ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Living electrical and Air condition service',
  shortName: 'Living Electrical & AC Service',
  leadEngineer: 'Master Technician (Living Electrical)',
  phone: '024 781 8784',
  phoneRaw: '+233247818784',
  address: 'Alajo T junction Street 7',
  city: 'Accra',
  region: 'Greater Accra, Ghana',
  hours: 'Open 24 hours (24/7 Everyday)',
  rating: 5.0,
  reviewsCount: 13,
  headlineReview: '"He was very understanding and calm and knows how to do his job well."',
  whatsappLink: 'https://wa.me/233247818784?text=Hello%20Living%20Electrical%20%26%20AC%20Service%2C%20I%20need%20assistance%20with%20my%20air%20conditioning%20%2F%20electrical%20system.'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ac-repair',
    title: 'A/C System Repair',
    category: 'ac',
    shortDesc: 'Rapid troubleshooting for warm air, compressor trips, refrigerant leaks, and electrical board errors.',
    description: 'When your air conditioner stops cooling in the Accra heat, every minute counts. We arrive with factory-grade diagnostic meters, refrigerant gas (R410A / R22 / R32), and certified replacement parts to restore ice-cold comfort immediately.',
    features: [
      'Diagnostic check on compressor, capacitors & contactors',
      'Leak detection & electronic pressure testing',
      'PCB electrical control board repair',
      'Replacement of fan motors & indoor blower wheels'
    ],
    idealFor: 'Split ACs, inverter units, and cassette systems blowing warm air or refusing to turn on.',
    urgency: '24/7 Emergency',
    startingPriceGH: 250,
    popular: true
  },
  {
    id: 'ac-maintenance',
    title: 'A/C System Maintenance',
    category: 'ac',
    shortDesc: 'Complete multi-point seasonal servicing to slash power bills, prevent sudden breakdowns, and prolong unit life.',
    description: 'Preventative care calibrated for Ghana\'s tropical humidity and dust. Comprehensive inspection of amp draws, gas pressure gauges, condensate lines, and electrical terminals to ensure optimal performance.',
    features: [
      'Amp draw & voltage stability measurement',
      'Refrigerant gas top-up & pressure balancing',
      'Filter sterilization & housing deodorization',
      'Condensate line flush to eliminate water overflow'
    ],
    idealFor: 'Homes, embassies, and offices wanting uninterrupted cooling and low electricity bills.',
    urgency: 'Same-Day',
    startingPriceGH: 180,
    popular: true
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    category: 'ac',
    shortDesc: 'Certified, neat wall-mount split, inverter, floor-standing, and ceiling cassette installations.',
    description: 'Precision mounting with zero vibration noise, properly insulated copper tubing, nitrogen pressure test, and vacuum evacuation before gas release. Clean, aesthetic finish that protects your home\'s interior aesthetic.',
    features: [
      'Heavy-duty anti-vibration outdoor bracket mounting',
      'Precision flared copper piping & UV-resistant insulation',
      'Dedicated electrical circuit breaker & isolator switch wiring',
      'Full post-install airflow and cooling temperature calibration'
    ],
    idealFor: 'New homes, renovated spaces, office setups, and unit replacements.',
    urgency: 'Scheduled',
    startingPriceGH: 350,
    popular: true
  },
  {
    id: 'ac-cleaning',
    title: 'Deep AC Cleaning & Coil Wash',
    category: 'ac',
    shortDesc: 'High-pressure anti-fungal foam coil wash that strips out baked-in dust, molds, and allergens.',
    description: 'Standard wiping is not enough. We bag the indoor unit to protect walls, apply biodegradable coil foaming detergent, and blast away years of clogged debris to supercharge airflow and eliminate musty smells.',
    features: [
      'Protective catchment bag to safeguard walls and furniture',
      'Deep evaporator coil antibacterial foam treatment',
      'Blower wheel & drain pan steam/chemical decontamination',
      'Outdoor condenser fins wash for maximum heat rejection'
    ],
    idealFor: 'Units running sluggishly, smelling foul, or not cleaned in over 6 months.',
    urgency: 'Same-Day',
    startingPriceGH: 200,
    popular: true
  },
  {
    id: 'heating-installation',
    title: 'Heating System Installation',
    category: 'hvac',
    shortDesc: 'Reliable water heater and space heating system installation with dedicated safety breakers.',
    description: 'Safe, grounded installation of electric water heaters, immersion systems, and central heating elements. Fully compliant with Ghana safety electrical standards to prevent shocks and power surges.',
    features: [
      'Instant and storage water heater installation',
      'Pressure relief valve & temperature limiter integration',
      'Surge-protected dedicated electrical wiring with RCD safety',
      'Plumbing seal check and anti-scald testing'
    ],
    idealFor: 'Bathrooms, kitchen utilities, guest houses, and commercial hot water needs.',
    urgency: 'Scheduled',
    startingPriceGH: 300
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC System Maintenance',
    category: 'hvac',
    shortDesc: 'Comprehensive preventative care for multi-split, VRF/VRV, and commercial ducting systems.',
    description: 'Full-system maintenance contracts and emergency servicing for retail stores, banking halls, clinics, and multi-story residences in Accra. We optimize energy consumption and maintain clean indoor air quality.',
    features: [
      'VRF/VRV diagnostics and refrigerant level monitoring',
      'Duct inspection, grille cleaning & airflow balancing',
      'Belt tensioning and blower fan lubrication',
      'Digital system operating logs and preventative reports'
    ],
    idealFor: 'Commercial buildings, supermarkets, data rooms, and luxury estates.',
    urgency: 'Same-Day',
    startingPriceGH: 450
  },
  {
    id: 'electrical-installation',
    title: 'Electrical Installation & Wiring',
    category: 'electrical',
    shortDesc: 'Certified electrical wiring, distribution board (DB) upgrades, breaker troubleshooting, and lighting.',
    description: 'Master electrician services with calm, meticulous attention to detail. We troubleshoot short circuits, install surge protectors to guard against Accra power fluctuations, and wire safe distribution panels.',
    features: [
      'Distribution board (DB) neat rewiring & circuit breaker upgrades',
      'Surge protection device (SPD) installation for AC & electronics',
      'Load balancing to prevent persistent breaker tripping',
      'Full house rewiring, sockets, switches, and LED architectural lighting'
    ],
    idealFor: 'Homes or businesses experiencing power trips, flickering lights, or doing new builds.',
    urgency: '24/7 Emergency',
    startingPriceGH: 250,
    popular: true
  },
  {
    id: 'thermostat-installation',
    title: 'Thermostat Installation',
    category: 'hvac',
    shortDesc: 'Modern digital, smart Wi-Fi, and programmable thermostat installations with precise sensors.',
    description: 'Take total control of your cooling schedule and cut down power costs. We wire and calibrate digital and smart Wi-Fi thermostats that integrate seamlessly with your split, central, or ducted AC system.',
    features: [
      'Smart Wi-Fi thermostat wiring (Nest, Ecobee, Honeywell, etc.)',
      'C-wire / 24V transformer electrical integration',
      'Multi-zone climate control setup',
      'Mobile app pairing and energy savings scheduling'
    ],
    idealFor: 'Modern smart homes, executive suites, and energy-conscious property owners.',
    urgency: 'Same-Day',
    startingPriceGH: 220
  },
  {
    id: 'hvac-thermostat-repair',
    title: 'HVAC & Thermostat Repair',
    category: 'hvac',
    shortDesc: 'Rapid repair for unresponsive thermostats, frozen coils, fan relay failures, and sensor drift.',
    description: 'Is your AC cycling on and off every few minutes or reading the wrong temperature? Our certified technicians diagnose sensor drifts, stuck relay contactors, faulty low-voltage transformers, and PCB communication errors.',
    features: [
      'Sensor recalibration and wire continuity tests',
      'Contactor & relay replacement for short-cycling units',
      'Short-circuit diagnosis in low-voltage control lines',
      'Emergency manual override setup if main board fails'
    ],
    idealFor: 'Units that turn on and off rapidly, won\'t obey temperature settings, or display error codes.',
    urgency: '24/7 Emergency',
    startingPriceGH: 240
  }
];
