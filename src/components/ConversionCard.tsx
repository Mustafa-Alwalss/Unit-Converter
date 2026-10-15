import type { ChangeEvent } from 'react';
import { CATEGORIES } from '../engine';
import type { Category } from '../engine';

interface ConversionCardProps {
  category: Category;
  sourceValue: string;
  sourceUnit: string;
  targetUnit: string;
  targetValue: string;
  unitOptions: { value: string; label: string }[];
  onSourceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSourceUnitChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onTargetUnitChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSwapUnits: () => void;
  onClearInputs: () => void;
  onCopyResult: () => void;
}

const selectClass =
  'w-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-pill text-label-pill py-2 px-3 pr-9 rounded-full appearance-none cursor-pointer focus:outline-none transition-colors';

const ConversionCard = ({
  category,
  sourceValue,
  sourceUnit,
  targetUnit,
  targetValue,
  unitOptions,
  onSourceChange,
  onSourceUnitChange,
  onTargetUnitChange,
  onSwapUnits,
  onClearInputs,
  onCopyResult,
}: ConversionCardProps) => {
  const def = CATEGORIES[category];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      <div className="bg-surface-container/70 backdrop-blur-2xl rounded-lg p-4 md:p-6 shadow-xl relative overflow-hidden flex flex-col gap-4">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Card header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_10px_rgba(76,215,246,0.5)]" />
            <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">
              {def.dimension}
            </span>
            <span className="font-label-numeric-md text-[12px] px-2 py-0.5 rounded bg-surface-container-high text-secondary">
              Base unit: {def.baseUnit}
            </span>
          </div>
          <button
            type="button"
            title="Reset values"
            onClick={onClearInputs}
            className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
          </button>
        </div>

        {/* Conversion grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 my-2">
          {/* Source */}
          <div className="bg-surface-container-lowest/90 rounded-lg p-4 shadow-inner flex flex-col gap-2 transition-all focus-within:shadow-[0_0_0_1px_#090D16,0_0_0_2px_rgba(192,193,255,0.7),0_0_16px_rgba(128,131,255,0.25)]">
            <div className="flex items-center justify-between">
              <span className="font-label-capital text-label-capital uppercase tracking-wider text-outline">
                Source value
              </span>
              <span className="font-label-capital text-label-capital text-primary">Input</span>
            </div>
            <input
              id="sourceValueInput"
              type="number"
              step="any"
              inputMode="decimal"
              placeholder="0.00"
              value={sourceValue}
              onChange={onSourceChange}
              className="w-full bg-transparent font-label-numeric-lg text-label-numeric-lg text-on-surface placeholder-outline/50 focus:outline-none tracking-tight"
            />
            <div className="relative w-full pt-1">
              <select id="fromUnitSelect" className={selectClass} value={sourceUnit} onChange={onSourceUnitChange}>
                {unitOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-3 top-[13px] pointer-events-none">
                unfold_more
              </span>
            </div>
          </div>

          {/* Swap */}
          <div className="flex justify-center -my-2 md:my-0 z-10">
            <button
              type="button"
              aria-label="Swap units"
              onClick={onSwapUnits}
              className="group w-10 h-10 rounded-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary shadow-[0_0_16px_rgba(128,131,255,0.4)] flex items-center justify-center transition-all duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined text-[24px] group-hover:rotate-180 transition-transform duration-500">
                swap_horiz
              </span>
            </button>
          </div>

          {/* Target */}
          <div className="bg-surface-container-lowest/90 rounded-lg p-4 shadow-inner flex flex-col gap-2 transition-all focus-within:shadow-[0_0_0_1px_#090D16,0_0_0_2px_rgba(76,215,246,0.7),0_0_16px_rgba(76,215,246,0.25)]">
            <div className="flex items-center justify-between">
              <span className="font-label-capital text-label-capital uppercase tracking-wider text-outline">
                Target computed
              </span>
              <button
                type="button"
                onClick={onCopyResult}
                className="flex items-center gap-1 font-label-capital text-label-capital text-tertiary hover:underline"
              >
                <span className="material-symbols-outlined text-[14px]">content_copy</span>
                Copy
              </button>
            </div>
            <input
              id="targetValueInput"
              type="text"
              readOnly
              value={targetValue}
              className="w-full bg-transparent font-label-numeric-lg text-label-numeric-lg text-tertiary focus:outline-none tracking-tight cursor-text select-all"
            />
            <div className="relative w-full pt-1">
              <select id="toUnitSelect" className={selectClass} value={targetUnit} onChange={onTargetUnitChange}>
                {unitOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-3 top-[13px] pointer-events-none">
                unfold_more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
