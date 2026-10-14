// Speed units conversion to meters per second
export const speedUnits = {
  m/s: 1,
  km/h: 1000 / 3600, // 0.277778
  mph: 0.44704,
  knot: 0.514444,
  ft/s: 0.3048
};

export type SpeedUnit = keyof typeof speedUnits;
