---
name: test-bingo-patterns
description: Systematically verify all 12 bingo winning patterns (5 rows + 5 columns + 2 diagonals). Use when testing win detection logic or validating board configurations.
applyTo: "**/{bingoLogic,*.test}.ts"
---

# Test Bingo Patterns Skill

When working with the Bingo game logic, systematically verify winning patterns.

## Pattern Matrix

The game has exactly **12 winning patterns**:
- **Rows**: 5 (indices 0-4, 5-9, 10-14, 15-19, 20-24)
- **Columns**: 5 (indices 0,5,10,15,20 | 1,6,11,16,21 | ... | 4,9,14,19,24)
- **Diagonals**: 2
  - Top-left to bottom-right: [0, 6, 12, 18, 24]
  - Top-right to bottom-left: [4, 8, 12, 16, 20]

## Test Approach

### 1. Individual Pattern Validation
For each of the 12 patterns, create a test:

```typescript
// Row 0
const board = generateBoard();
[0, 1, 2, 3, 4].forEach(i => { board[i].isMarked = true; });
const result = checkBingo(board);
expect(result?.type).toBe('row');
expect(result?.index).toBe(0);

// Column 0
const board = generateBoard();
[0, 5, 10, 15, 20].forEach(i => { board[i].isMarked = true; });
const result = checkBingo(board);
expect(result?.type).toBe('column');
expect(result?.index).toBe(0);
```

### 2. Free Space Interaction
Test that center square (index 12) affects both:
- **Row 2**: Indices 10-14 (includes free space at 12)
- **Column 2**: Indices 2, 7, 12, 17, 22 (includes free space)
- **Both diagonals**: Both include free space

The free space is **always marked**, so patterns through center require fewer manual marks.

```typescript
// Row 2 with free space pre-marked
const board = generateBoard(); // 12 already marked
[10, 11, 13, 14].forEach(i => { board[i].isMarked = true; }); // only 4 more needed
expect(checkBingo(board)).not.toBeNull();
```

### 3. Near-Miss Cases
Verify that 4-of-5 in any pattern does NOT trigger bingo:

```typescript
const board = generateBoard();
[0, 1, 2, 3].forEach(i => { board[i].isMarked = true; }); // 4 of row 0
expect(checkBingo(board)).toBeNull();
```

### 4. Multiple Patterns
Some squares are in multiple patterns. Test edge cases:
- Index 12 (center) → Row 2 + Column 2 + Both diagonals
- Index 0 → Row 0 + Column 0 + Diagonal 1
- Index 4 → Row 0 + Column 4 + Diagonal 2

```typescript
// Completing row 2 also completes both diagonals if we mark all 5
const board = generateBoard();
[10, 11, 12, 13, 14].forEach(i => { board[i].isMarked = true; });
const result = checkBingo(board);
expect(result?.type).toBe('row'); // Returns first match found
```

## Checklist

When adding or modifying game logic:
- [ ] All 5 rows tested (0-4)
- [ ] All 5 columns tested (0-4)
- [ ] Both diagonals tested
- [ ] Free space (index 12) correctly pre-marked
- [ ] Near-miss cases verified (4 out of 5)
- [ ] Multi-pattern overlaps validated
- [ ] Integration test: full game flow with random board

## Common Pitfalls

1. **Forgetting center is pre-marked** — Don't toggle it, it's immutable
2. **Confusing index with position** — Row 0 = indices 0-4, not just index 0
3. **Testing only happy path** — Include near-misses and edge cases
4. **Not considering overlap** — Center square affects 4 patterns simultaneously

## Related Code

- `generateBoard()` → Creates board with free space at index 12 (always marked)
- `toggleSquare()` → Cannot toggle free space
- `checkBingo()` → Returns first winning line found, null if none
- `getWinningSquareIds()` → Extracts square indices from winning line for UI highlight
