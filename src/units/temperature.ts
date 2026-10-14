// Temperature units conversion to Kelvin: K = value * factor + offset
import type {IUnits} from "./interface.ts";

export const temperatureUnits: Record<string, IUnits> = {
  K:  { factor: 1,               label: "Kelvin • K" },
  C:  { factor: 1,               label: "Celsius • °C" },
  F:  { factor: 5/9,             label: "Fahrenheit • °F" },
  R:  { factor: 5/9,             label: "Rankine • °R" },
  Ré: { factor: 5/4,             label: "Réaumur • °Ré" },
  Ro: { factor: 40/21,           label: "Rømer • °Rø" },
  N:  { factor: 100/33,          label: "Newton • °N" },
  D:  { factor: -2/3,            label: "Delisle • °D" }
};

// Offsets for temperature conversion to Kelvin (K = value * factor + offset)
export const temperatureOffsets: Record<string, number> = {
  K:  0,
  C:  273.15,
  F:  273.15 - 32 * 5/9, // ≈ 255.372222...
  R:  0,
  Ré: 273.15,
  Ro: 273.15 - 7.5 * 40/21, // ≈ 258.8642857...
  N:  273.15,
  D:  373.15
};

export type TemperatureUnit = keyof typeof temperatureUnits;
