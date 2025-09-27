# CLAUDE.md - @poly/ui Package

This file provides guidance to Claude Code (claude.ai/code) when working with the UI component library.

## Package Overview

This is the shared UI component library for the Poly CRM monorepo. It's built on top of shadcn/ui components with Radix UI primitives, providing a consistent design system across all applications.

### Technology Stack
- **React**: 19+ with TypeScript 5.9+
- **Styling**: Tailwind CSS v4 with design tokens and CSS variables
- **Components**: shadcn/ui (New York style) with Radix UI primitives
- **Variants**: class-variance-authority (CVA) for component variants
- **Icons**: Lucide React
- **Theme**: Dark/light mode support with cssVariables approach

## Development Commands

When working in the UI package directory (`packages/ui/`):

- `pnpm lint` - Run ESLint with zero warnings policy
- `pnpm check-types` - TypeScript validation and type checking

From monorepo root:
- `pnpm --filter @poly/ui lint` - Lint UI package
- `pnpm --filter @poly/ui check-types` - TypeScript check for UI package

## Package Structure

```
packages/ui/
├── src/
│   ├── components/     # All UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   └── tooltip.tsx
│   ├── lib/           # Utility functions
│   │   └── utils.ts   # cn() helper for class merging
│   ├── hooks/         # Custom React hooks
│   │   └── use-mobile.ts
│   └── styles/        # Global CSS and Tailwind
│       └── globals.css
├── components.json    # shadcn/ui configuration
├── package.json       # Package exports and dependencies
└── tsconfig.json      # TypeScript configuration
```

## Component Architecture

### Design Patterns
- **Accessibility-first**: Built on Radix UI primitives for WCAG compliance
- **Variant-driven**: Use CVA for consistent component variants and sizes
- **Composable**: Components follow compound component patterns where appropriate
- **Typed**: Full TypeScript support with proper prop typing

### Component Features
- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes
- **Input**: Form input with consistent styling and validation states
- **Separator**: Horizontal/vertical dividers with proper semantics
- **Sheet**: Modal dialog/drawer component with multiple sides
- **Sidebar**: Complex sidebar with collapsible states, mobile support, and nested menus
- **Skeleton**: Loading placeholders with animation
- **Tooltip**: Accessible tooltips with positioning

## Import Patterns

**CRITICAL**: Always use package exports for internal imports within the UI package.

###  Correct Internal Imports
```typescript
// Utilities
import { cn } from "@poly/ui/lib/utils"

// Hooks
import { useIsMobile } from "@poly/ui/hooks/use-mobile"

// Components
import { Button } from "@poly/ui/components/button"
import { Input } from "@poly/ui/components/input"
```

###  Never Use These Patterns
```typescript
// Don't use relative imports
import { cn } from "../lib/utils"
import { Button } from "./button"

// Don't use @/ path mapping (doesn't work across packages)
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
```

### External Consumption
Other packages import UI components like this:
```typescript
// From web app or Storybook
import { Button } from "@poly/ui/components/button"
import { cn } from "@poly/ui/lib/utils"
```

## Adding New Components

### Using shadcn/ui CLI
The package is configured for shadcn/ui with these settings:
- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React
- **TypeScript**: Enabled

### Process for Adding Components
1. **Check dependencies**: Ensure any new Radix UI packages exist in workspace catalog
2. **Add to catalog**: If missing, add new dependencies to `pnpm-workspace.yaml` catalog first
3. **Install component**: Use shadcn/ui CLI or manually create component
4. **Fix imports**: Update any generated imports to use `@poly/ui/*` pattern
5. **Update exports**: Add new component to package.json exports if needed
6. **Test**: Run `pnpm check-types` and test in consuming apps

### Dependency Management
- **All dependencies** must use `catalog:` approach for version consistency
- **Never hardcode versions** in package.json - always reference the workspace catalog
- **Add new Radix UI packages** to workspace catalog before using them

Example of adding a new Radix UI dependency:
```json
// First add to pnpm-workspace.yaml catalog
"@radix-ui/react-dropdown-menu": "^2.1.0"

// Then use in package.json
"@radix-ui/react-dropdown-menu": "catalog:"
```

## TypeScript Configuration

- **Extends**: `@poly/typescript-config/react-library.json`
- **Base URL**: Set to current directory for proper resolution
- **No custom path mapping**: Removed to prevent cross-package conflicts
- **Module resolution**: Uses inherited settings for compatibility

## Package Exports

The package exposes these exports for consumption:
```json
{
  "./globals.css": "./src/styles/globals.css",
  "./postcss.config": "./postcss.config.mjs",
  "./lib/*": "./src/lib/*.ts",
  "./components/*": "./src/components/*.tsx",
  "./hooks/*": "./src/hooks/*.ts"
}
```

## Integration with Apps

### Web App Integration
- Imports UI components via package exports
- Uses same Tailwind configuration for consistency
- Leverages theme system for dark/light mode

### Storybook Integration
- Documents all UI components with interactive examples
- Uses Vitest for component testing
- Provides visual regression testing capabilities

## Important Notes

### Do's
-  Use `@poly/ui/*` imports for all internal references
-  Follow CVA patterns for component variants
-  Add proper TypeScript types for all props
-  Use Radix UI primitives for accessibility
-  Add new dependencies to workspace catalog first
-  Test components in both light and dark themes

### Don'ts
-  Never use relative imports (`../`, `./`)
-  Never use `@/*` path mapping within UI package
-  Never hardcode dependency versions
-  Never break the component export structure
-  Never add components without proper accessibility consideration

## Troubleshooting

### Import Resolution Issues
If you see "Module not found" errors:
1. Verify the import uses `@poly/ui/*` pattern
2. Check that the file exists in the expected location
3. Ensure package.json exports include the path
4. Run `pnpm install` to refresh module resolution

### Dependency Issues
If new components fail to install:
1. Check if Radix UI packages are in workspace catalog
2. Add missing packages to `pnpm-workspace.yaml` first
3. Update UI package.json to use `catalog:` references
4. Run `pnpm install` to apply changes

### Build Issues
If TypeScript compilation fails:
1. Run `pnpm check-types` to see specific errors
2. Verify all imports use correct `@poly/ui/*` patterns
3. Check for missing dependencies or exports
4. Ensure TypeScript configuration is properly inherited