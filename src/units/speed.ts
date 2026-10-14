// Speed units conversion to meters per second
import type {IUnits} from "./interface.ts";


export const speedUnits: Record<string, IUnits> = {
  'm/s': { factor: 1, label: "Meters per Second • m/s" },
  'km/h': { factor: 1000 / 3600, label: "Kilometers per Hour • km/h" },
  mph: { factor: 0.44704, label: "Miles per Hour • mph" },
  knot: { factor: 0.514444, label: "Knots • knot" },
  'ft/s': { factor: 0.3048, label: "Feet per Second • ft/s" }
};

export type SpeedUnit = keyof typeof speedUnits;
