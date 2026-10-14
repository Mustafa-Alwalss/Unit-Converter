// Mass units conversion to grams
export const massUnits = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  t: 1e6, // metric ton
  oz: 28.3495,
  lb: 453.592,
  stone: 6350.29
};

export type MassUnit = keyof typeof massUnits;
