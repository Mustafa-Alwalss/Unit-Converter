import { convert, formatNumber } from '../engine';
import type { Category } from '../engine';

export interface HistoryItem {
  id: number;
  value: string;
  from: string;
  to: string;
  result: string;
  category: Category;
  timestamp: number;
}

interface HistoryPanelProps {
  history: HistoryItem[];
  onHistoryItemClick: (item: HistoryItem) => void;
  onClearHistory: () => void;
  onHistoryDelete: (id: number) => void;
}

function describe(item: HistoryItem): string {
  try {
    const r = convert({ value: 1, category: item.category, from: item.from, to: item.to });
    return `1 ${item.from} = ${formatNumber(r)} ${item.to}`;
  } catch {
    return '';
  }
}

const HistoryPanel = ({ history, onHistoryItemClick, onClearHistory, onHistoryDelete }: HistoryPanelProps) => (
  <div className="bg-surface-container-low rounded-lg p-4 shadow-md flex flex-col gap-3">
    <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px] text-secondary">format_list_bulleted</span>
        <span className="font-headline-sm text-[16px] text-on-surface">List of Conversions</span>
        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-capital text-[11px]">
          {history.length} Saved
        </span>
      </div>
      <button
        type="button"
        onClick={onClearHistory}
        className="font-label-capital text-label-capital text-outline hover:text-error transition-colors uppercase tracking-wider"
      >
        Clear All
      </button>
    </div>

    <div className="flex flex-col gap-2">
      {history.map((item) => (
        <div
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => onHistoryItemClick(item)}
          onKeyDown={(e) => e.key === 'Enter' && onHistoryItemClick(item)}
          className="flex items-center justify-between gap-3 p-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer animate-fade-in"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="material-symbols-outlined text-[16px] text-primary">arrow_forward</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1 font-label-numeric-md text-[14px]">
                <span className="text-on-surface font-medium">{item.value} {item.from}</span>
                <span className="text-outline">→</span>
                <span className="text-tertiary font-medium">{item.result} {item.to}</span>
              </div>
              <div className="text-[12px] text-outline">{describe(item)}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-outline font-label-capital text-label-capital shrink-0">
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-wider text-[11px]">
              {item.category}
            </span>
            <span className="text-[12px]">
              {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <button
              type="button"
              title="Delete"
              className="hover:text-error p-1 rounded transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onHistoryDelete(item.id);
              }}
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </div>
      ))}
      {history.length === 0 && (
        <div className="p-4 text-center text-outline font-label-capital">No conversions yet</div>
      )}
    </div>
  </div>
);

export default HistoryPanel;
