// Length units conversion to meters
import type {IUnits} from "./interface.ts";

export const lengthUnits: Record<string, IUnits> = {
  am:   { factor: 1e-18,                    label: "Attometers • am" },
  fm:   { factor: 1e-15,                    label: "Femtometers • fm" },
  pm:   { factor: 1e-12,                    label: "Picometers • pm" },
  nm:   { factor: 0.000000001,              label: "Nanometers • nm" },
  µm:   { factor: 0.000001,                 label: "Micrometers • µm" },
  mm:   { factor: 0.001,                    label: "Millimeters • mm" },
  cm:   { factor: 0.01,                     label: "Centimeters • cm" },
  dm:   { factor: 0.1,                      label: "Decimeters • dm" },
  m:    { factor: 1,                        label: "Meters • m" },
  dam:  { factor: 10,                       label: "Dekameters • dam" },
  hm:   { factor: 100,                      label: "Hectometers • hm" },
  km:   { factor: 1000,                     label: "Kilometers • km" },
  Mm:   { factor: 1e6,                      label: "Megameters • Mm" },
  Gm:   { factor: 1e9,                      label: "Gigameters • Gm" },
  Tm:   { factor: 1e12,                     label: "Terameters • Tm" },
  Pm:   { factor: 1e15,                     label: "Petameters • Pm" },
  Em:   { factor: 1e18,                     label: "Exameters • Em" },
  Zm:   { factor: 1e21,                     label: "Zettameters • Zm" },
  Ym:   { factor: 1e24,                     label: "Yottameters • Ym" },
  Å:    { factor: 1e-10,                    label: "Angstroms • Å" },
  th:   { factor: 0.0000254,                label: "Thou • th" },
  in:   { factor: 0.0254,                   label: "Inches • in" },
  ft:   { factor: 0.3048,                   label: "Feet • ft" },
  yd:   { factor: 0.9144,                   label: "Yards • yd" },
  mi:   { factor: 1609.344,                 label: "Miles • mi" },
  nmi:  { factor: 1852,                     label: "Nautical Miles • nmi" },
  lea:  { factor: 5556,                     label: "Nautical Leagues • lea" },
  ftm:  { factor: 1.8288,                   label: "Fathoms • ftm" },
  ch:   { factor: 20.1168,                  label: "Chains • ch" },
  fur:  { factor: 201.168,                  label: "Furlongs • fur" },
  rd:   { factor: 5.0292,                   label: "Rods • rd" },
  li:   { factor: 0.201168,                 label: "Links • li" },
  AU:   { factor: 149597870700,             label: "Astronomical Units • AU" },
  ly:   { factor: 9460730472580800,         label: "Light-Years • ly" },
  pc:   { factor: 3.0856775814913673e16,    label: "Parsecs • pc" }
};

export type LengthUnit = keyof typeof lengthUnits;
