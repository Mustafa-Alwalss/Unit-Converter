// Length units conversion to meters
import type {IUnits} from "./interface.ts";


export const lengthUnits: Record<string, IUnits> = {
  nm: { factor: 0.000000001, label: "Nanometers • nm" },
  µm: { factor: 0.000001, label: "Micrometers • µm" },
  mm: { factor: 0.001, label: "Millimeters • mm" },
  cm: { factor: 0.01, label: "Centimeters • cm" },
  m: { factor: 1, label: "Meters • m" },
  km: { factor: 1000, label: "Kilometers • km" },
  in: { factor: 0.0254, label: "Inches • in" },
  ft: { factor: 0.3048, label: "Feet • ft" },
  yd: { factor: 0.9144, label: "Yards • yd" },
  mi: { factor: 1609.34, label: "Miles • mi" },
  nmi: { factor: 1852, label: "Nautical Miles • nmi" }
};

export type LengthUnit = keyof typeof lengthUnits;
