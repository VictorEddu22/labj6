import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col bg-[#070708] text-white">
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(232,178,104,0.12),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_20%)]" />
      <header className="relative z-10 flex flex-col gap-4 border-b border-white/10 bg-[#101114]/95 px-4 py-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a979d]">Smoke Screen</p>
          <h1 className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Noir Case Board
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={onReset}
            className="rounded-2xl border border-[#ffffff14] bg-[#111214]/90 px-4 py-2 text-sm text-[#ede7e2] transition hover:border-[#d8b268]/40 hover:text-[#d8b268]"
          >
            ← Back to the Alley
          </button>
          <div className="rounded-2xl bg-[#18191f]/95 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#a29fba]">
            {hasBingo ? 'Case Closed' : 'Under Review'}
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#101114]/95 p-4 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.75)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#9a979d]">Case Notes</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-[#d8d1cc]">
              Tap the clues that match the scene. The center square is already a hot tip. Build a complete line to reveal the truth.
            </p>
            <div className="rounded-3xl bg-[#15161b] px-4 py-3 text-sm text-[#d8b268] shadow-[0_12px_40px_-20px_rgba(216,178,104,0.45)]">
              {hasBingo ? 'Line found — keep reading the evidence.' : 'Objective: trace five clues in a row.'}
            </div>
          </div>
        </div>

        {hasBingo && (
          <div className="rounded-3xl border border-[#d8b268]/20 bg-[#17181e]/95 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b268] shadow-[0_20px_70px_-50px_rgba(216,178,104,0.45)]">
            ✹ CASE CLOSED — a line of truth is found
          </div>
        )}

        <div className="flex-1 flex items-center justify-center py-3">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
