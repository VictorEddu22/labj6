# Bingo Mixer — GitHub Copilot Instructions

**Project**: Educational lab for VS Code GitHub Copilot Agent workflows  
**Stack**: React 19 • TypeScript 5.9 • Vite • Tailwind CSS 4 • Vitest  
**Language**: TypeScript (strict mode) • React functional components only

---

## Quick Context

**Bingo Mixer** is a social bingo game built as a learning platform. Find people matching questions and get 5 in a row to win!

### Key Directories
- `src/components/` — React components (functional, hooks-based)
- `src/hooks/useBingoGame.ts` — State management for game logic
- `src/utils/bingoLogic.ts` — Pure game logic (generateBoard, toggleSquare, checkBingo)
- `src/data/questions.ts` — Question pool for bingo board
- `src/types/index.ts` — Shared TypeScript types

### Core Patterns
1. **Game State**: Managed via `useBingoGame()` custom hook with localStorage persistence
2. **Component Structure**: Props-based, no context, single responsibility
3. **Board Logic**: 5x5 grid, free space in center (index 12), 5 winning patterns (rows/cols/diagonals)
4. **Testing**: Unit tests in `*.test.ts` files, test all utils + integration scenarios

---

## Development Commands

```bash
npm run dev       # Start Vite dev server (port 5173)
npm run build     # TypeScript + Vite production build
npm run lint      # ESLint check (eslint.config.js)
npm run test      # Vitest (41 passing tests)
```

**Important**: Lint must pass before committing. Always run `npm run test` after changes to game logic.

---

## Code Style & Conventions

### TypeScript
- **Strict mode enabled** — No `any`, explicit types required
- **Interfaces** — Define in `src/types/index.ts`, export as named exports
- **Immutability** — Game logic returns new arrays/objects (e.g., `toggleSquare`)

### React Components
- **Functional only** — No class components
- **Props as interfaces** — E.g., `interface BingoSquareProps { ... }`
- **No hooks side effects in render** — Effects must be in `useEffect` or custom hooks
- **Accessibility** — All interactive elements must have `aria-*` attributes

### Tailwind CSS v4
- **Theme tokens**: Defined in `src/index.css` via `@theme` directive (no tailwind.config.js)
- **Custom colors**: `--color-accent`, `--color-marked`, `--color-bingo` — use as `bg-accent`, `text-marked`
- **Responsive**: Use `max-sm:`, `sm:`, `md:` Tailwind breakpoints
- **Reference**: See [tailwind-4.instructions.md](./.github/instructions/tailwind-4.instructions.md) for v4 features

---

## Game Logic Rules

- **generateBoard()** — Creates 5x5 grid with 24 random questions + 1 free space (center)
- **toggleSquare()** — Marks/unmarks squares (cannot mark free space)
- **checkBingo()** — Returns winning line if 5 marked squares form row/column/diagonal
- **winningPatterns** — Rows (5), Columns (5), Diagonals (2) = 12 possible wins
- **Free Space**: Always marked, always in center (index 12), always immutable

### Game States
- `'start'` — ShowStartScreen, no board
- `'playing'` — GameScreen active, board displayed
- `'bingo'` — Win detected, show BingoModal

---

## Frontend Design

**Avoid "AI slop"** — See [frontend-design.instructions.md](./.github/instructions/frontend-design.instructions.md) for principles:
- Use distinctive typography (avoid generic fonts)
- Commit to cohesive color palettes (not timid, evenly-distributed)
- Leverage CSS animations for high-impact moments
- Create atmosphere with gradients/patterns, not flat colors

**Current Aesthetic**: Clean, minimal, accessible (gray + accent colors + green highlights for marked squares)

---

## Testing Strategy

- **Unit tests** — Test each `bingoLogic` function independently
- **Edge cases** — Unmarked squares, free space, board generation randomness
- **Integration** — Game flow: startGame → toggleSquare → checkBingo → resetGame
- **Test file location** — Co-locate with source (e.g., `bingoLogic.test.ts` next to `bingoLogic.ts`)

Run tests: `npm run test`  
Watch mode during development: `npm run test -- --watch`

---

## Common Tasks

### Add New Component
1. Create `src/components/NewComponent.tsx`
2. Define `interface NewComponentProps { ... }` in same file
3. Import into parent, pass required props
4. Add accessibility attributes (`aria-label`, `aria-pressed`, etc.)

### Modify Game Questions
- Edit `src/data/questions.ts`
- Regenerate board with `generateBoard()`
- No DB calls — questions are hardcoded

### Fix Bug in Game Logic
1. Check `src/utils/bingoLogic.test.ts` for expected behavior
2. Add test case if missing
3. Fix logic in `bingoLogic.ts`
4. Verify `npm run test` passes
5. Test in browser at `http://localhost:5173/`

### Customize Colors/Theme
1. Edit `src/index.css` `@theme` section
2. Update Tailwind class names in components
3. No need to restart dev server (Vite hot-reload handles this)

---

## Key Files Cheat Sheet

| File | Purpose |
|------|---------|
| `src/App.tsx` | Entry component, routing between screens |
| `src/hooks/useBingoGame.ts` | State machine for game (localStorage persist) |
| `src/utils/bingoLogic.ts` | Pure functions: board generation, win detection |
| `src/components/BingoBoard.tsx` | 5x5 grid container |
| `src/components/BingoSquare.tsx` | Individual square (marked/unmarked state) |
| `src/index.css` | Global styles + Tailwind v4 `@theme` |
| `vite.config.ts` | Vite + Vitest config, auto-base-path for GitHub Pages |
| `.github/instructions/` | Frontend design + Tailwind v4 principles |

---

## Related Instructions

- **Frontend Design Principles** → [frontend-design.instructions.md](./.github/instructions/frontend-design.instructions.md)
- **Tailwind v4 Specifics** → [tailwind-4.instructions.md](./.github/instructions/tailwind-4.instructions.md)

---

## Workshop & Learning

This project includes a multi-part lab guide in `workshop/` (English, Spanish, Portuguese):
- **Part 1**: Setup & Context Engineering
- **Part 2**: Design-First Frontend
- **Part 3**: Custom Quiz Master
- **Part 4**: Multi-Agent Development

Read [workshop/GUIDE.md](../../workshop/GUIDE.md) for educational context.

---

**Last Updated**: May 2026 | **Node.js**: 22+ | **VS Code**: 1.113+
