// Volume units conversion to cubic meters
export const volumeUnits = {
  m³: 1,
  cm³: 0.000001,
  mm³: 1e-9,
  L: 0.001,
  mL: 0.000001,
  in³: 0.0000163871,
  ft³: 0.0283168,
  yd³: 0.764555,
  tsp: 0.00000492892, // US teaspoon
  tbsp: 0.0000147868, // US tablespoon
  cup: 0.000236588,   // US cup
  pt: 0.000473176,    // US pint
  qt: 0.000946353,    // US quart
  gal: 0.00378541     // US gallon
};

export type VolumeUnit = keyof typeof volumeUnits;
