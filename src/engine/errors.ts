// Custom error classes for the conversion engine
export class ConversionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConversionError';
  }
}

export class UnknownCategoryError extends ConversionError {
  constructor(category: string) {
    super(`Unknown category: "${category}"`);
    this.name = 'UnknownCategoryError';
  }
}

export class UnknownUnitError extends ConversionError {
  constructor(unit: string, category: string) {
    super(`Unknown unit "${unit}" for category "${category}"`);
    this.name = 'UnknownUnitError';
  }
}

export class SameUnitError extends ConversionError {
  constructor(unit: string) {
    super(`Converting from "${unit}" to the same unit is redundant`);
    this.name = 'SameUnitError';
  }
}

export class InvalidValueError extends ConversionError {
  constructor(value: unknown) {
    super(`Invalid value for conversion: ${String(value)}`);
    this.name = 'InvalidValueError';
  }
}
