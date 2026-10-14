// Pressure units conversion to pascals
import type {IUnits} from "./interface.ts";

export const pressureUnits: Record<string, IUnits> = {
  Pa: { factor: 1, label: "Pascals • Pa" },
  kPa: { factor: 1000, label: "Kilopascals • kPa" },
  MPa: { factor: 1000 ** 2, label: "Megapascals • MPa" },
  GPa: { factor: 1000 ** 3, label: "Gigapascals • GPa" },
  bar: { factor: 100000, label: "Bar • bar" },
  psi: { factor: 6894.76, label: "Pounds per Square Inch • psi" },
  atm: { factor: 101325, label: "Standard Atmosphere • atm" },
  Torr: { factor: 133.322, label: "Torr • Torr" },
  mmHg: { factor: 133.322, label: "Millimeters of Mercury • mmHg" }
};

export type PressureUnit = keyof typeof pressureUnits;
