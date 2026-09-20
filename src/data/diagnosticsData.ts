import { SymptomDiagnostic } from '../types';

export const DIAGNOSTICS_DATA: SymptomDiagnostic[] = [
  {
    id: 'warm-air',
    title: 'AC is blowing warm or room won’t get cold',
    iconType: 'wind',
    quickSummary: 'Air feels room temperature or slightly warm despite temperature set to 16°C–18°C.',
    likelyCauses: [
      'Refrigerant gas (R410a / R22) leak or depletion',
      'Faulty compressor start capacitor',
      'Severely clogged evaporator or condenser coils',
      'PCB inverter control signal failure'
    ],
    severity: 'Moderate Attention',
    severityColor: 'text-amber-400 bg-amber-950/60 border-amber-800',
    recommendedAction: 'Turn unit off to prevent compressor burnout. Call for immediate pressure check and gas top-up.',
    typicalFixTime: '45 - 60 minutes',
    serviceMatchId: 'ac-repair'
  },
  {
    id: 'water-leaking',
    title: 'Water leaking or dripping inside room',
    iconType: 'droplet',
    quickSummary: 'Water dripping down interior wall or dripping from indoor blower unit onto floor or electronics.',
    likelyCauses: [
      'Algae or dirt sludge blocking the condensate drain pipe',
      'Frozen evaporator coil defrosting uncontrollably',
      'Cracked or tilted indoor drain pan',
      'Loose drain hose connection'
    ],
    severity: 'Immediate Danger / Urgent',
    severityColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
    recommendedAction: 'Shut off power immediately to avoid water entering electrical sockets. Requires drain blowout and coil inspection.',
    typicalFixTime: '30 - 45 minutes',
    serviceMatchId: 'ac-cleaning'
  },
  {
    id: 'breaker-tripping',
    title: 'Power breaker trips when AC or appliance starts',
    iconType: 'zap',
    quickSummary: 'Distribution board switch snaps off immediately or shortly after the AC compressor kicks in.',
    likelyCauses: [
      'Grounded / short-circuited compressor motor winding',
      'Undersized circuit breaker or loose terminal connection',
      'Faulty surge protector or burned contactor switch',
      'Short circuit in interconnecting copper wiring'
    ],
    severity: 'Immediate Danger / Urgent',
    severityColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
    recommendedAction: 'DO NOT keep resetting breaker—this can spark electrical fires. Call our certified master electrician right away.',
    typicalFixTime: '40 - 75 minutes',
    serviceMatchId: 'electrical-installation'
  },
  {
    id: 'noisy-unit',
    title: 'Loud rattling, buzzing, or grinding noise',
    iconType: 'volume-2',
    quickSummary: 'Harsh metallic clattering from the outdoor condenser or whistling/squealing from indoor blower.',
    likelyCauses: [
      'Worn fan motor bearings or broken fan blade',
      'Loose outdoor wall bracket or missing rubber dampeners',
      'Debris, dry leaves, or foreign objects in the shroud',
      'Compressor internal mechanical failure'
    ],
    severity: 'Moderate Attention',
    severityColor: 'text-amber-400 bg-amber-950/60 border-amber-800',
    recommendedAction: 'Stop running unit to protect motor shaft from seizing. Book rapid inspection and dampener replacement.',
    typicalFixTime: '30 - 50 minutes',
    serviceMatchId: 'ac-repair'
  },
  {
    id: 'bad-smell',
    title: 'Foul, damp, or musty smell when turned on',
    iconType: 'alert-triangle',
    quickSummary: 'Stale moisture, sour "dirty sock" odor, or burnt smell coming through the air vents.',
    likelyCauses: [
      'Mold, mildew and bacteria colonizing wet evaporator fins',
      'Stagnant water sitting in a sluggish drain pan',
      'Overheated insulation or electrical connector singe',
      'Dead insect or rodent in external cavity'
    ],
    severity: 'Preventative',
    severityColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800',
    recommendedAction: 'Deep antibacterial chemical foam wash to eradicate spores and sanitize the air path for your health.',
    typicalFixTime: '45 - 60 minutes',
    serviceMatchId: 'ac-cleaning'
  },
  {
    id: 'thermostat-fault',
    title: 'Thermostat unresponsive or displaying error code',
    iconType: 'thermometer',
    quickSummary: 'Remote control not registering, screen blinking error codes (e.g. E1, E4, F0, P4), or continuous cycling.',
    likelyCauses: [
      'Thermistor / ambient temperature sensor failure',
      'Communication breakdown between indoor and outdoor PCB',
      'Thermostat relay contact burned out',
      'Transformer voltage drop'
    ],
    severity: 'Moderate Attention',
    severityColor: 'text-amber-400 bg-amber-950/60 border-amber-800',
    recommendedAction: 'Electronic multi-meter sensor calibration and PCB reset by our HVAC electronic specialist.',
    typicalFixTime: '30 - 60 minutes',
    serviceMatchId: 'hvac-thermostat-repair'
  }
];
