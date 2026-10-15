import { CATEGORIES } from '../engine';
import type { Category, Preset } from '../engine';

interface PresetsRowProps {
  category: Category;
  onPresetSelect: (preset: Preset) => void;
}

const PresetsRow = ({ category, onPresetSelect }: PresetsRowProps) => {
  const def = CATEGORIES[category];

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      <span className="font-label-capital text-label-capital uppercase tracking-wider text-outline flex items-center gap-1">
        <span className="material-symbols-outlined text-[14px]">history_toggle_off</span>
        Presets:
      </span>
      {def.presets.map((p) => (
        <button
          key={`${p.value}-${p.from}-${p.to}`}
          type="button"
          className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-body-sm text-body-sm transition-all flex items-center gap-1 shadow-sm"
          onClick={() => onPresetSelect(p)}
        >
          <span className="font-label-numeric-md text-[13px] text-primary">
            {p.value} {p.from}
          </span>
          <span className="text-outline">→</span>
          <span className="font-label-numeric-md text-[13px]">{p.to}</span>
        </button>
      ))}
    </div>
  );
};

export default PresetsRow;
