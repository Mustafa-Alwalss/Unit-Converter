// Speed units conversion to meters per second
import type {IUnits} from "./interface.ts";

export const speedUnits: Record<string, IUnits> = {
  mm_per_s: { factor: 0.001,   label: "Millimeters per Second • mm/s" },
  cm_per_s: { factor: 0.01,    label: "Centimeters per Second • cm/s" },
  in_per_s: { factor: 0.0254,  label: "Inches per Second • in/s" },
  ft_per_s: { factor: 0.3048,  label: "Feet per Second • ft/s" },
  mi_per_h: { factor: 0.44704, label: "Miles per Hour • mph" },
  knot: { factor: 1852/3600,   label: "Knots • knot" },
  km_per_h: { factor: 1000/3600, label: "Kilometers per Hour • km/h" },
  yd_per_s: { factor: 0.9144,  label: "Yards per Second • yd/s" },
  m_per_s: { factor: 1,        label: "Meters per Second • m/s" },
  km_per_s: { factor: 1000,    label: "Kilometers per Second • km/s" },
  mi_per_s: { factor: 1609.344, label: "Miles per Second • mps" },
  c: { factor: 299792458,      label: "Speed of Light • c" }
};

export type SpeedUnit = keyof typeof speedUnits;
