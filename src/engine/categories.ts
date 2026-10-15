import type { IUnits } from '../units/interface';
import { areaUnits } from '../units/area';
import { dataUnits } from '../units/data';
import { energyUnits } from '../units/energy';
import { lengthUnits } from '../units/length';
import { massUnits } from '../units/mass';
import { pressureUnits } from '../units/pressure';
import { speedUnits } from '../units/speed';
import { temperatureUnits, temperatureOffsets } from '../units/temperature';
import { timeUnits } from '../units/time';
import { volumeUnits } from '../units/volume';

export type Category =
  | 'length' | 'mass' | 'temperature' | 'volume' | 'area'
  | 'speed' | 'energy' | 'data' | 'time' | 'pressure';

export interface Preset {
  value: string;
  from: string;
  to: string;
}

interface BaseDef {
  id: Category;
  label: string;      // short label for the category tab
  icon: string;       // Material Symbols icon name
  dimension: string;  // heading shown on the conversion card
  baseUnit: string;   // the unit every factor in units/*.ts is relative to
  defaultFrom: string;
  defaultTo: string;
  presets: Preset[];
  units: Record<string, IUnits>;
}

interface LinearDef extends BaseDef {
  type: 'linear';
}

interface TemperatureDef extends BaseDef {
  type: 'temperature';
  offsets: Record<string, number>;
}

export type CategoryDef = LinearDef | TemperatureDef;

// Single source of truth: used by the engine AND the UI.
export const CATEGORIES: Record<Category, CategoryDef> = {
  length: {
    id: 'length', type: 'linear', label: 'Length', icon: 'straighten',
    dimension: 'Length Dimension', baseUnit: 'Meter (m)',
    units: lengthUnits, defaultFrom: 'm', defaultTo: 'ft',
    presets: [
      { value: '100', from: 'm', to: 'ft' },
      { value: '1', from: 'km', to: 'mi' },
    ],
  },
  mass: {
    id: 'mass', type: 'linear', label: 'Mass & Weight', icon: 'scale',
    dimension: 'Mass & Weight Dimension', baseUnit: 'Gram (g)',
    units: massUnits, defaultFrom: 'kg', defaultTo: 'lb',
    presets: [{ value: '1', from: 'kg', to: 'lb' }],
  },
  temperature: {
    id: 'temperature', type: 'temperature', label: 'Temperature', icon: 'device_thermostat',
    dimension: 'Thermodynamics', baseUnit: 'Kelvin (K)',
    units: temperatureUnits, offsets: temperatureOffsets, defaultFrom: 'C', defaultTo: 'F',
    presets: [
      { value: '0', from: 'C', to: 'F' },
      { value: '100', from: 'C', to: 'K' },
    ],
  },
  volume: {
    id: 'volume', type: 'linear', label: 'Volume', icon: 'water_drop',
    dimension: 'Volumetric Capacity', baseUnit: 'Cubic Meter (m³)',
    units: volumeUnits, defaultFrom: 'dm3', defaultTo: 'gal',
    presets: [{ value: '1', from: 'gal', to: 'dm3' }],
  },
  area: {
    id: 'area', type: 'linear', label: 'Area', icon: 'aspect_ratio',
    dimension: 'Area & Surface', baseUnit: 'Square Meter (m²)',
    units: areaUnits, defaultFrom: 'm2', defaultTo: 'ft2',
    presets: [{ value: '1', from: 'acre', to: 'm2' }],
  },
  speed: {
    id: 'speed', type: 'linear', label: 'Speed', icon: 'speed',
    dimension: 'Velocity & Speed', baseUnit: 'Meters/sec (m/s)',
    units: speedUnits, defaultFrom: 'km_per_h', defaultTo: 'mi_per_h',
    presets: [{ value: '100', from: 'km_per_h', to: 'mi_per_h' }],
  },
  energy: {
    id: 'energy', type: 'linear', label: 'Energy', icon: 'bolt',
    dimension: 'Energy & Work', baseUnit: 'Joule (J)',
    units: energyUnits, defaultFrom: 'kcal', defaultTo: 'kJ',
    presets: [{ value: '1', from: 'kWh', to: 'MJ' }],
  },
  data: {
    id: 'data', type: 'linear', label: 'Data Storage', icon: 'memory',
    dimension: 'Digital Computing Storage', baseUnit: 'Byte (B)',
    units: dataUnits, defaultFrom: 'GB', defaultTo: 'MB',
    presets: [{ value: '1024', from: 'MiB', to: 'GiB' }],
  },
  time: {
    id: 'time', type: 'linear', label: 'Time', icon: 'schedule',
    dimension: 'Chronological Time', baseUnit: 'Second (s)',
    units: timeUnits, defaultFrom: 'h', defaultTo: 'min',
    presets: [{ value: '1', from: 'day', to: 'h' }],
  },
  pressure: {
    id: 'pressure', type: 'linear', label: 'Pressure', icon: 'compress',
    dimension: 'Atmospheric & Fluid Pressure', baseUnit: 'Pascal (Pa)',
    units: pressureUnits, defaultFrom: 'bar', defaultTo: 'psi',
    presets: [{ value: '1', from: 'bar', to: 'psi' }],
  },
};

// Order of the tabs in the UI
export const CATEGORY_LIST: CategoryDef[] = [
  'length', 'mass', 'temperature', 'volume', 'area',
  'speed', 'energy', 'data', 'time', 'pressure',
].map((id) => CATEGORIES[id as Category]);
