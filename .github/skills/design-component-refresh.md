---
name: design-component-refresh
description: Redesign Bingo Mixer components avoiding generic AI aesthetics. Use when updating UI, changing colors/fonts, or implementing new visual themes. Follow frontend-design principles for distinctive, intentional layouts.
applyTo: "src/components/**/*.tsx"
---

# Design Component Refresh Skill

Refresh Bingo Mixer components with distinctive, thoughtful design that avoids generic "AI slop" aesthetics.

## Design Principles

Reference: [frontend-design.instructions.md](./.github/instructions/frontend-design.instructions.md)

### ✨ Do This
- **Distinctive Typography** → Use custom fonts (not Inter/Arial), match mood
- **Cohesive Color Palette** → Commit to specific colors, not timid distributions
- **High-Impact Motion** → CSS animations for key moments (win celebration, game start)
- **Atmospheric Depth** → Gradients, patterns, contextual effects

### ❌ Avoid This
- Overused fonts (Inter, Roboto, Arial, system-ui)
- Clichéd purple gradients on white
- Predictable, cookie-cutter layouts
- Generic, untested aesthetics

## Current Theme Analysis

**Typography**: `system-ui, -apple-system, sans-serif`  
**Colors**: Gray + Accent Blue + Green (marked) + Amber (winning)  
**Animations**: Minimal (only modal bounce)  
**Aesthetic**: Clean, minimal, accessible

## Component Redesign Template

### Component: BingoSquare
**Current State**:
```tsx
<button className="bg-white border-gray-300 text-gray-700">
  <span>Question text</span>
  {isMarked && <span>✓</span>}
</button>
```

**Refresh Options**:

#### Option A: Playful & Interactive
```tsx
// Personality: Friendly, energetic
// Font: "Fredoka" (Google Fonts) - warm, rounded
// Colors: Vibrant - primary #FF6B6B, accent #4ECDC4
// Animation: Scale + glow on mark

<button className="
  relative rounded-lg p-3 font-fredoka text-sm
  transition-all duration-200
  bg-gradient-to-br from-white to-gray-50
  border-2 border-gray-200
  hover:border-primary hover:shadow-lg
  active:scale-95
  data-[marked]:bg-gradient-to-br data-[marked]:from-primary/20 data-[marked]:to-primary/10
  data-[marked]:border-primary data-[marked]:shadow-md
">
  <span className="relative z-10">{text}</span>
  {isMarked && (
    <span className="absolute top-1 right-1 animate-bounce text-primary">✓</span>
  )}
</button>
```

