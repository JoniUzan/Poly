# CRM Monorepo - Product Management System

A comprehensive CRM (Customer Relationship Management) application built with modern web technologies in a monorepo architecture. This project focuses on product management with a complete development ecosystem including design system documentation, API generation, and end-to-end testing.

## 🏗️ Project Architecture

### Monorepo Structure

```
Poly/
├── apps/                           # Applications
│   ├── web/                       # Next.js CRM Application (Main UI)
│   ├── storybook/                # Component Documentation & Testing
│   ├── server/                   # Express.js API Server
│   └── e2e/                      # Playwright End-to-End Testing
├── packages/                      # Shared Packages
│   ├── ui/                       # Shared UI Components (shadcn/ui)
│   ├── api/                      # Generated API Client (Orval + OpenAPI)
│   ├── eslint-config/            # Shared ESLint Configuration
│   └── typescript-config/        # Shared TypeScript Configuration
├── docs/                         # Project Documentation
└── tools/                        # Development Tools & Scripts
```

## 🚀 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5.9+** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with CSS custom properties
- **shadcn/ui** - High-quality component library (New York style)
- **Lucide React** - Beautiful, customizable icons
- **next-themes** - Theme management with system preference support

### Backend & API
- **Express.js** - RESTful API server
- **OpenAPI 3.0** - API specification and documentation
- **Orval** - TypeScript client generation from OpenAPI specs
- **Prisma/TypeORM** - Database ORM and migrations
- **Zod** - Runtime type validation and schema definition

### Development & Testing
- **Storybook 8.x with Next.js** - Component documentation and testing with Next.js framework
- **Vitest** - Fast unit testing framework
- **Playwright** - Cross-browser end-to-end testing
- **Mock Service Worker (MSW)** - API mocking for development and testing
- **Turborepo** - Monorepo build system and task runner
- **pnpm** - Fast, disk space efficient package manager

### Code Quality
- **ESLint** - Code linting with TypeScript and React rules
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Husky** - Git hooks for pre-commit validation

## 📋 Development Plan

### Phase 1: Design System Foundation
- **Storybook Setup**: Dedicated app for component documentation
- **Component Library**: Expand shadcn/ui components for CRM needs
- **Testing Infrastructure**: Vitest + MSW integration
- **Design Tokens**: Document color system, typography, spacing

### Phase 2: API Development
- **Express Server**: RESTful API with proper middleware
- **OpenAPI Specification**: Comprehensive API documentation
- **Database Setup**: Entity models and migrations
- **Type-Safe Client**: Orval-generated TypeScript client

### Phase 3: CRM Application
- **Authentication**: User management and session handling
- **Product Management**: CRUD operations with rich UI
- **Customer Management**: Contact profiles and interaction history
- **Order Processing**: Sales pipeline and transaction tracking
- **Dashboard & Analytics**: Metrics visualization and reporting

### Phase 4: Testing Infrastructure
- **E2E Testing**: Critical user journey automation
- **Visual Testing**: Component and page regression testing
- **API Testing**: Endpoint validation and error handling
- **Performance Testing**: Load testing and optimization

### Phase 5: Production Readiness
- **Deployment Pipeline**: CI/CD with automated testing
- **Environment Configuration**: Development, staging, production
- **Monitoring**: Error tracking and performance monitoring
- **Documentation**: User guides and API reference

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: >=20.0.0
- **pnpm**: >=10.4.1
- **Git**: Latest version

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Poly

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Development

```bash
# Start all development servers
pnpm dev

# Start specific app
pnpm --filter web dev          # Next.js CRM app
pnpm --filter storybook dev    # Storybook documentation
pnpm --filter server dev       # Express API server

# Run tests
pnpm test                      # Run all tests
pnpm --filter ui test         # UI component tests
pnpm --filter e2e test        # End-to-end tests

# Build for production
pnpm build                     # Build all apps
pnpm --filter web build       # Build specific app
```

### Available Scripts

```bash
# Development
pnpm dev                       # Start development servers
pnpm storybook                 # Launch Storybook
pnpm server                    # Start API server

# Testing
pnpm test                      # Run unit tests
pnpm test:e2e                  # Run E2E tests
pnpm test:watch                # Watch mode testing

# Code Quality
pnpm lint                      # Run ESLint
pnpm lint:fix                  # Fix ESLint issues
pnpm format                    # Format code with Prettier
pnpm typecheck                 # TypeScript type checking

# Build & Deployment
pnpm build                     # Build all applications
pnpm start                     # Start production servers
pnpm clean                     # Clean build artifacts
```

## 📦 Package Details

### Apps

#### `apps/web` - CRM Application
Next.js application serving as the main user interface for the CRM system.

**Key Features:**
- Product catalog management
- Customer relationship tracking
- Order processing and invoicing
- Analytics dashboard
- User authentication and authorization

