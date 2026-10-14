// Data units conversion to bytes
import type {IUnits} from "./interface.ts";


export const dataUnits: Record<string, IUnits> = {
  bit: { factor: 0.125, label: "Bits • bit" },
  B: { factor: 1, label: "Bytes • B" },
  kB: { factor: 1000, label: "Kilobytes • kB" },
  MB: { factor: 1000 ** 2, label: "Megabytes • MB" },
  GB: { factor: 1000 ** 3, label: "Gigabytes • GB" },
  TB: { factor: 1000 ** 4, label: "Terabytes • TB" },
  KiB: { factor: 1024, label: "Kibibytes • KiB" },
  MiB: { factor: 1024 ** 2, label: "Mebibytes • MiB" },
  GiB: { factor: 1024 ** 3, label: "Gibibytes • GiB" },
  TiB: { factor: 1024 ** 4, label: "Tebibytes • TiB" }
};

export type DataUnit = keyof typeof dataUnits;
