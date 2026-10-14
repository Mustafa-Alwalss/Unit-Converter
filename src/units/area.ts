// Area units conversion to square meters
export const areaUnits = {
  mm²: 0.000001,
  cm²: 0.0001,
  m²: 1,
  km²: 1000000,
  in²: 0.00064516,
  ft²: 0.092903,
  yd²: 0.836127,
  acre: 4046.86,
  hectare: 10000
};

export type AreaUnit = keyof typeof areaUnits;
