interface ActionButtonProps {
  onClick: () => void;
}

const ActionButton = ({ onClick }: ActionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="self-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-[16px] tracking-tight flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(192,193,255,0.35)] hover:shadow-[0_0_32px_rgba(128,131,255,0.6)] transition-all shrink-0"
  >
    <span className="material-symbols-outlined text-[22px]">add</span>
    <span>Add to List</span>
  </button>
);

export default ActionButton;
