import { CATEGORY_LIST } from '../engine';
import type { Category } from '../engine';

interface CategorySelectorProps {
  category: Category;
  onCategoryChange: (category: Category) => void;
}

const CategorySelector = ({ category, onCategoryChange }: CategorySelectorProps) => (
  <div className="w-full overflow-x-auto scrollbar-none pb-1">
    <div className="flex items-center gap-1 w-max mx-auto bg-surface-container-low/70 backdrop-blur-md p-1.5 rounded-full shadow-md whitespace-nowrap">
      {CATEGORY_LIST.map((cat) => {
        const isActive = cat.id === category;
        return (
          <button
            key={cat.id}
            type="button"
            aria-pressed={isActive}
            title={cat.label}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-label-pill text-label-pill transition-colors ${
              isActive
                ? 'bg-primary/15 text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
            onClick={() => onCategoryChange(cat.id)}
          >
            <span className="material-symbols-outlined text-[17px]">{cat.icon}</span>
            <span className="hidden md:inline">{cat.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

export default CategorySelector;
