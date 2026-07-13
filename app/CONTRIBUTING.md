# Contributing to Beacon Minerals

Thank you for your interest in contributing to the Beacon Minerals project! We welcome contributions from developers of all skill levels.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the existing issues to see if the problem has already been reported. When creating a bug report, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- A clear description of the enhancement
- Why this enhancement would be useful
- Possible implementation approaches

### Contributing Code

#### Good First Issues

Look for issues labeled `good first issue` or `help wanted` — these are great starting points for new contributors.

#### Areas for Contribution

- **UI/UX Improvements** - Enhance the visual design and user experience
- **Performance Optimization** - Improve load times and animation performance
- **Accessibility** - Ensure WCAG compliance throughout the site
- **Testing** - Add unit and integration tests
- **Documentation** - Improve README, code comments, or add tutorials
- **New Features** - Propose and implement new sections or functionality
- **Bug Fixes** - Fix reported issues

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup Steps

1. Fork the repository on GitHub

2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/beacon-minerals.git
   cd beacon-minerals
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open `http://localhost:5173` in your browser

## Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Enable strict mode features
- Define interfaces for component props
- Avoid `any` type — use proper typing

### React

- Use functional components with hooks
- Keep components focused and reusable
- Use custom hooks for shared logic
- Follow the existing component structure

### CSS / Tailwind

- Use Tailwind utility classes as primary styling method
- Custom CSS goes in `index.css` or `App.css`
- Follow the existing color system (Beacon design tokens)
- Use responsive prefixes (`md:`, `lg:`, `sm:`) for breakpoints

### File Naming

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useAuth.ts`)
- Utilities: `camelCase.ts`
- Styles: `kebab-case.css`

## Commit Messages

Use clear, descriptive commit messages following this format:

```
<type>: <short description>

[optional longer description]

[optional references to issues]
```

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic changes)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes

Examples:
```
feat: add investor metrics chart to dashboard

fix: resolve GSAP scroll trigger memory leak on unmount

docs: update README with deployment instructions
```

## Pull Request Process

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the style guidelines

3. **Test your changes**:
   ```bash
   npm run build
   ```
   Ensure the build completes without errors.

4. **Commit your changes** with clear commit messages

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Reference any related issues (e.g., `Closes #123`)
   - Screenshots for UI changes

7. **Code Review** - Maintainers will review your PR. Address any feedback promptly.

8. **Merge** - Once approved, your PR will be merged into `main`.

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers

Thank you for contributing! 
