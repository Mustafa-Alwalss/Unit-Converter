// Temperature conversion: handles offset and factor
import type {IUnits} from "../../units/interface";

/**
 * Convert a temperature value from one unit to another.
 * Formula: K = value * factor + offset (to Kelvin)
 * Then convert from Kelvin to target unit: value = (K - offset) / factor
 *
 * @param value - The value to convert
 * @param fromUnit - The source unit key
 * @param toUnit - The target unit key
 * @param units - Record of unit keys to their IUs definitions (factor and label)
 * @param offsets - Record of unit keys to their offset (to add to value*factor to get Kelvin)
 * @returns The converted value
 * @throws UnknownUnitError if either unit is not found in the units map
 */
export function convertTemperature(
  value: number,
  fromUnit: string,
  toUnit: string,
  units: Record<string, IUnits>,
  offsets: Record<string, number>
): number {
  if (!(fromUnit in units)) {
    throw new Error(`Unknown unit "${fromUnit}"`);
  }
  if (!(toUnit in units)) {
    throw new Error(`Unknown unit "${toUnit}"`);
  }

  const fromFactor = units[fromUnit].factor;
  const toFactor = units[toUnit].factor;
  const fromOffset = offsets[fromUnit];
  const toOffset = offsets[toUnit];

  // If same unit, return the value directly
  if (fromUnit === toUnit) {
    return value;
  }

  // Convert to Kelvin: K = value * fromFactor + fromOffset
  const kelvin = value * fromFactor + fromOffset;
  // Convert from Kelvin to target unit: (kelvin - toOffset) / toFactor
  return (kelvin - toOffset) / toFactor;
}
