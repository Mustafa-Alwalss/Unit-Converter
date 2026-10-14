// Volume units conversion to cubic meters
import type {IUnits} from "./interface.ts";

export const volumeUnits: Record<string, IUnits> = {
  nm3:  { factor: 1e-27,                    label: "Cubic Nanometers • nm³" },
  µm3:  { factor: 1e-18,                    label: "Cubic Micrometers • µm³" },
  mm3:  { factor: 1e-9,                     label: "Cubic Millimeters • mm³" },
  cm3:  { factor: 0.000001,                 label: "Cubic Centimeters • cm³" },
  dm3:  { factor: 0.001,                    label: "Cubic Decimeters • dm³" },
  m3:   { factor: 1,                        label: "Cubic Meters • m³" },
  dam3: { factor: 1000,                     label: "Cubic Dekameters • dam³" },
  hm3:  { factor: 1e6,                      label: "Cubic Hectometers • hm³" },
  km3:  { factor: 1e9,                      label: "Cubic Kilometers • km³" },
  in3:  { factor: 0.000016387064,           label: "Cubic Inches • in³" },
  ft3:  { factor: 0.028316846592,           label: "Cubic Feet • ft³" },
  yd3:  { factor: 0.764554857984,           label: "Cubic Yards • yd³" },
  tsp:  { factor: 4.92892159375e-6,         label: "Teaspoons • tsp" },
  tbsp: { factor: 1.478676478125e-5,        label: "Tablespoons • tbsp" },
  cup:  { factor: 2.365882365e-4,           label: "Cups • cup" },
  pt:   { factor: 4.73176473e-4,            label: "Pints • pt" },
  qt:   { factor: 9.46352946e-4,            label: "Quarts • qt" },
  gal:  { factor: 0.003785411784,           label: "Gallons • gal" },
  bbl:  { factor: 0.158987294928,           label: "Oil Barrels • bbl" }, // 42 gal
  uk_fl_oz: { factor: 2.84130625e-5,       label: "Imperial Fluid Ounces • uk fl oz" },
  uk_pt:  { factor: 0.00056826125,         label: "Imperial Pints • uk_pt" },
  uk_qt:  { factor: 0.0011365225,          label: "Imperial Quarts • uk_qt" },
  uk_gal: { factor: 0.00454609,            label: "Imperial Gallons • uk_gal" },
  us_dry_pt: { factor: 0.0005506104713575, label: "US Dry Pints • us_dry_pt" },
  us_dry_qt: { factor: 0.001101220942715,  label: "US Dry Quarts • us_dry_qt" },
  us_pk:   { factor: 0.00880976754172,     label: "US Pecks • us_pk" },
  us_bu:   { factor: 0.03523907016688,     label: "US Bushels • us_bu" }
};

export type VolumeUnit = keyof typeof volumeUnits;
