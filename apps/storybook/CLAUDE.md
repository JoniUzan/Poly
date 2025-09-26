# CLAUDE.md - Storybook App

This file provides guidance to Claude Code when working with the Storybook application in this monorepo.

## Storybook App Overview

This is the Storybook documentation app for the @poly/ui component library and the web application. It provides interactive documentation and testing for all UI components, web app components, and page-level stories.

## Key Configuration

### Framework
- **Framework**: `@storybook/nextjs-vite` (required for Vitest addon compatibility)
- **Version**: Storybook 9.1.8+
- **Port**: 6006 (default development port)

### Testing Setup
- **Testing Framework**: Vitest with @storybook/addon-vitest
- **Browser Testing**: Playwright with Chromium
- **Test Location**: Stories with play functions

### Important Files
- `.storybook/main.ts` - Main Storybook configuration
- `.storybook/preview.ts` - Global preview settings and CSS imports
- `.storybook/vitest.setup.ts` - Vitest setup for story testing
- `vitest.config.ts` - Vitest configuration with Storybook integration
- `postcss.config.mjs` - **Must use object format** (not array) for nextjs-vite compatibility

## Development Commands

### Core Commands
- `pnpm dev` - Start Storybook development server on port 6006
- `pnpm build` - Build Storybook static files
- `pnpm preview` - Preview built Storybook
- `pnpm test` - Run Vitest tests for stories
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript checks

## Story Development Patterns

### Story Structure
```typescript
import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent } from "storybook/test";
import { ComponentName } from "@poly/ui/components/component-name";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example",
  },
  play: async ({ canvas }) => {
    // Storybook 9+ provides canvas directly as prop
    const element = canvas.getByRole("button");
    await userEvent.click(element);
    expect(element).toBeInTheDocument();
  },
};
```

### Testing Imports
- Use `import { expect, userEvent } from "storybook/test";` (no @ prefix)
- Storybook 9+ provides `canvas` directly in play function props
- No need for `within(canvasElement)` wrapper

## Story Coverage Scope

This Storybook covers documentation for:

### 1. @poly/ui Component Library
- Base UI components (Button, Input, Card, etc.)
- Layout components
- Form components
- Navigation components
- Data display components

### 2. Web Application Components
- App-specific components from `apps/web/`
- Business logic components
- Feature-specific components
- Composite components

### 3. Page-level Stories
- Complete page layouts
- User flows and interactions
- Integration scenarios
- Multi-component compositions

## Dependencies

### Framework Dependencies
- `@storybook/nextjs-vite` - Main framework (required for Vitest addon)
- `@storybook/addon-vitest` - Testing integration
- `@storybook/addon-a11y` - Accessibility testing
- `@storybook/addon-docs` - Auto-generated documentation

### Component Dependencies
- `@poly/ui` - Main UI component library
- `lucide-react` - Icon library
- All dependencies managed through pnpm catalog system

## Critical Configuration Notes

### PostCSS Configuration
The PostCSS config **must** use object format for nextjs-vite compatibility:
```javascript
// ✅ Correct format
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

// ❌ Incorrect format (causes build errors)
const config = {
  plugins: ["@tailwindcss/postcss"],
};
```

### CSS Imports
Global CSS must be imported in `.storybook/preview.ts`:
```typescript
import '../src/styles/globals.css';
```

### Vitest Integration
- Vitest config uses `storybookTest` plugin for story testing
- Browser mode enabled with Playwright provider
- Setup file configures project annotations for testing context

## Common Issues

1. **PostCSS Format Error**: Ensure postcss.config.mjs uses object format, not array
2. **Import Errors**: Use `storybook/test` not `@storybook/test` for testing utilities
3. **Canvas Access**: Use `canvas` prop directly in play functions (Storybook 9+)
4. **Framework Compatibility**: Only `@storybook/nextjs-vite` works with Vitest addon, not `@storybook/nextjs`

## File Structure
```
apps/storybook/
├── .storybook/
│   ├── main.ts              # Main configuration
│   ├── preview.ts           # Preview settings & CSS imports
│   └── vitest.setup.ts      # Vitest setup
├── src/
│   └── stories/             # Story files for UI, web components, and pages
├── vitest.config.ts         # Vitest configuration
├── postcss.config.mjs       # PostCSS config (object format)
└── package.json             # Dependencies and scripts
```