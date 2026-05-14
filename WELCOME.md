# 🎉 Welcome to Bingo Mixer!

Welcome to your interactive Bingo Mixer development environment! This is a modern React + TypeScript social bingo game perfect for mixers and community events.

## 🎮 What is Bingo Mixer?

**Bingo Mixer** is a fun, web-based bingo game designed for in-person social events where people find others matching specific questions and get 5 in a row to win!

### Key Features
- 🎯 Dynamic bingo board generation
- 🎲 Interactive square selection
- 🏆 Win detection (5 in a row horizontally, vertically, or diagonally)
- 🎨 Beautiful Tailwind CSS UI with dark/light mode support
- 📱 Fully responsive design
- ♿ Accessible components built with React best practices

---

## 📁 Project Structure

```
src/
├── App.tsx                  # Main application component
├── components/
│   ├── StartScreen.tsx      # Game introduction screen
│   ├── GameScreen.tsx       # Main game board interface
│   ├── BingoBoard.tsx       # 5x5 bingo grid
│   ├── BingoSquare.tsx      # Individual square components
│   └── BingoModal.tsx       # Winner announcement modal
├── hooks/
│   └── useBingoGame.ts      # Game state management hook
├── data/
│   └── questions.ts         # Question database for the game
├── utils/
│   ├── bingoLogic.ts        # Game logic (winning, board generation)
│   └── bingoLogic.test.ts   # Comprehensive unit tests (41 tests)
├── types/
│   └── index.ts             # TypeScript type definitions
└── styles/
    └── index.css            # Global styles

docs/                        # Documentation website
workshop/                    # Educational lab guides
```

---

## 🚀 Quick Start

### Development Server
The dev server is already running! It's available at:
- **Local**: http://localhost:5173/
- **Auto-refresh**: Changes are reflected instantly as you code

### Available Commands

```bash
# Start development server (already running!)
npm run dev

# Build for production
npm run build

# Run linting checks
npm run lint

# Run tests (41 passing tests!)
npm run test
```

---

## 💻 Development Guide

### Getting Started with Code
1. **Start with** [src/App.tsx](src/App.tsx) - Entry point component
2. **Explore** [src/components](src/components/) - React components directory
3. **Check** [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) - Game state logic
4. **Review** [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) - Core game mechanics
5. **See tests** [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts) - 41 test examples

### Technology Stack
- **React 19**: Modern UI library with hooks
- **TypeScript 5.9**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS 4**: Utility-first styling
- **Vitest**: Fast unit testing
- **ESLint**: Code quality enforcement

### Game Logic Overview

The core game mechanics are in `bingoLogic.ts`:

1. **generateBoard()** - Creates random 5x5 board from question pool
2. **toggleSquare()** - Marks/unmarks squares as player interactions
3. **checkBingo()** - Detects winning patterns (5 in a row)
4. **getWinningSquareIds()** - Returns winning squares for animation

---

## 🧪 Testing

The project includes comprehensive tests for all game logic:

```bash
npm run test
```

✅ **41 tests passing**
- Unit tests for all utility functions
- Integration tests for game flow
- Edge case validation

---

## 📚 Educational Resources

This workspace includes detailed lab guides in the `workshop/` folder:

- **[00-overview.md](workshop/00-overview.md)** - Project overview
- **[01-setup.md](workshop/01-setup.md)** - Setup & Context Engineering
- **[02-design.md](workshop/02-design.md)** - Design-First Frontend
- **[03-quiz-master.md](workshop/03-quiz-master.md)** - Custom Quiz Master
- **[04-multi-agent.md](workshop/04-multi-agent.md)** - Multi-Agent Development

---

## 🎯 Next Steps

1. ✅ **Dev server is running** - Open [http://localhost:5173/](http://localhost:5173/) in your browser
2. 🔧 **Explore the code** - Start with [src/App.tsx](src/App.tsx)
3. 🧪 **Run tests** - Execute `npm run test` to see all tests pass
4. 📖 **Read guides** - Check the [workshop/](workshop/) folder for detailed tutorials
5. 🎨 **Customize** - Modify questions in [src/data/questions.ts](src/data/questions.ts)

---

## 🐛 Troubleshooting

**Dev server not running?**
```bash
npm run dev
```

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Need to rebuild?**
```bash
npm run build
```

**Code quality issues?**
```bash
npm run lint
```

---

## 📝 Available Scripts Summary

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (auto-refresh) |
| `npm run build` | Production build |
| `npm run lint` | Check code quality |
| `npm run test` | Run tests (41 tests) |

---

## 🎓 Project Status

✅ **Setup Complete!**
- Dependencies installed
- Dev server running
- All tests passing (41/41)
- Build verified
- Linting clean

---

## 📞 Resources

- 🌐 [View README](README.md)
- 📚 [Lab Guide](workshop/GUIDE.md)
- 📋 [Contributing Guide](CONTRIBUTING.md)
- ⚖️ [License: MIT](LICENSE)

---

**Happy coding! 🚀** Feel free to explore, modify, and have fun building with Bingo Mixer!
