# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for a CRM (Customer Relationship Management) system built with modern web technologies. The project uses Turborepo for monorepo management and pnpm for package management.

## Development Commands

**Note**: Use `--filter` commands when working from the monorepo root. When working inside specific app directories (e.g., `apps/storybook/`), use the local commands without `--filter`.

### Core Commands
- `pnpm dev` - Start all development servers: web app, Storybook, and Prisma Studio (port 5555)
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint across all packages
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run all tests

### App-Specific Commands (from monorepo root)
- `pnpm --filter web dev` - Start Next.js CRM app with Turbopack (port 3000)
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
- `pnpm --filter @poly/database db:push` - Push schema changes without migrations
- `pnpm --filter @poly/database db:seed` - Seed database with default data

### Package-Specific Commands
- `pnpm --filter @poly/ui lint` - Lint UI package
- `pnpm --filter @poly/ui check-types` - TypeScript check for UI package
- `pnpm --filter @poly/api lint` - Lint API package
- `pnpm --filter @poly/api check-types` - TypeScript check for API package

## Project Architecture

### Monorepo Structure
- `apps/web/` - Next.js 15 CRM application (main UI)
- `apps/storybook/` - Storybook documentation for components
- `packages/ui/` - Shared UI component library (shadcn/ui based)
- `packages/database/` - Prisma ORM with database schema and client
- `packages/api/` - Business logic layer with services and validation
- `packages/eslint-config/` - Shared ESLint configuration
- `packages/typescript-config/` - Shared TypeScript configuration

### Technology Stack
- **Frontend**: Next.js 15 with App Router, React 19, TypeScript 5.9+
- **Backend**: Next.js Server Actions and API Routes (no separate server)
- **Database**: Prisma ORM with SQLite (development) → PostgreSQL (production path)
- **Validation**: Zod for runtime validation and type inference
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: shadcn/ui (New York style) with Radix UI primitives
- **Fonts**: Geist and Geist Mono
- **Icons**: Lucide React
- **Themes**: next-themes with dark/light mode support
- **Monorepo**: Turborepo with pnpm workspaces
- **Testing**: Vitest, Playwright for E2E
- **Documentation**: Storybook with Next.js-Vite framework (@storybook/nextjs-vite)

### Backend Architecture (Layered Approach)

**No separate server** - Next.js handles both frontend and backend:

**Data Flow**: Component → Server Action → Service → Prisma → Database

**Layer Responsibilities**:
- **Services** (`packages/api/src/services/`) - ALL business logic, database operations, throw errors
- **Server Actions** (`apps/web/actions/`) - Form handling, call services, cache revalidation, catch/format errors
- **API Routes** (`apps/web/app/api/`) - Only for webhooks/external integrations (n8n, etc.)
- **Validation** (`packages/api/src/validation/`) - Zod schemas for runtime validation

**Error Handling**: Services throw → Actions/Routes catch and format

**Database**: Prisma with multi-file schemas in `packages/database/prisma/schema/` (base.prisma + models/*.prisma)

### Testing Strategy

Create test factories that use services (not direct Prisma) to maintain business logic. Use Prisma directly only for cleanup and edge cases.

### Code Documentation

When writing services, actions, or utilities, always add JSDoc comments:

```typescript
/**
 * Creates a new order with related tasks and notifications
 * @param data - Order creation data including customer ID and items
 * @returns Created order with all relationships
 * @throws Error if customer not found or inactive
 */
export async function createOrder(data: CreateOrderInput): Promise<Order> {
  // implementation
}
```

Include:
- Function purpose
- `@param` for each parameter with description
- `@returns` describing return value
- `@throws` for expected errors

## Important Notes

- **No separate server package**: Everything runs in Next.js (Server Actions + API Routes)
- **Use Server Actions** for internal form submissions and mutations
- **Use API Routes** only for external webhooks (n8n, Zapier, etc.) or health checks
- **Business logic belongs in services**, not in actions or routes
- Prisma schema uses multi-file structure with `prisma.schema` config pointing to `./prisma/schema` directory
- Database connection uses relative path `file:../dev.db` to prevent duplicate db files
- Running `pnpm dev` starts web app, Storybook, and Prisma Studio simultaneously
- Use `--filter` flag with pnpm to run commands on specific packages
- Development servers run with Turbo's persistent cache for better performance
- Storybook is configured with @storybook/nextjs-vite framework (required for Vitest addon compatibility)
- Prisma Client must be generated before TypeScript compilation (handled by Turbo dependencies)
