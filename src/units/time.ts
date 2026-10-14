// Time units conversion to seconds
import type {IUnits} from "./interface.ts";

export const timeUnits: Record<string, IUnits> = {
  ns:  { factor: 0.000000001,   label: "Nanoseconds • ns" },
  µs:  { factor: 0.000001,      label: "Microseconds • µs" },
  ms:  { factor: 0.001,         label: "Milliseconds • ms" },
  cs:  { factor: 0.01,          label: "Centiseconds • cs" },
  ds:  { factor: 0.1,           label: "Deciseconds • ds" },
  s:   { factor: 1,             label: "Seconds • s" },
  das: { factor: 10,            label: "Decaseconds • das" },
  hs:  { factor: 100,           label: "Hectoseconds • hs" },
  ks:  { factor: 1000,          label: "Kiloseconds • ks" },
  min: { factor: 60,            label: "Minutes • min" },
  h:   { factor: 3600,          label: "Hours • h" },
  day: { factor: 86400,         label: "Days • day" },
  week:{ factor: 604800,        label: "Weeks • week" },
  ft:  { factor: 1209600,       label: "Fortnights • ft" },
  month:{ factor: 2.628e6,      label: "Months • month" },
  year:{ factor: 3.154e7,       label: "Years • year" },
  decade:{ factor: 3.154e8,     label: "Decades • decade" },
  century:{ factor: 3.154e9,    label: "Centuries • century" },
  millennium:{ factor: 3.154e10,label: "Millennia • millennium" },
  Ms:  { factor: 1e6,           label: "Megaseconds • Ms" },
  Gs:  { factor: 1e9,           label: "Gigaseconds • Gs" }
};

export type TimeUnit = keyof typeof timeUnits;
