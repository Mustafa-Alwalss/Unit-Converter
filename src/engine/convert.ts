import { UnknownCategoryError, UnknownUnitError, InvalidValueError } from './errors';
import { convertLinear } from './conversions/linear';
import { convertTemperature } from './conversions/temperature';
import { CATEGORIES } from './categories';

/**
 * Convert a value from one unit to another within a category.
 * @throws InvalidValueError, UnknownCategoryError, UnknownUnitError
 */
export function convert(options: {
  value: number;
  category: string;
  from: string;
  to: string;
}): number {
  const { value, category, from, to } = options;

  if (typeof value !== 'number' || !isFinite(value)) {
    throw new InvalidValueError(value);
  }
  if (!Object.hasOwn(CATEGORIES, category)) {
    throw new UnknownCategoryError(category);
  }

  const def = CATEGORIES[category as keyof typeof CATEGORIES];

  if (!Object.hasOwn(def.units, from)) throw new UnknownUnitError(from, category);
  if (!Object.hasOwn(def.units, to)) throw new UnknownUnitError(to, category);
  if (from === to) return value;

  return def.type === 'temperature'
    ? convertTemperature(value, from, to, def.units, def.offsets)
    : convertLinear(value, from, to, def.units);
}
