// Mass units conversion to grams
import type {IUnits} from "./interface.ts";

export const massUnits: Record<string, IUnits> = {
  u:    { factor: 1.66053906660e-24, label: "Atomic Mass Units • u" },
  µg:   { factor: 0.000001,          label: "Micrograms • µg" },
  mg:   { factor: 0.001,             label: "Milligrams • mg" },
  g:    { factor: 1,                 label: "Grams • g" },
  kg:   { factor: 1000,              label: "Kilograms • kg" },
  t:    { factor: 1e6,               label: "Metric Tonnes • t" },
  ct:   { factor: 0.2,               label: "Carats • ct" },
  gr:   { factor: 0.06479891,        label: "Grains • gr" },
  oz:   { factor: 28.349523125,      label: "Ounces • oz" },
  lb:   { factor: 453.59237,         label: "Pounds • lb" },
  stone: { factor: 6350.29318,       label: "Stones • st" },
  cwt_us: { factor: 45359.237,       label: "US Hundredweight • cwt_us" },
  cwt_uk: { factor: 50802.34544,     label: "Imperial Hundredweight • cwt_uk" },
  sh_tn: { factor: 907184.74,        label: "US Short Tons • sh_tn" },
  ln_tn: { factor: 1016046.9088,     label: "Imperial Long Tons • ln_tn" }
};

export type MassUnit = keyof typeof massUnits;
