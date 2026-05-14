interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#ffffff10] bg-[#111216] p-6 text-center shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="relative">
          <div className="text-[4rem] leading-none text-[#d8b268]">✹</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            CASE CLOSED
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#9a979d]">Noir Debrief</p>
          <p className="mt-4 text-sm leading-6 text-[#cec7c1]">
            You found the truth in the shadows. Keep the file open and continue the investigation.
          </p>
          <button
            onClick={onDismiss}
            className="mt-8 inline-flex w-full items-center justify-center rounded-3xl bg-[#d8b268] px-6 py-3 text-base font-semibold text-black transition duration-200 hover:bg-[#f2d388] active:scale-[0.98]"
          >
            Close the File
          </button>
        </div>
      </div>
    </div>
  );
}
