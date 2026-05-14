---
name: generate-quiz-theme
description: Create themed question sets for Bingo Mixer by extending or replacing the base questions pool. Use for custom events, specialized audiences, or adding contextual bingo themes.
applyTo: "src/data/questions.ts"
---

# Generate Quiz Theme Skill

Create specialized question sets for Bingo Mixer tailored to specific events or audiences.

## Current Questions

The base pool in `src/data/questions.ts` has **24 questions** designed for general social mixers:

```
"bikes to work", "has lived in another country", "has a pet", "prefers tea over coffee",
"plays an instrument", "speaks more than 2 languages", "has run a marathon", "was born in a different state",
"has met a celebrity", "can juggle", "has been skydiving", "loves cooking",
"has a garden", "has traveled to Asia", "is left-handed", "has a twin",
"plays video games", "does yoga", "has a hidden talent", "loves spicy food",
"has been on TV", "collects something unique", "has read a book this month", "knows sign language"
```

## Theme Templates

### Tech Community Mixer

**Format**: "has/is/knows/uses [tech skill or experience]"

```typescript
export const techTheme = [
  "writes code in multiple languages",
  "has contributed to open source",
  "knows TypeScript",
  "has used React",
  "has deployed to the cloud",
  "knows how to write unit tests",
  "has used Git (not just GitHub Desktop)",
  "can explain recursion clearly",
  "has debugged production issues",
  "uses a terminal daily",
  "knows what a REST API is",
  "has done code review",
  "loves dark mode",
  "has worked with databases",
  "uses TypeScript in every project",
  "knows the difference between == and ===",
  "has taught someone to code",
  "loves memes about JavaScript",
  "uses Vim/Neovim",
  "has attended a tech conference",
  "knows CSS Grid",
  "has worked with Docker",
  "can solve a LeetCode problem",
  "has stayed up debugging all night",
];
```

### Health & Wellness Event

**Format**: "practices/does/enjoys [wellness activity]"

```typescript
export const wellnessTheme = [
  "does yoga regularly",
  "meditates",
  "runs or jogs",
  "has a gym membership",
  "cycles",
  "practices martial arts",
  "attends fitness classes",
  "has a personal trainer",
  "stretches daily",
  "does Pilates",
  "swims",
  "hikes regularly",
  "practices breathwork",
  "does strength training",
  "has a standing desk",
  "tracks their water intake",
  "cooks healthy meals",
  "has tried intermittent fasting",
  "meditates for stress relief",
  "loves outdoor activities",
  "uses a fitness app",
  "has a morning routine",
  "practices work-life balance",
  "loves wellness podcasts",
];
```

### Education/Student Event

**Format**: "[subject/activity/role] related"

```typescript
export const educationTheme = [
  "studies STEM",
  "is in a study group",
  "has participated in research",
  "speaks multiple languages",
  "has studied abroad",
  "tutors other students",
  "loves reading",
  "writes for a publication",
  "has won an academic award",
  "participates in debate",
  "has attended a workshop",
  "does creative writing",
  "loves science",
  "takes online courses",
  "has an academic passion",
  "presents research",
  "loves history",
  "is in a club or society",
  "has mentored someone",
  "loves philosophy",
  "has completed a hackathon",
  "studies engineering",
  "loves mathematics",
  "has published work",
];
```

## Implementation Steps

### 1. Create Theme File
```typescript
// src/data/themes.ts

export const themes = {
  general: { /* existing questions */ },
  tech: techTheme,
  wellness: wellnessTheme,
  education: educationTheme,
};

export type ThemeName = keyof typeof themes;
```

### 2. Extend useBingoGame
```typescript
export function useBingoGame(themeName: ThemeName = 'general') {
  // ... existing code ...
  const startGame = useCallback(() => {
    const selectedTheme = themes[themeName];
    setBoard(generateBoard(selectedTheme));
    // ... rest ...
  }, [themeName]);
}
```

### 3. Update generateBoard Signature
```typescript
export function generateBoard(questionPool = questions): BingoSquareData[] {
  // Replace:
  // const shuffledQuestions = shuffleArray(questions).slice(0, 24);
  // With:
  // const shuffledQuestions = shuffleArray(questionPool).slice(0, 24);
}
```

