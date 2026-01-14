# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a monorepo for **Poly**, an AI automations company that builds custom AI
solutions for customers. The project includes landing pages, documentation,
client portals, and internal tools. Built with modern web technologies using
Turborepo for monorepo management and pnpm for package management.

## Development Commands

**Note**: Use `--filter` commands when working from the monorepo root. When
working inside specific app directories (e.g., `apps/storybook/`), use the local
commands without `--filter`.

### Core Commands

- `pnpm dev` - Start all development servers: web app, Storybook, and Prisma
  Studio (port 5555)
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint across all packages
- `pnpm typecheck` - Run TypeScript type checking across all packages
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run all tests

### App-Specific Commands (from monorepo root)

- `pnpm --filter web dev` - Start Next.js main app with Turbopack (port 3000)
- `pnpm --filter web build` - Build Next.js app
- `pnpm --filter web lint` - Lint web app
- `pnpm --filter web typecheck` - TypeScript check for web app

- `pnpm --filter storybook dev` - Start Storybook (port 6006)
- `pnpm --filter storybook build` - Build Storybook static files
- `pnpm --filter storybook test` - Run Vitest tests for stories

### Database Commands

- `pnpm --filter @poly/database db:generate` - Generate Prisma Client
- `pnpm --filter @poly/database db:migrate` - Run database migrations
- `pnpm --filter @poly/database db:studio` - Open Prisma Studio (port 5555)
- `pnpm --filter @poly/database db:push` - Push schema changes without
  migrations
- `pnpm --filter @poly/database db:seed` - Seed database with default data

### Package-Specific Commands

- `pnpm --filter @poly/ui lint` - Lint UI package
- `pnpm --filter @poly/ui typecheck` - TypeScript check for UI package
- `pnpm --filter @poly/api lint` - Lint API package
- `pnpm --filter @poly/api typecheck` - TypeScript check for API package

## Project Architecture

### Monorepo Structure

- `apps/web/` - Next.js 15 main application (landing pages, marketing site)
- `apps/storybook/` - Storybook documentation for components
- `packages/ui/` - Shared UI component library (shadcn/ui based)
- `packages/database/` - Prisma ORM with database schema and client
- `packages/api/` - Business logic layer with services and validation
- `packages/eslint-config/` - Shared ESLint configuration
- `packages/typescript-config/` - Shared TypeScript configuration

**Note**: Additional apps for documentation, client portals, or internal tools
can be added as needed to support custom AI solution delivery.

### Technology Stack

- **Frontend**: Next.js 15 with App Router, React 19, TypeScript 5.9+
- **Backend**: Next.js Server Actions and API Routes (no separate server)
- **Database**: Prisma ORM with SQLite (development) → PostgreSQL (production
  path)
- **Validation**: Zod for runtime validation and type inference
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: shadcn/ui (New York style) with Radix UI primitives
- **Fonts**: Geist and Geist Mono
- **Icons**: Lucide React
- **Themes**: next-themes with dark/light mode support
- **Monorepo**: Turborepo with pnpm workspaces
- **Testing**: Vitest, Playwright for E2E
- **Documentation**: Storybook with Next.js-Vite framework
  (@storybook/nextjs-vite)

### Backend Architecture (Layered Approach)

**No separate server** - Next.js handles both frontend and backend:

**Data Flow**: Component → Server Action → Service → Prisma → Database

**Layer Responsibilities**:

- **Services** (`packages/api/src/services/`) - ALL business logic, database
  operations, AI integrations, throw errors
- **Server Actions** (`apps/web/actions/`) - Form handling, call services, cache
  revalidation, catch/format errors
- **API Routes** (`apps/web/app/api/`) - Webhooks, external integrations, AI
  service endpoints, health checks
- **Validation** (`packages/api/src/validation/`) - Zod schemas for runtime
  validation

**Error Handling**: Services throw → Actions/Routes catch and format

**Database**: Prisma with multi-file schemas in
`packages/database/prisma/schema/` (base.prisma + models/\*.prisma)

### Testing Strategy

Create test factories that use services (not direct Prisma) to maintain business
logic. Use Prisma directly only for cleanup and edge cases.

### Code Documentation

When writing services, actions, or utilities, always add JSDoc comments:

```typescript
/**
 * Processes an AI automation request and tracks usage
 * @param data - Automation request data including client ID and parameters
 * @returns Processed automation result with usage metrics
 * @throws Error if client not found or quota exceeded
 */
export async function processAutomation(
  data: AutomationInput
): Promise<AutomationResult> {
  // implementation
}
```

Include:

- Function purpose
- `@param` for each parameter with description
- `@returns` describing return value
- `@throws` for expected errors

## Important Notes

- **No separate server package**: Everything runs in Next.js (Server Actions +
  API Routes)
- **Use Server Actions** for internal form submissions and mutations
- **Use API Routes** for AI service integrations, external webhooks (automation
  platforms, client systems), or health checks
- **Business logic belongs in services**, not in actions or routes
- **AI integrations** should be implemented in services with proper error
  handling and rate limiting
- Prisma schema uses multi-file structure with `prisma.schema` config pointing
  to `./prisma/schema` directory
- Database connection uses relative path `file:../dev.db` to prevent duplicate
  db files
- Running `pnpm dev` starts web app, Storybook, and Prisma Studio simultaneously
- Use `--filter` flag with pnpm to run commands on specific packages
- Development servers run with Turbo's persistent cache for better performance
- Storybook is configured with @storybook/nextjs-vite framework (required for
  Vitest addon compatibility)
- Prisma Client must be generated before TypeScript compilation (handled by
  Turbo dependencies)

## Git Hooks

This project uses Husky to enforce code quality checks before commits.

### Pre-commit Hook

The pre-commit hook automatically runs on **every commit** and performs the
following checks on the **entire codebase**:

1. **Format** - Prettier formatting (`pnpm format`)
2. **Lint** - ESLint on all packages (`pnpm lint`)
3. **Prisma Generate** - Generates Prisma Client
   (`pnpm --filter @poly/database db:generate`)
4. **Type Check** - TypeScript type checking on all packages (`pnpm typecheck`)

**Why full codebase checks?** Running checks on the entire codebase (not just
staged files) ensures migration safety, catches breaking changes across files,
and maintains consistency project-wide.

### Bypassing Hooks (Emergency Only)

If you need to bypass hooks in an emergency (NOT recommended):

```bash
HUSKY_SKIP=1 git commit -m "emergency fix"
# or
git commit --no-verify -m "emergency fix"
```

### Running Hooks Manually

To test the pre-commit hook without committing:

```bash
.husky/pre-commit
```

### Troubleshooting

**"Prisma Client not generated" error:**

```bash
pnpm --filter @poly/database db:generate
```

**Hooks not running:**

```bash
pnpm prepare  # Re-install Husky hooks
```

**Type check failing:**

```bash
pnpm typecheck  # Run type check manually to see errors
```
