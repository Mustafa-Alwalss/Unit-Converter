// Time units conversion to seconds
import type {IUnits} from "./interface.ts";


export const timeUnits: Record<string, IUnits> = {
  ns: { factor: 0.000000001, label: "Nanoseconds • ns" },
  µs: { factor: 0.000001, label: "Microseconds • µs" },
  ms: { factor: 0.001, label: "Milliseconds • ms" },
  s: { factor: 1, label: "Seconds • s" },
  min: { factor: 60, label: "Minutes • min" },
  h: { factor: 3600, label: "Hours • h" },
  day: { factor: 86400, label: "Days • day" },
  week: { factor: 604800, label: "Weeks • week" },
  month: { factor: 2.628e6, label: "Months • month" },
  year: { factor: 3.154e7, label: "Years • year" }
};

export type TimeUnit = keyof typeof timeUnits;
