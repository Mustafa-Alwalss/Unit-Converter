// Energy units conversion to joules
export const energyUnits = {
  J: 1,
  kJ: 1000,
  MJ: 1000 ** 2,
  GJ: 1000 ** 3,
  cal: 4.184,
  kcal: 4184,
  Wh: 3600,
  kWh: 3600000,
  eV: 1.602176634e-19
};

export type EnergyUnit = keyof typeof energyUnits;
