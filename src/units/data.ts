// Data units conversion to bytes
export const dataUnits = {
  bit: 0.125, // 1 bit = 0.125 bytes
  B: 1,
  kB: 1000,
  MB: 1000 ** 2,
  GB: 1000 ** 3,
  TB: 1000 ** 4,
  // Binary prefixes (optional)
  KiB: 1024,
  MiB: 1024 ** 2,
  GiB: 1024 ** 3,
  TiB: 1024 ** 4
};

export type DataUnit = keyof typeof dataUnits;
