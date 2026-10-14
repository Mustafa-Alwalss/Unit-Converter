// Energy units conversion to joules
import type {IUnits} from "./interface.ts";

export const energyUnits: Record<string, IUnits> = {
  eV:   { factor: 1.602176634e-19, label: "Electronvolts • eV" },
  keV:  { factor: 1.602176634e-16, label: "Kiloelectronvolts • keV" },
  MeV:  { factor: 1.602176634e-13, label: "Megaelectronvolts • MeV" },
  GeV:  { factor: 1.602176634e-10, label: "Gigaelectronvolts • GeV" },
  erg:  { factor: 1e-7,            label: "Ergs • erg" },
  J:    { factor: 1,               label: "Joules • J" },
  kJ:   { factor: 1000,            label: "Kilojoules • kJ" },
  MJ:   { factor: 1000 ** 2,       label: "Megajoules • MJ" },
  GJ:   { factor: 1000 ** 3,       label: "Gigajoules • GJ" },
  TJ:   { factor: 1000 ** 4,       label: "Terajoules • TJ" },
  cal:  { factor: 4.184,           label: "Thermochemical Calories • cal" },
  kcal: { factor: 4184,            label: "Kilocalories • kcal" },
  Wh:   { factor: 3600,            label: "Watt-hours • Wh" },
  kWh:  { factor: 3600000,         label: "Kilowatt-hours • kWh" },
  BTU_IT: { factor: 1055.05585262, label: "British Thermal Units (IT) • BTU_IT" },
  BTU_th: { factor: 1054.35,       label: "British Thermal Units (th) • BTU_th" },
  therm: { factor: 105505585.262,  label: "Therms (US) • therm" },
  ftlb: { factor: 1.3558179483314004, label: "Foot-Pounds • ft·lb" },
  tTNT: { factor: 4.184e9,         label: "Tons of TNT • tTNT" }
};

export type EnergyUnit = keyof typeof energyUnits;
