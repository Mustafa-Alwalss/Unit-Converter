// Temperature units conversion to Kelvin: K = value * factor + offset
export interface TemperatureConversion {
  factor: number;
  offset: number;
}

export const temperatureUnits: Record<string, TemperatureConversion> = {
  K: { factor: 1, offset: 0 },
  C: { factor: 1, offset: 273.15 },
  F: { factor: 5/9, offset: 273.15 - 32 * 5/9 }, // = 255.372222...
  R: { factor: 5/9, offset: 0 }, // Rankine
  Ré: { factor: 5/4, offset: 273.15 }, // Réaumur
  Ro: { factor: 40/21, offset: 273.15 - 7.5 * 40/21 } // Rømer
};

export type TemperatureUnit = keyof typeof temperatureUnits;
