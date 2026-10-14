// Area units conversion to square meters
import type {IUnits} from "./interface.ts";

export const areaUnits: Record<string, IUnits> = {
  nm2:  { factor: 0.000000000001,   label: "Square Nanometers • nm²" },
  µm2:  { factor: 0.000000000001,   label: "Square Micrometers • µm²" }, // 1e-12
  mm2:  { factor: 0.000001,         label: "Square Millimeters • mm²" },
  cm2:  { factor: 0.0001,           label: "Square Centimeters • cm²" },
  dm2:  { factor: 0.01,             label: "Square Decimeters • dm²" },
  m2:   { factor: 1,                label: "Square Meters • m²" },
  dam2: { factor: 100,              label: "Square Dekameters • dam²" },
  hm2:  { factor: 10000,            label: "Square Hectometers • hm²" },
  km2:  { factor: 1000000,          label: "Square Kilometers • km²" },
  in2:  { factor: 0.00064516,       label: "Square Inches • in²" },
  ft2:  { factor: 0.09290304,       label: "Square Feet • ft²" }, // exact: (0.3048)^2
  yd2:  { factor: 0.83612736,       label: "Square Yards • yd²" }, // exact: (0.9144)^2
  mi2:  { factor: 2589988.110336,   label: "Square Miles • mi²" },
  nmi2: { factor: 3429904,          label: "Square Nautical Miles • nmi²" }, // (1852)^2
  acre: { factor: 4046.8564224,     label: "Acres • acre" }, // 43560 * (0.3048)^2
  hectare: { factor: 10000,         label: "Hectares • ha" }
};

export type AreaUnit = keyof typeof areaUnits;
