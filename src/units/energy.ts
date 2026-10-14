// Energy units conversion to joules
import type {IUnits} from "./interface.ts";


export const energyUnits: Record<string, IUnits> = {
  J: { factor: 1, label: "Joules • J" },
  kJ: { factor: 1000, label: "Kilojoules • kJ" },
  MJ: { factor: 1000 ** 2, label: "Megajoules • MJ" },
  GJ: { factor: 1000 ** 3, label: "Gigajoules • GJ" },
  cal: { factor: 4.184, label: "Calories • cal" },
  kcal: { factor: 4184, label: "Kilocalories • kcal" },
  Wh: { factor: 3600, label: "Watt-hours • Wh" },
  kWh: { factor: 3600000, label: "Kilowatt-hours • kWh" },
  eV: { factor: 1.602176634e-19, label: "Electronvolts • eV" }
};

export type EnergyUnit = keyof typeof energyUnits;