**Dependencies:**
- `@workspace/ui` - Shared component library
- `@workspace/api` - Type-safe API client
- `next`, `react`, `react-dom` - Core framework
- `next-themes` - Theme switching

#### `apps/storybook` - Component Documentation
Dedicated Storybook application built on Next.js framework for component development and testing.

**Features:**
- Interactive component playground with Next.js optimizations
- Design system documentation
- Accessibility testing
- Visual regression testing
- MSW integration for realistic data
- Fast refresh and hot reloading with Next.js

#### `apps/server` - API Server
Express.js server providing RESTful API endpoints for the CRM system.

**Endpoints:**
- `/api/products` - Product management
- `/api/customers` - Customer data and relationships
- `/api/orders` - Order processing and tracking
- `/api/auth` - Authentication and authorization
- `/api/analytics` - Business intelligence data

#### `apps/e2e` - End-to-End Testing
Playwright testing suite covering critical user journeys.

**Test Coverage:**
- User authentication flows
- Product creation and management
- Customer interaction workflows
- Order processing end-to-end
- Dashboard functionality

### Packages

#### `packages/ui` - Design System
Comprehensive component library built on shadcn/ui with CRM-specific components.

**Component Categories:**
- **Primitives**: Button, Input, Select, etc.
- **Layout**: Container, Grid, Stack, Card
- **Navigation**: Breadcrumb, Tabs, Pagination
- **Data Display**: Table, Badge, Avatar, Charts
- **Feedback**: Alert, Toast, Loading, Progress
- **CRM Specific**: ProductCard, CustomerProfile, OrderSummary

#### `packages/api` - Generated API Client
Type-safe API client generated from OpenAPI specifications using Orval.

**Features:**
- Automatic TypeScript type generation
- React Query hooks for data fetching
- Mock Service Worker handlers
- Error handling and retry logic
- Environment-specific configuration

#### `packages/eslint-config` - Code Quality
Shared ESLint configuration with rules for TypeScript, React, and accessibility.

#### `packages/typescript-config` - Type Configuration
Base TypeScript configurations for different environments (apps, packages, testing).

## 🎨 Design System

### Component Library
Built on **shadcn/ui** with the "New York" style variant, providing:
- Consistent visual language
- Accessible components (WCAG 2.1 AA)
- Dark/light theme support
- Responsive design patterns
- Type-safe component APIs

### Design Tokens
- **Colors**: OKLCH color space with semantic naming
- **Typography**: Geist font family with optimized scales
- **Spacing**: 4px base unit with consistent rhythm
- **Borders**: 10px base radius with size variants
- **Shadows**: Subtle elevation system

### Theme System
- System preference detection
- Smooth theme transitions
- Custom CSS properties
- Component-level theme awareness

## 🧪 Testing Strategy

### Testing Pyramid
1. **Unit Tests** (Vitest): Individual component and function testing
2. **Integration Tests** (Storybook): Component interaction testing
3. **E2E Tests** (Playwright): Full user journey automation
4. **Visual Tests**: Screenshot-based regression testing

### Coverage Goals
- **Unit Tests**: >90% code coverage
- **Integration Tests**: All component interactions
- **E2E Tests**: Critical business workflows
- **Accessibility Tests**: WCAG 2.1 compliance

## 🚀 Deployment

### Development Environment
```bash
pnpm dev    # All services with hot reload
```

### Staging Environment
```bash
pnpm build && pnpm start    # Production builds locally
```

### Production Environment
- **Frontend**: Vercel deployment with edge functions
- **Backend**: Docker containerized Express server
- **Database**: PostgreSQL with connection pooling
- **CDN**: Static assets served via CDN

## 🤝 Contributing

### Development Workflow
1. **Fork** and clone the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Develop** with proper testing and documentation
4. **Test** your changes (`pnpm test`)
5. **Lint** and format code (`pnpm lint && pnpm format`)
6. **Commit** with conventional commits
7. **Push** to your fork and create a Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled, proper typing required
- **Components**: Follow shadcn/ui patterns and accessibility guidelines
- **Testing**: Write tests for new features and bug fixes
- **Documentation**: Update Storybook stories and README files
- **Git**: Use conventional commit messages

### Pull Request Process
1. Ensure all tests pass and code is properly formatted
2. Update documentation and Storybook stories if needed
3. Add reviewers and link related issues
4. Address review feedback promptly
5. Merge after approval and CI passes

## 📚 Documentation

- **[Design System](./DESIGN_SYSTEM.md)** - Component library and design tokens
- **[API Reference](./docs/api/)** - OpenAPI documentation and examples
- **[Component Stories](./apps/storybook/)** - Interactive component documentation
- **[Testing Guide](./docs/testing.md)** - Testing strategies and best practices
- **[Deployment Guide](./docs/deployment.md)** - Deployment and infrastructure setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach
- [Radix UI](https://www.radix-ui.com/) for accessible primitive components
- [Turborepo](https://turbo.build/) for efficient monorepo management

---

**Built with ❤️ for modern CRM workflows**