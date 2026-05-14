---
name: design-guide
description: Guide for performing complete UI theme redesigns in Bingo Mixer, ensuring cohesive aesthetic changes across all components while maintaining functionality and accessibility.
applyTo: "src/components/**/*.tsx,src/index.css,src/data/questions.ts"
---

# Design Guide Instructions

When the user requests a full redesign with a specific theme (e.g., "hero style", "noir detective", "space opera"):

## 1. Theme Foundation (src/index.css)
- Define a cohesive color palette with 6-8 CSS variables (--color-bg, --color-surface, --color-text, --color-accent, etc.)
- Choose distinctive fonts: serif for elegant/noir themes, sans-serif for modern/hero themes
- Create atmospheric backgrounds using layered gradients and radial effects
- Ensure high contrast for accessibility while maintaining the theme's mood

## 2. Start Screen Redesign (StartScreen.tsx)
- Update title and subtitle to match the theme's tone
- Redesign the main card with theme-appropriate borders, shadows, and background
- Rewrite instructions and objective text to fit the theme
- Style the call-to-action button with theme colors and gradients
- Add subtle background effects or patterns

## 3. Game Screen Update (GameScreen.tsx)
- Refresh header with theme-appropriate title and status labels
- Update briefing panel copy and styling to match theme
- Adjust status indicators and win messaging
- Ensure layout remains responsive and accessible

## 4. Board and Squares (BingoBoard.tsx, BingoSquare.tsx)
- Update board container with theme-consistent borders and shadows
- Redesign square styling: borders, backgrounds, hover states
- Refresh marked and winning states with theme-appropriate colors
- Update free space label and styling to fit theme
- Maintain focus outlines and accessibility attributes

## 5. Victory Modal (BingoModal.tsx)
- Redesign modal with theme colors and typography
- Update victory message and call-to-action text
- Add atmospheric background effects
- Ensure modal remains accessible and dismissible

## 6. Content Update (questions.ts)
- Rewrite all 24 question prompts to match the theme
- Update FREE_SPACE label to fit theme
- Ensure questions remain engaging and varied

## 7. Validation
- Run `npm run test` to ensure functionality intact
- Run `npm run lint` for code quality
- Test in browser for visual coherence and responsiveness
- Verify accessibility: keyboard navigation, screen reader support, color contrast

## Key Principles
- Avoid generic AI aesthetics: no Inter/Arial fonts, no clichéd color schemes
- Commit to the theme: make unexpected, distinctive choices
- Maintain functionality: all bingo logic, state management, and accessibility must work
- Use CSS variables for consistency across components
- Test thoroughly: visual regression, interaction flows, edge cases

## Examples
- Hero theme: Bold reds, metallic accents, mission-style copy
- Noir theme: Charcoal backgrounds, gold accents, detective-style copy
- Space theme: Deep blues, neon highlights, sci-fi terminology