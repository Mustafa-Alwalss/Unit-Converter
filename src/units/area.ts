// Area units conversion to square meters
import type {IUnits} from "./interface.ts";

export const areaUnits: Record<string, IUnits> = {
  mm2: { factor: 0.000001, label: "Square Millimeters • mm²" },
  cm2: { factor: 0.0001, label: "Square Centimeters • cm²" },
  m2: { factor: 1, label: "Square Meters • m²" },
  km2: { factor: 1000000, label: "Square Kilometers • km²" },
  in2: { factor: 0.00064516, label: "Square Inches • in²" },
  ft2: { factor: 0.092903, label: "Square Feet • ft²" },
  yd2: { factor: 0.836127, label: "Square Yards • yd²" },
  acre: { factor: 4046.86, label: "Acres • acre" },
  hectare: { factor: 10000, label: "Hectares • ha" }
};

export type AreaUnit = keyof typeof areaUnits;
