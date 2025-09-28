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
│   ├── components/     # All UI components (folder-per-component)
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── index.ts
│   │   ├── input/
│   │   │   ├── input.tsx
│   │   │   └── index.ts
│   │   ├── separator/
│   │   │   ├── separator.tsx
│   │   │   └── index.ts
│   │   ├── sheet/           # File per component
│   │   │   ├── sheet.tsx
│   │   │   ├── sheet-trigger.tsx
│   │   │   ├── sheet-close.tsx
│   │   │   ├── sheet-portal.tsx
│   │   │   ├── sheet-overlay.tsx
│   │   │   ├── sheet-content.tsx
│   │   │   ├── sheet-header.tsx
│   │   │   ├── sheet-footer.tsx
│   │   │   ├── sheet-title.tsx
│   │   │   ├── sheet-description.tsx
│   │   │   └── index.ts
│   │   ├── sidebar/         # Logical grouping for extremely complex components
│   │   │   ├── sidebar.tsx           # Main Sidebar component
│   │   │   ├── sidebar-provider.tsx  # Context, provider, hook
│   │   │   ├── sidebar-content.tsx   # Content structure components
│   │   │   ├── sidebar-menu.tsx      # Menu-related components
│   │   │   ├── sidebar-trigger.tsx   # Trigger and rail components
│   │   │   └── index.ts
│   │   ├── skeleton/
│   │   │   ├── skeleton.tsx
│   │   │   └── index.ts
│   │   └── tooltip/         # File per component
│   │       ├── tooltip.tsx
│   │       ├── tooltip-trigger.tsx
│   │       ├── tooltip-provider.tsx
│   │       ├── tooltip-content.tsx
│   │       └── index.ts
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

### File Organization Patterns

The UI library uses two organizational approaches based on component complexity:

#### Standard Approach: File-per-Component
Most components use individual files for each component:
```
sheet/
├── sheet.tsx
├── sheet-trigger.tsx
├── sheet-close.tsx
├── sheet-content.tsx
├── sheet-header.tsx
└── index.ts
```

#### Exception: Logical Grouping (Only for Extremely Complex Components)
Only use logical grouping for components with 20+ interdependent parts:
```
sidebar/                  # 25+ components, complex interdependencies
├── sidebar.tsx           # Main component
├── sidebar-provider.tsx  # Context/state management
├── sidebar-content.tsx   # Content structure components
├── sidebar-menu.tsx      # Menu-related components
├── sidebar-trigger.tsx   # Interaction components
└── index.ts              # Organized exports
```

**Guidelines:**
- **Default**: Use file-per-component for all new components
- **Exception**: Only use logical grouping for massive, tightly-coupled component systems
- **Threshold**: If a component has 20+ related parts with complex interdependencies
- **Examples**: Sidebar (25+ components) uses logical grouping, Sheet/Tooltip use file-per-component

### Design Patterns
- **Accessibility-first**: Built on Radix UI primitives for WCAG compliance
- **Variant-driven**: Use CVA for consistent component variants and sizes
- **Composable**: Components follow compound component patterns where appropriate
- **Typed**: Full TypeScript support with proper prop typing
- **Logical grouping**: Complex components split by functionality, not arbitrarily

### Component Features
- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes
- **Input**: Form input with consistent styling and validation states
- **Separator**: Horizontal/vertical dividers with proper semantics
- **Sheet**: Modal dialog/drawer component with multiple sides - each sub-component in its own file
- **Sidebar**: Complex sidebar with collapsible states, mobile support, and nested menus - uses logical grouping due to 25+ interdependent components
- **Skeleton**: Loading placeholders with animation
- **Tooltip**: Accessible tooltips with positioning - each component in its own file

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
4. **Organize files**: Choose appropriate structure based on complexity:
   - **Simple components**: Single file in dedicated folder (like Button, Input)
   - **Complex components**: Use logical grouping (like Sidebar, Sheet)
5. **Fix imports**: Update any generated imports to use `@poly/ui/*` pattern
6. **Create index.ts**: Add clean exports with descriptive comments for complex components
7. **Update exports**: Component folders automatically work with existing package.json exports
8. **Test**: Run `pnpm check-types` and test in consuming apps

### Component Organization Guidelines

When deciding how to organize a new component, follow these guidelines:

#### Use File-per-Component (Default Approach) when:
- **Always use this** unless component is extremely complex
- Each related component gets its own file
- Examples: Button (1 file), Sheet (10 files), Tooltip (4 files)

#### Use Logical Grouping (Exceptional Cases Only) when:
- Component has 20+ tightly interdependent parts
- Complex state management affects multiple component groups
- Massive component system like navigation sidebars
- **Current example**: Only Sidebar (25+ components)

#### File-per-Component Benefits:
- **Clarity**: Each component easy to find and understand
- **Modularity**: True separation of concerns
- **Maintainability**: Changes isolated to specific files
- **Consistency**: Predictable file structure across library

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
  "./components/*": "./src/components/*/index.ts",
  "./hooks/*": "./src/hooks/*.ts"
}
```

**Note**: Components are exported through their folder's index.ts file, which provides clean, organized exports regardless of internal file structure.

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