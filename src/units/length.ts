// Length units conversion to meters
export const lengthUnits = {
  nm: 0.000000001,
  µm: 0.000001,
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
  nmi: 1852
};

export type LengthUnit = keyof typeof lengthUnits;
