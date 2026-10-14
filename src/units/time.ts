// Time units conversion to seconds
export const timeUnits = {
  ns: 0.000000001,
  µs: 0.000001,
  ms: 0.001,
  s: 1,
  min: 60,
  h: 3600,
  day: 86400,
  week: 604800,
  month: 2.628e6, // average (30.44 days)
  year: 3.154e7   // average (365.25 days)
};

export type TimeUnit = keyof typeof timeUnits;
