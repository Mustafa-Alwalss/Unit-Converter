import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import { convert, formatNumber, CATEGORIES } from './engine';
import type { Category } from './engine';

import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import PresetsRow from './components/PresetsRow';
import ConversionCard from './components/ConversionCard';
import FormulaDisplay from './components/FormulaDisplay';
import ActionButton from './components/ActionButton';
import HistoryPanel from './components/HistoryPanel';
import type { HistoryItem } from './components/HistoryPanel';
import Footer from './components/Footer';

const MAX_HISTORY = 5;

function App() {
  const [category, setCategory] = useState<Category>('length');
  const [sourceValue, setSourceValue] = useState('100');
  const [sourceUnit, setSourceUnit] = useState(CATEGORIES.length.defaultFrom);
  const [targetUnit, setTargetUnit] = useState(CATEGORIES.length.defaultTo);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const def = CATEGORIES[category];

  // The result is DERIVED from the inputs on every render, so it can never be stale.
  const targetValue = useMemo(() => {
    if (sourceValue.trim() === '' || isNaN(Number(sourceValue))) return '';
    try {
      return formatNumber(
        convert({ value: Number(sourceValue), category, from: sourceUnit, to: targetUnit })
      );
    } catch {
      return 'Error';
    }
  }, [sourceValue, category, sourceUnit, targetUnit]);

  const unitOptions = useMemo(
    () => Object.entries(def.units).map(([value, u]) => ({ value, label: u.label })),
    [def]
  );

  // Switch category + units together, in the event handler (not in an effect).
  const selectCategory = (next: Category, from?: string, to?: string) => {
    const nextDef = CATEGORIES[next];
    setCategory(next);
    setSourceUnit(from ?? nextDef.defaultFrom);
    setTargetUnit(to ?? nextDef.defaultTo);
  };

  const handleSourceChange = (e: ChangeEvent<HTMLInputElement>) => setSourceValue(e.target.value);
  const handleSourceUnitChange = (e: ChangeEvent<HTMLSelectElement>) => setSourceUnit(e.target.value);
  const handleTargetUnitChange = (e: ChangeEvent<HTMLSelectElement>) => setTargetUnit(e.target.value);

  const handleSwapUnits = () => {
    setSourceUnit(targetUnit);
    setTargetUnit(sourceUnit);
  };

  const handleReset = () => {
    setSourceValue('1');
    setSourceUnit(def.defaultFrom);
    setTargetUnit(def.defaultTo);
  };

  const handleCopyResult = async () => {
    try {
      await navigator.clipboard.writeText(targetValue);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleAddToHistory = () => {
    if (!targetValue || targetValue === 'Error') return;
    const item: HistoryItem = {
      id: Date.now(),
      value: sourceValue,
      from: sourceUnit,
      to: targetUnit,
      result: targetValue,
      category,
      timestamp: Date.now(),
    };
    setHistory((prev) => [item, ...prev].slice(0, MAX_HISTORY));
  };

  const handleHistoryItemClick = (item: HistoryItem) => {
    selectCategory(item.category, item.from, item.to);
    setSourceValue(item.value);
  };

  return (
    <>
      <Header />
      <main className="relative z-10 w-full pt-16 flex-1 flex flex-col justify-start">
        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
          <CategorySelector category={category} onCategoryChange={(c) => selectCategory(c)} />
          <PresetsRow
            category={category}
            onPresetSelect={(p) => {
              selectCategory(category, p.from, p.to);
              setSourceValue(p.value);
            }}
          />
          <ConversionCard
            category={category}
            sourceValue={sourceValue}
            sourceUnit={sourceUnit}
            targetUnit={targetUnit}
            targetValue={targetValue}
            unitOptions={unitOptions}
            onSourceChange={handleSourceChange}
            onSourceUnitChange={handleSourceUnitChange}
            onTargetUnitChange={handleTargetUnitChange}
            onSwapUnits={handleSwapUnits}
            onClearInputs={handleReset}
            onCopyResult={handleCopyResult}
          />
          <FormulaDisplay
            category={category}
            sourceValue={sourceValue}
            sourceUnit={sourceUnit}
            targetUnit={targetUnit}
          />
          <ActionButton onClick={handleAddToHistory} />
          <HistoryPanel
            history={history}
            onHistoryItemClick={handleHistoryItemClick}
            onClearHistory={() => setHistory([])}
            onHistoryDelete={(id) => setHistory((prev) => prev.filter((h) => h.id !== id))}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