**Key Changes**:
- Font: Fredoka (warm, distinct)
- Colors: Vibrant primary (#FF6B6B)
- Border: 2px (more prominent)
- Animation: Scale + bounce checkmark
- Gradient background (more depth)

#### Option B: Modern Minimalist
```tsx
// Personality: Sophisticated, refined
// Font: "JetBrains Mono" - technical, precise
// Colors: Refined - primary #2563EB, neutral grays
// Animation: Subtle transitions, no bounce

<button className="
  rounded p-2.5 font-mono text-xs tracking-tight
  transition-colors duration-150
  bg-white border border-gray-200
  hover:bg-gray-50 hover:border-primary
  data-[marked]:bg-primary data-[marked]:text-white data-[marked]:border-primary
">
  <span>{text}</span>
  {isMarked && <span className="ml-1 font-bold">✓</span>}
</button>
```

**Key Changes**:
- Font: JetBrains Mono (technical precision)
- Colors: Refined blues/grays
- No gradient (flat, intentional)
- Subtle transitions only
- Minimal visual noise

#### Option C: Retro/Playful
```tsx
// Personality: Fun, nostalgic
// Font: "Courier Prime" or "VT323" (retro) - Google Fonts
// Colors: Bold - primary #FF006E, accent #00D9FF (synthwave)
// Animation: Glitch/pulse effect on mark

<button className="
  rounded-none p-3 font-mono text-sm
  border-4 border-primary
  transition-all duration-100
  bg-white hover:bg-primary hover:text-white
  active:outline active:outline-2 active:outline-offset-2 active:outline-primary
  data-[marked]:bg-primary data-[marked]:text-white data-[marked]:shadow-[4px_4px_0px_0px_#00d9ff]
">
  <span>{text}</span>
  {isMarked && <span className="ml-2">✦</span>}
</button>
```

**Key Changes**:
- Font: Courier Prime (retro typewriter feel)
- Colors: Synthwave (neon primary + cyan)
- Border: 4px (bold, distinct)
- Shadow: Offset (retro print style)
- Animation: Glitch-like outline

## Full Component Refresh Workflow

### 1. Choose Design Direction
Pick ONE aesthetic for consistency:
- Playful & Interactive
- Modern Minimalist
- Retro/Playful
- Your own distinctive direction

### 2. Update Tailwind Theme
Edit `src/index.css`:
```css
@theme {
  --color-primary: #FF6B6B;      /* Your main color */
  --color-accent: #4ECDC4;       /* Secondary accent */
  --color-marked: #22C55E;       /* Marked state */
  --color-bingo: #FBBF24;        /* Win highlight */
  --font-body: "Fredoka", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### 3. Update Each Component

#### StartScreen
```tsx
// Before: Generic centered layout
// After: Distinctive entrance experience

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="
      min-h-full flex flex-col items-center justify-center
      bg-gradient-to-br from-primary/5 via-white to-accent/5
      overflow-hidden relative
    ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl -bottom-40 -right-40" />
      </div>

      <div className="relative z-10 text-center max-w-sm">
        <h1 className="text-5xl font-bold text-primary mb-2 animate-[fadeInDown_0.8s_ease-out]">
          Bingo Mixer
        </h1>
        <p className="text-lg text-accent font-medium mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          Find your people!
        </p>

        <div className="bg-white rounded-xl p-6 shadow-xl mb-8 border-2 border-primary/20 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <h2 className="font-bold text-primary mb-3">How to play</h2>
          <ul className="text-left text-gray-700 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="
            w-full bg-gradient-to-r from-primary to-accent
            text-white font-bold py-4 px-8 rounded-lg
            text-lg transition-all duration-200
            hover:shadow-lg hover:scale-105
            active:scale-95
            animate-[pulse_2s_ease-in-out_0.8s_infinite]
          "
        >
          Start Game →
        </button>
      </div>
    </div>
  );
}
```

**New Features**:
- Gradient background
- Blob animations (atmospheric)
- Staggered entrance animations (fadeInDown/Up)
- Pulse animation on button
- Cohesive color palette

#### GameScreen
```tsx
// Add subtle depth and visual hierarchy

export function GameScreen({ ... }: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="
        flex items-center justify-between p-4
        bg-white border-b-2 border-primary/10
        shadow-sm
      ">
        <button className="
          text-gray-600 text-sm font-medium px-3 py-2 rounded
          transition-all hover:bg-primary/5 hover:text-primary
        ">
          ← Back
        </button>
        <h1 className="font-bold text-primary text-lg">Bingo Mixer</h1>
        <div className="w-16" /> {/* Spacer for balance */}
      </header>

      {/* Status bar */}
      {hasBingo && (
        <div className="
          bg-gradient-to-r from-bingo/20 to-yellow-100
          border-l-4 border-bingo
          px-4 py-3
          text-bingo-dark font-bold text-center
          animate-pulse
        ">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-4">
          <BingoBoard {...props} />
        </div>
      </div>
    </div>
  );
}
```

### 4. Test Visual Changes

```bash
# 1. Start dev server
npm run dev

# 2. Open browser
open http://localhost:5173/

# 3. Verify:
# - Colors are consistent
# - Animations are smooth (no jank)
# - Responsive on mobile
# - All interactive elements work
# - Accessible (keyboard nav, screen reader)

# 4. Run tests
npm run test

# 5. Lint
npm run lint
```

## Animation Utilities

Add to `src/index.css` for reusable animations:

```css
@layer utilities {
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }
}
```

## Checklist for Component Refresh

- [ ] Distinct typography chosen (not system-ui)
- [ ] Cohesive color palette defined
- [ ] High-impact animations added (entrance, win state)
- [ ] Atmospheric effects (gradients, patterns)
- [ ] Responsive design tested (mobile/tablet/desktop)
- [ ] Accessibility verified (keyboard, screen reader)
- [ ] Tests still pass: `npm run test`
- [ ] Lint passes: `npm run lint`
- [ ] Browser preview looks intentional & polished

---

**Remember**: The goal is distinctive, intentional design that makes Bingo Mixer feel curated—not generic. Make bold choices and commit to them!
