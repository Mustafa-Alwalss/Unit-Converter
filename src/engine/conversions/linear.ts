// Linear conversion: value * (fromFactor / toFactor)
import type {IUnits} from "../../units/interface";

/**
 * Convert a value from one unit to another using linear (multiplicative) conversion.
 * Assumes both units are defined as factors relative to a common base unit.
 *
 * @param value - The value to convert
 * @param fromUnit - The source unit key
 * @param toUnit - The target unit key
 * @param units - Record of unit keys to their IUs definitions (factor and label)
 * @returns The converted value
 * @throws UnknownUnitError if either unit is not found in the units map
 */
export function convertLinear(
  value: number,
  fromUnit: string,
  toUnit: string,
  units: Record<string, IUnits>
): number {
  if (!(fromUnit in units)) {
    throw new Error(`Unknown unit "${fromUnit}"`);
  }
  if (!(toUnit in units)) {
    throw new Error(`Unknown unit "${toUnit}"`);
  }

  const fromFactor = units[fromUnit].factor;
  const toFactor = units[toUnit].factor;

  // If same unit, return the value directly
  if (fromUnit === toUnit) {
    return value;
  }

  // Convert to base unit then to target unit
  const inBase = value * fromFactor;
  return inBase / toFactor;
}
