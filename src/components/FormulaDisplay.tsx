import { convert, formatNumber } from '../engine';
import type { Category } from '../engine';

interface FormulaDisplayProps {
  category: Category;
  sourceValue: string;
  sourceUnit: string;
  targetUnit: string;
}

// Exact human-readable formulas for the common temperature pairs
const TEMP_FORMULAS: Record<string, string> = {
  'C>F': '(°C × 9/5) + 32',
  'F>C': '(°F − 32) × 5/9',
  'C>K': 'K = °C + 273.15',
  'K>C': '°C = K − 273.15',
  'F>K': '(°F − 32) × 5/9 + 273.15',
  'K>F': '(K − 273.15) × 9/5 + 32',
};

const FormulaDisplay = ({ category, sourceValue, sourceUnit, targetUnit }: FormulaDisplayProps) => {
  let oneUnit = '';
  let factor = '';
  try {
    const ratio = convert({ value: 1, category, from: sourceUnit, to: targetUnit });
    oneUnit = formatNumber(ratio);
    factor = oneUnit;
  } catch {
    /* units not ready / invalid – render nothing */
  }

  const detail =
    category === 'temperature'
      ? TEMP_FORMULAS[`${sourceUnit}>${targetUnit}`] ?? 'Converted via Kelvin (offset + scale)'
      : `Multiply ${sourceUnit} value by ${factor}`;

  const hasInput = sourceValue.trim() !== '' && !isNaN(Number(sourceValue));

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
      <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-full text-on-surface-variant flex-1 justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">functions</span>
          <div className="flex flex-wrap items-center gap-x-2 font-body-sm text-body-sm">
            <span className="text-on-surface font-medium">
              {hasInput && oneUnit && `1 ${sourceUnit} = ${oneUnit} ${targetUnit}`}
            </span>
            <span className="text-outline">•</span>
            <span>{detail}</span>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 font-label-capital text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container-high text-tertiary shrink-0">
          <span className="material-symbols-outlined text-[12px]">check_circle</span>
          IEEE 754 double
        </span>
      </div>
    </div>
  );
};

export default FormulaDisplay;
