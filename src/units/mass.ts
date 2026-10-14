// Mass units conversion to grams
import type {IUnits} from "./interface.ts";


export const massUnits: Record<string, IUnits> = {
  mg: { factor: 0.001, label: "Milligrams • mg" },
  g: { factor: 1, label: "Grams • g" },
  kg: { factor: 1000, label: "Kilograms • kg" },
  t: { factor: 1e6, label: "Metric Tonnes • t" },
  oz: { factor: 28.3495, label: "Ounces • oz" },
  lb: { factor: 453.592, label: "Pounds • lb" },
  stone: { factor: 6350.29, label: "Stones • st" }
};

export type MassUnit = keyof typeof massUnits;
