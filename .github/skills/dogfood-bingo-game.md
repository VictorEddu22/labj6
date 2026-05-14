---
name: dogfood-bingo-game
description: Test the Bingo Mixer application interactively by simulating user gameplay. Use for QA testing UI changes, verifying game flow, and ensuring accessibility.
applyTo: "**/src/components/**"
---

# Dogfood Bingo Game Skill

Systematically test the Bingo Mixer application through simulated user interactions.

## Pre-flight Checklist

Before starting dogfooding:

1. **Dev server running** → `npm run dev` (port 5173)
2. **Browser open** → http://localhost:5173/
3. **Dev tools accessible** → Check console for errors
4. **Fresh state** → Clear localStorage if needed

## Test Scenarios

### Scenario 1: Game Start Flow
```
✓ Page loads with StartScreen
✓ Button text reads "Start Game"
✓ Instructions are visible and readable
✓ Clicking "Start Game" transitions to GameScreen
✓ Board appears with 5x5 grid
✓ All 25 squares are visible and tappable
```

### Scenario 2: Square Interaction
```
✓ Tap an unmarked square → toggles to marked (green)
✓ Marked square shows checkmark (✓)
✓ Tap marked square → toggles back to unmarked
✓ Free space (center) cannot be toggled
✓ Free space always shows as marked (yellow)
✓ Rapid tapping doesn't break state
```

### Scenario 3: Winning Condition (All 12 Patterns)
Test each winning pattern manually:

**Rows (mark indices for each row):**
- [ ] Row 0: [0,1,2,3,4]
- [ ] Row 1: [5,6,7,8,9]
- [ ] Row 2: [10,11,12,13,14] (includes free space)
- [ ] Row 3: [15,16,17,18,19]
- [ ] Row 4: [20,21,22,23,24]

**Columns (mark indices for each column):**
- [ ] Col 0: [0,5,10,15,20]
- [ ] Col 1: [1,6,11,16,21]
- [ ] Col 2: [2,7,12,17,22] (includes free space)
- [ ] Col 3: [3,8,13,18,23]
- [ ] Col 4: [4,9,14,19,24]

**Diagonals:**
- [ ] TL→BR: [0,6,12,18,24]
- [ ] TR→BL: [4,8,12,16,20]

When any pattern completes:
```
✓ BingoModal appears with 🎉 BINGO! message
✓ Modal has bounce animation
✓ "Keep Playing" button visible
✓ Clicking button dismisses modal
✓ Board state persists (winning squares still highlighted)
✓ Game continues (can mark more squares)
✓ "← Back" button resets and returns to StartScreen
```

### Scenario 4: State Persistence
```
✓ Mark some squares
✓ Refresh page (F5)
✓ Board state is restored
✓ Same squares are still marked
✓ Game state is correct
```

### Scenario 5: Accessibility
```
✓ Tab navigation works through all squares
✓ Keyboard: Space/Enter to toggle square
✓ aria-pressed reflects marked state
✓ aria-label exists on each square with question text
✓ Screen reader announces: question + marked status
✓ Free space has aria-label="Free space"
✓ "← Back" button is focusable
✓ "Start Game" button is focusable
```

### Scenario 6: Responsive Design
Test on different breakpoints:

**Mobile (max-sm):**
```
✓ Board fits within viewport
✓ Text is readable (not truncated)
✓ Tap targets are large enough (no accidental clicks)
✓ No horizontal scroll
```

**Tablet (sm to md):**
```
✓ Board has reasonable margins
✓ Header is properly aligned
✓ Instructions text is centered
```

**Desktop (md+):**
```
✓ Board is centered
✓ Max width respected
✓ Layout is balanced
```

### Scenario 7: Error Handling
```
✓ No console errors during normal play
✓ localStorage errors don't crash app
✓ Board generation always produces 25 squares
✓ No duplicate questions on board
```

## Quick Test Script

Run through this in ~5 minutes:

1. **Start** → Click "Start Game"
2. **Mark** → Tap 4 squares in row 0 (indices 0-3)
3. **Complete** → Tap 5th square (index 4) → Should see modal
4. **Verify** → Check modal appears, click "Keep Playing"
5. **Reset** → Click "← Back" → Returns to StartScreen
6. **Refresh** → Hard refresh (Ctrl+Shift+R) → State persists
7. **Keyboard** → Tab to squares, press Space to toggle
8. **Inspect** → Open DevTools console → No errors

## Performance Checks

- [ ] Initial load < 500ms
- [ ] Square toggle is instant (< 50ms)
- [ ] Modal animation is smooth (60fps)
- [ ] Refresh restores state immediately
- [ ] No memory leaks (dev tools)

## Visual Regression

When making UI changes, verify:

```
Before:                  After:
[Screenshot]      ===    [Screenshot]
- Same layout
- Same colors (check --color-accent, --color-marked)
- Same typography
- Same spacing
- Animations consistent
```

## Testing Tools

### Browser DevTools
```javascript
// Check game state
JSON.parse(localStorage.getItem('bingo-game-state'))

// Clear state
localStorage.removeItem('bingo-game-state')

// Mock bingo (for quick testing)
// Mark specific squares programmatically in console
```

### VSCode Testing
```bash
# Automated tests
npm run test

# Watch mode
npm run test -- --watch
```

## Failure Cases to Document

When you find issues:

```markdown
## Bug: [Title]
**Steps to reproduce:**
1. ...
2. ...
3. ...

**Expected:**
...

**Actual:**
...

**DevTools console output:**
...

**Device/Browser:**
Chrome 120, Desktop
```

## Checklist Completion

Once all scenarios pass:
- [ ] All 12 winning patterns tested
- [ ] State persistence verified
- [ ] Accessibility pass
- [ ] Responsive design confirmed
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Ready for commit

---

**Tip**: Use this skill after significant component changes or before merging PRs to catch regressions early.
