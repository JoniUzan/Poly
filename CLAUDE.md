# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for a CRM (Customer Relationship Management) system built with modern web technologies. The project uses Turborepo for monorepo management and pnpm for package management.

## Development Commands

**Note**: Use `--filter` commands when working from the monorepo root. When working inside specific app directories (e.g., `apps/storybook/`), use the local commands without `--filter`.

### Core Commands
- `pnpm dev` - Start all development servers (uses Turbo)
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint across all packages
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run all tests

### App-Specific Commands (from monorepo root)
- `pnpm --filter web dev` - Start Next.js CRM app with Turbopack
- `pnpm --filter web build` - Build Next.js app
- `pnpm --filter web lint` - Lint web app
- `pnpm --filter web typecheck` - TypeScript check for web app

- `pnpm --filter storybook dev` - Start Storybook on port 6006
- `pnpm --filter storybook build` - Build Storybook static files
- `pnpm --filter storybook test` - Run Vitest tests for stories

### Package-Specific Commands
- `pnpm --filter @poly/ui lint` - Lint UI package
- `pnpm --filter @poly/ui check-types` - TypeScript check for UI package

## Project Architecture

### Monorepo Structure
- `apps/web/` - Next.js 15 CRM application (main UI)
- `apps/storybook/` - Storybook documentation for components
- `packages/ui/` - Shared UI component library (shadcn/ui based)
- `packages/eslint-config/` - Shared ESLint configuration
- `packages/typescript-config/` - Shared TypeScript configuration

### Technology Stack
- **Frontend**: Next.js 15 with App Router, React 19, TypeScript 5.9+
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: shadcn/ui (New York style) with Radix UI primitives
- **Fonts**: Geist and Geist Mono
- **Icons**: Lucide React
- **Themes**: next-themes with dark/light mode support
- **Monorepo**: Turborepo with pnpm workspaces
- **Testing**: Vitest, Playwright for E2E
- **Documentation**: Storybook with Next.js-Vite framework (@storybook/nextjs-vite)

### Package Dependencies
- The web app depends on `@poly/ui` for shared components
- All packages use workspace dependencies for internal packages
- External dependencies are managed through pnpm catalog in workspace config
- UI package exports components, styles, and utilities through defined entry points

### Key Files and Configurations
- `turbo.json` - Turborepo task configuration with build dependencies
- `pnpm-workspace.yaml` - Workspace configuration with dependency catalog
- `apps/web/app/layout.tsx` - Root layout with theme providers and fonts
- `packages/ui/src/components/button.tsx` - Example shadcn/ui component with CVA variants

### Development Patterns
- Uses workspace protocol for internal package dependencies
- Tailwind CSS configuration shared between packages
- ESLint and TypeScript configs shared across workspace
- Next.js app uses App Router pattern with TypeScript
- UI components follow shadcn/ui patterns with class-variance-authority for variants
- Theme system supports system preference detection

## Important Notes

- The project currently has a basic setup with minimal components
- Server and E2E testing apps mentioned in README are planned but not yet implemented
- Use `--filter` flag with pnpm to run commands on specific packages
- Development servers run with Turbo's persistent cache for better performance
- Storybook is configured with @storybook/nextjs-vite framework (required for Vitest addon compatibility)