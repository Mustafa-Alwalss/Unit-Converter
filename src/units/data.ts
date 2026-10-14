// Data units conversion to bytes
import type {IUnits} from "./interface.ts";

export const dataUnits: Record<string, IUnits> = {
  bit:  { factor: 0.125,                     label: "Bits • bit" },
  kb:   { factor: 125,                       label: "Kilobits • kb" },
  Mb:   { factor: 125000,                    label: "Megabits • Mb" },
  Gb:   { factor: 125000000,                 label: "Gigabits • Gb" },
  Tb:   { factor: 125000000000,              label: "Terabits • Tb" },
  Pb:   { factor: 1.25e14,                   label: "Petabits • Pb" },
  Eb:   { factor: 1.25e17,                   label: "Exabits • Eb" },
  Zb:   { factor: 1.25e20,                   label: "Zettabits • Zb" },
  Yb:   { factor: 1.25e23,                   label: "Yottabits • Yb" },
  Kib:  { factor: 128,                       label: "Kibibits • Kib" },
  Mib:  { factor: 131072,                    label: "Mebibits • Mib" },
  Gib:  { factor: 134217728,                 label: "Gibibits • Gib" },
  Tib:  { factor: 137438953472,              label: "Tebibits • Tib" },
  Pib:  { factor: 140737488355328,           label: "Pebibits • Pib" },
  Eib:  { factor: 144115188075855872,        label: "Exbibits • Eib" },
  Zib:  { factor: 147573952589676412928,     label: "Zebibits • Zib" },
  Yib:  { factor: 151115727451828646838272,  label: "Yobibits • Yib" },
  B:    { factor: 1,                         label: "Bytes • B" },
  kB:   { factor: 1000,                      label: "Kilobytes • kB" },
  MB:   { factor: 1000 ** 2,                 label: "Megabytes • MB" },
  GB:   { factor: 1000 ** 3,                 label: "Gigabytes • GB" },
  TB:   { factor: 1000 ** 4,                 label: "Terabytes • TB" },
  PB:   { factor: 1000 ** 5,                 label: "Petabytes • PB" },
  EB:   { factor: 1000 ** 6,                 label: "Exabytes • EB" },
  ZB:   { factor: 1000 ** 7,                 label: "Zettabytes • ZB" },
  YB:   { factor: 1000 ** 8,                 label: "Yottabytes • YB" },
  KiB:  { factor: 1024,                      label: "Kibibytes • KiB" },
  MiB:  { factor: 1024 ** 2,                 label: "Mebibytes • MiB" },
  GiB:  { factor: 1024 ** 3,                 label: "Gibibytes • GiB" },
  TiB:  { factor: 1024 ** 4,                 label: "Tebibytes • TiB" },
  PiB:  { factor: 1024 ** 5,                 label: "Pebibytes • PiB" },
  EiB:  { factor: 1024 ** 6,                 label: "Exbibytes • EiB" },
  ZiB:  { factor: 1024 ** 7,                 label: "Zebibytes • ZiB" },
  YiB:  { factor: 1024 ** 8,                 label: "Yobibytes • YiB" }
};

export type DataUnit = keyof typeof dataUnits;
