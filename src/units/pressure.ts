// Pressure units conversion to pascals
export const pressureUnits = {
  Pa: 1,
  kPa: 1000,
  MPa: 1000 ** 2,
  GPa: 1000 ** 3,
  bar: 100000,
  psi: 6894.76,
  atm: 101325,
  Torr: 133.322,
  mmHg: 133.322
};

export type PressureUnit = keyof typeof pressureUnits;
