---
name: Available Agents & Skills
description: Quick reference for Bingo Mixer AI agents and specialized skills that accelerate development workflows.
---

# Bingo Mixer — Available Agents & Skills

This workspace includes specialized **skills** that help AI coding agents be more productive. Use these by referencing them in your requests.

## 📚 Skills Inventory

### Core Game Development

| Skill | Purpose | Use When |
|-------|---------|----------|
| [`test-bingo-patterns`](./.github/skills/test-bingo-patterns.md) | Systematically verify all 12 winning patterns (rows/cols/diagonals) | Testing win detection, validating board logic, TDD workflows |
| [`generate-quiz-theme`](./.github/skills/generate-quiz-theme.md) | Create themed question sets for specialized audiences | Building custom quiz variations, themed events, multilingual support |

### User Experience & Testing

| Skill | Purpose | Use When |
|-------|---------|----------|
| [`dogfood-bingo-game`](./.github/skills/dogfood-bingo-game.md) | Test app interactively with simulated gameplay scenarios | QA testing, verifying UI changes, accessibility checks, state persistence |
| [`design-component-refresh`](./.github/skills/design-component-refresh.md) | Redesign components avoiding generic AI aesthetics | UI updates, color/font changes, new visual themes |

### Design Reference

| File | Purpose |
|------|---------|
| [`frontend-design.instructions.md`](./.github/instructions/frontend-design.instructions.md) | Principles for distinctive, intentional frontend design |
| [`tailwind-4.instructions.md`](./.github/instructions/tailwind-4.instructions.md) | Tailwind CSS v4 features and best practices |

---

## 🎯 Common Workflows

### "I want to test the game logic"
**Use skill**: `test-bingo-patterns`

This skill provides:
- All 12 winning pattern checklist
- Free space interaction patterns
- Near-miss edge cases
- Test code templates

### "I want to add a new quiz theme for [event]"
**Use skill**: `generate-quiz-theme`

This skill provides:
- Theme templates (tech, wellness, education)
- Question guidelines & quality checks
- 24-question pool structure
- Multilingual support examples

### "I want to verify the UI works correctly"
**Use skill**: `dogfood-bingo-game`

This skill provides:
- 7 comprehensive test scenarios
- Accessibility testing checklist
- State persistence verification
- Performance checks
- Visual regression guide

### "I want to redesign the UI/components"
**Use skill**: `design-component-refresh`

This skill provides:
- Design direction options (playful, minimalist, retro)
- Full component refresh examples
- Animation utilities
- Responsive design verification
- Tailwind theme structure

---

## 🔄 Suggested Agent Workflows

### Agent 1: TDD Red-Green-Refactor
**When**: Adding new game features
**Steps**:
1. Write failing test (Red phase)
2. Implement minimal code (Green phase)
3. Reference `test-bingo-patterns` for pattern validation
4. Refactor with confidence

### Agent 2: Design-First Component Update
**When**: Updating component UI
**Steps**:
1. Reference `frontend-design.instructions.md`
2. Use `design-component-refresh` for aesthetic guidance
3. Implement with animations & depth
4. Use `dogfood-bingo-game` for QA
5. Verify responsive design

### Agent 3: Quiz Theme Generator
**When**: Creating themed variations
**Steps**:
1. Use `generate-quiz-theme` to plan question set
2. Update `src/data/questions.ts`
3. Test board generation
4. Run test suite (all 41 tests should still pass)

### Agent 4: Accessibility & QA
**When**: Before merging PRs
**Steps**:
1. Use `dogfood-bingo-game` for comprehensive testing
2. Check keyboard navigation
3. Verify screen reader compatibility
4. Test on mobile (responsive)
5. Run full test suite: `npm run test`

---

## 📝 Example: Combining Skills

### Scenario: "Add a new puzzle difficulty mode"

```
1. Design (use design-component-refresh):
   - New difficulty selector UI
   - Color-code difficulties
   - Smooth transitions

2. Logic (use test-bingo-patterns):
   - Verify patterns still work with all difficulties
   - Test edge cases (easy vs hard questions)

3. Test (use dogfood-bingo-game):
   - Complete game on each difficulty
   - Verify all 12 winning patterns
   - Check accessibility

4. Quality (npm run lint, test):
   - npm run lint
   - npm run test
   - npm run build
```

---

## 🚀 Quick References

### Commands
```bash
npm run dev       # Dev server (5173)
npm run test      # Run tests
npm run lint      # Check code quality
npm run build     # Production build
```

### Key Files
- Game logic: `src/utils/bingoLogic.ts`
- State: `src/hooks/useBingoGame.ts`
- Questions: `src/data/questions.ts`
- Components: `src/components/*.tsx`
- Tests: `src/utils/bingoLogic.test.ts`

### Theme
- Colors: `src/index.css` (`@theme` section)
- Fonts: System (can be customized)
- Breakpoints: Tailwind defaults (max-sm, sm, md, lg)

---

## ✅ Skill Usage Checklist

Before using a skill:

- [ ] Read the skill's full documentation (linked above)
- [ ] Understand the context (which file/component applies)
- [ ] Have dev server running if testing: `npm run dev`
- [ ] Know your goal (what's the end state?)

After using a skill:

- [ ] All tests pass: `npm run test`
- [ ] Linting passes: `npm run lint`
- [ ] Dev preview looks correct: `http://localhost:5173/`
- [ ] Changes are committed with clear messages

---

## 🎓 Learning Path

1. **Start**: Read [.github/copilot-instructions.md](./.github/copilot-instructions.md) for project overview
2. **Game Logic**: Use `test-bingo-patterns` while studying `src/utils/bingoLogic.ts`
3. **UI**: Use `design-component-refresh` to understand component styling
4. **Testing**: Use `dogfood-bingo-game` for interactive verification
5. **Customization**: Use `generate-quiz-theme` to create variations

---

**Last Updated**: May 2026  
**Node.js**: 22+  
**VS Code**: 1.113+
