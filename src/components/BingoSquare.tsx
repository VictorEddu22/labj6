import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center rounded-[1.75rem] border-2 p-3 text-center transition-all duration-200 select-none min-h-[72px] text-[0.84rem] leading-snug font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b268]';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#1d1f24] border-[#d8b268] text-[#f8f3ec] shadow-[0_0_0_6px_rgba(216,178,104,0.14)]'
      : 'bg-[#1b1d23] border-[#6c5f47] text-[#e8e3dc] shadow-[0_0_0_3px_rgba(216,178,104,0.08)]'
    : 'bg-[#111216] border-[#24262c] text-[#ccc8c2] hover:border-[#d8b268] hover:bg-[#16171c] active:scale-[0.98]';

  const freeSpaceClasses = square.isFreeSpace ? 'text-[#d8b268]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Hot tip free space' : square.text}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        {square.isFreeSpace ? (
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-[0.28em] text-[#d8b268]">HOT TIP</span>
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9a979d]">Free</span>
          </div>
        ) : (
          <span className="break-words hyphens-auto">{square.text}</span>
        )}
      </div>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-3 top-3 text-lg text-[#d8b268]">✓</span>
      )}
    </button>
  );
}
