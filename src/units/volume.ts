// Volume units conversion to cubic meters
import type {IUnits} from "./interface.ts";

export const volumeUnits: Record<string, IUnits> = {
  m3: { factor: 1, label: "Cubic Meters • m³" },
  cm3: { factor: 0.000001, label: "Cubic Centimeters • cm³" },
  mm3: { factor: 1e-9, label: "Cubic Millimeters • mm³" },
  L: { factor: 0.001, label: "Liters • L" },
  mL: { factor: 0.000001, label: "Milliliters • mL" },
  in3: { factor: 0.0000163871, label: "Cubic Inches • in³" },
  ft3: { factor: 0.0283168, label: "Cubic Feet • ft³" },
  yd3: { factor: 0.764555, label: "Cubic Yards • yd³" },
  tsp: { factor: 0.00000492892, label: "Teaspoons • tsp" },
  tbsp: { factor: 0.0000147868, label: "Tablespoons • tbsp" },
  cup: { factor: 0.000236588, label: "Cups • cup" },
  pt: { factor: 0.000473176, label: "Pints • pt" },
  qt: { factor: 0.000946353, label: "Quarts • qt" },
  gal: { factor: 0.00378541, label: "Gallons • gal" }
};

export type VolumeUnit = keyof typeof volumeUnits;
