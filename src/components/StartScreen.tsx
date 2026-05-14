interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,178,104,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col justify-center gap-10">
        <div className="rounded-[2rem] border border-white/10 bg-[#101114]/95 p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d8b268]">Case File</p>
              <h1 className="text-5xl font-semibold leading-tight tracking-[-0.03em] text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Noir Bingo
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#c8c4c0]">
                The city never sleeps. Connect the clues, mark the suspects, and close out the case with five in a row.
              </p>
            </div>
            <div className="rounded-3xl border border-[#d8b268]/15 bg-[#111217]/90 p-6 text-right shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] md:max-w-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a979d]">Brief</p>
              <p className="mt-3 text-xl font-semibold text-white">Trace the pattern. Find the line. Solve the night.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-[#111216]/80 p-6 text-left shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)]">
            <h2 className="text-lg font-semibold uppercase tracking-[0.18em] text-[#d8b268]">How to play</h2>
            <ul className="grid gap-3 text-sm leading-6 text-[#c8c4c0] md:grid-cols-2">
              <li>• Each card is a clue in the alley. Mark the ones that fit the profile.</li>
              <li>• The center square is your hot tip: it’s already in play.</li>
              <li>• A completed row, column, or diagonal closes the case.</li>
              <li>• Keep your focus sharp — noir is all about the details.</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="mt-10 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#d8b268] via-[#f2d388] to-[#d8b268] px-8 py-4 text-lg font-semibold text-black shadow-[0_20px_60px_-30px_rgba(216,178,104,0.8)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Enter the Case
          </button>
        </div>
      </div>
    </div>
  );
}
