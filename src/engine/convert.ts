// Import types and errors
import {UnknownCategoryError, UnknownUnitError,  InvalidValueError} from "./errors";

// Import conversion functions
import {convertLinear} from "./conversions/linear";
import {convertTemperature} from "./conversions/temperature";

// Import unit data
import {areaUnits} from "../units/area";
import {dataUnits} from "../units/data";
import {energyUnits} from "../units/energy";
import {lengthUnits} from "../units/length";
import {massUnits} from "../units/mass";
import {pressureUnits} from "../units/pressure";
import {speedUnits} from "../units/speed";
import {temperatureUnits, temperatureOffsets} from "../units/temperature";
import {timeUnits} from "../units/time";
import {volumeUnits} from "../units/volume";

// Build the registry
const registry = {
  area: {
    units: areaUnits,
    conversionType: 'linear' as const
  },
  data: {
    units: dataUnits,
    conversionType: 'linear' as const
  },
  energy: {
    units: energyUnits,
    conversionType: 'linear' as const
  },
  length: {
    units: lengthUnits,
    conversionType: 'linear' as const
  },
  mass: {
    units: massUnits,
    conversionType: 'linear' as const
  },
  pressure: {
    units: pressureUnits,
    conversionType: 'linear' as const
  },
  speed: {
    units: speedUnits,
    conversionType: 'linear' as const
  },
  temperature: {
    units: temperatureUnits,
    conversionType: 'temperature' as const,
    offsets: temperatureOffsets
  },
  time: {
    units: timeUnits,
    conversionType: 'linear' as const
  },
  volume: {
    units: volumeUnits,
    conversionType: 'linear' as const
  }
} as const;

/**
 * Convert a value from one unit to another within a given category.
 * @param options - An object containing the value, category, source unit, and target unit.
 * @returns The converted value.
 * @throws InvalidValueError if the value is not a finite number.
 * @throws UnknownCategoryError if the category is not supported.
 * @throws UnknownUnitError if either the source or target unit is not found in the category.
 */
export function convert(options: {
  value: number;
  category: string;
  from: string;
  to: string;
}): number {
  // Validate the value
  if (typeof options.value !== 'number' || !isFinite(options.value)) {
    throw new InvalidValueError(options.value);
  }

  const {value, category, from, to} = options;

  // Check if the category exists in the registry
  if (!(category in registry)) {
    throw new UnknownCategoryError(category);
  }

  const cat = registry[category as keyof typeof registry];
  const {units, conversionType, offsets} = cat;

  // Check if the source and target units exist in the category
  if (!(from in units)) {
    throw new UnknownUnitError(from, category);
  }
  if (!(to in units)) {
    throw new UnknownUnitError(to, category);
  }

  // If the units are the same, return the value directly
  if (from === to) {
    return value;
  }

  // Perform the conversion based on the conversion type
  if (conversionType === 'linear') {
    return convertLinear(value, from, to, units);
  } else if (conversionType === 'temperature') {
    // For temperature, we have offsets defined
    return convertTemperature(value, from, to, units, offsets as Record<string, number>);
  } else {
    // This should not happen given our registry, but for safety
    throw new Error(`Unsupported conversion type for category ${category}`);
  }
}