### 4. Add Theme Selector to UI
```typescript
// In StartScreen.tsx
<select value={selectedTheme} onChange={e => setTheme(e.target.value)}>
  <option value="general">General Mixer</option>
  <option value="tech">Tech Community</option>
  <option value="wellness">Health & Wellness</option>
  <option value="education">Education</option>
</select>
```

## Question Guidelines

### Quality Checks
- [ ] **Inclusivity**: Questions should not assume specific demographics
- [ ] **Clarity**: Questions must be 1-4 words max
- [ ] **Memorable**: Easy to recall and share ("you work in finance?" vs "what industry?")
- [ ] **Variety**: Mix verbs (has, knows, does, plays, speaks, etc.)
- [ ] **Specificity**: Avoid too-common traits (e.g., "has a name")
- [ ] **Neutrality**: No controversial or exclusionary language

### Anti-patterns ❌
- "is [political stance]"
- "believes [religion]"
- "earns over $X"
- "is [specific protected class]"
- "has [medical condition]"

### Good Patterns ✅
- "has [skill/experience]"
- "knows [topic/language]"
- "does [hobby/activity]"
- "plays [sport/game]"
- "loves [food/category]"
- "speaks [language]"

## Testing Theme Changes

```bash
# 1. Update src/data/questions.ts or create theme file
# 2. Run dev server
npm run dev

# 3. Test board generation
# - Click "Start Game" multiple times
# - Verify no duplicate questions per board
# - Verify all questions from pool appear over multiple games

# 4. Test winning patterns with new questions
# - Mark 5 squares in each pattern (row/col/diag)
# - Verify bingo modal appears

# 5. Run tests
npm run test

# 6. Expected outcome: All 41 tests still pass
#    (question content doesn't affect game logic)
```

## Size Constraints

- **Exactly 24 questions** in pool (not more, not less)
- Minimum **6 characters** per question (avoid truncation)
- Maximum **40 characters** per question (fits on mobile)
- All questions **unique** (no duplicates)

## Multilingual Support

For translated bingo games:

```typescript
// src/data/questions.ts
export const questions: Record<string, string[]> = {
  en: [ /* 24 English questions */ ],
  es: [ /* 24 Spanish questions */ ],
  pt_BR: [ /* 24 Portuguese questions */ ],
};

// Update import in bingoLogic.ts
import { questions } from '../data/questions';
const lang = navigator.language.startsWith('pt') ? 'pt_BR' : 'en';
const selectedQuestions = questions[lang];
```

## Theme Validation Checklist

Before committing a new theme:

- [ ] Exactly 24 questions
- [ ] No duplicates
- [ ] All < 40 characters
- [ ] Accessible language
- [ ] Inclusive to diverse audiences
- [ ] Tested: 5+ complete games
- [ ] Tested: All 12 win patterns
- [ ] Tests pass: `npm run test`
- [ ] Lint passes: `npm run lint`

## Example Custom Event

For a **GitHub Universe 2026 Bingo**:

```typescript
export const gitHubUniverseTheme = [
  "uses GitHub Copilot daily",
  "has forked a repo",
  "has contributed to a GitHub repo",
  "knows what Actions are",
  "has written a GitHub issue",
  "uses GitHub Projects",
  "has starred a repo",
  "is learning GitHub Skills",
  "watches GitHub Changelog",
  "uses GitHub on mobile",
  "has multiple repos",
  "knows GitHub Advanced Search",
  "has used GitHub Gists",
  "knows about GitHub Pages",
  "follows GitHub Blog",
  "has attended GitHub Satellite",
  "uses GitHub CLI",
  "knows GitHub Organizations",
  "loves Open Source",
  "has code-reviewed a PR",
  "celebrates Open Source",
  "thinks GitHub is awesome",
  "has GitHub-powered workflow",
  "is excited about AI coding",
];
```

---

**Tip**: Keep themes focused and cohesive. A tech-only event needs tech-specific questions, not general mixers. This increases conversation quality and ensures relevant connections!
