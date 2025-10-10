# CLAUDE.md - @poly/api

This file provides guidance to Claude Code when working with the API package.

## Package Purpose

Business logic layer containing all services, validation schemas, and shared
logic. Framework-agnostic and reusable across Server Actions, API Routes, and
tests.

## Key Principles

### 1. All Business Logic Lives in Services

Services contain database operations, validations, and complex workflows:

```typescript
// CORRECT - Complex logic in service
export const orderService = {
  async create(data: CreateOrderInput) {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({ data });
      await taskService.create({ relatedOrderId: order.id });
      await notificationService.create({ message: `New order #${order.id}` });
      await tx.customer.update({
        where: { id: order.customerId },
        data: { totalOrders: { increment: 1 } },
      });
      return order;
    });
  },
};
```

### 2. Services Throw Errors

Let the caller (Action/Route) handle error formatting:

```typescript
// Services throw
export const orderService = {
  async create(data: CreateOrderInput) {
    if (!customer) throw new Error("Customer not found");
    return await prisma.order.create({ data });
  },
};

// Don't catch and return error objects in services
```

### 3. Keep Services Pure

No Next.js specific code. Services should be usable from anywhere:

```typescript
// CORRECT
export const productService = {
  async create(data) {
    return await prisma.product.create({ data });
  },
};

// WRONG - Next.js specific
export const productService = {
  async create(data) {
    const product = await prisma.product.create({ data });
    revalidatePath("/products"); // Don't do this!
    return product;
  },
};
```

### 4. Document All Functions

Always add JSDoc comments with @param, @returns, @throws:

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

## Package Structure

```
src/
├── services/        # Business logic (orderService, customerService, etc.)
├── validation/      # Zod schemas (createOrderSchema, updateOrderSchema, etc.)
├── types/          # Shared TypeScript types
└── utils/          # Helper functions
```

## Adding a New Feature

1. **Create Prisma model** in `@poly/database`
2. **Create validation schema** in `src/validation/[name].schema.ts`
3. **Create service** in `src/services/[name].service.ts` with JSDoc
4. **Export service** from `src/services/index.ts`
5. **Use in Server Actions** in `apps/web/actions/`

## Testing

Services are framework-agnostic and easily testable. Test factories should use
services (not direct Prisma) to maintain business logic.

## Exports

Package uses granular exports:

- `@poly/api/services/*` - Import services
- `@poly/api/validation/*` - Import validation schemas
- `@poly/api/types/*` - Import types
- `@poly/api/utils/*` - Import utilities

## Error Handling Reference

### Service Error Patterns

All services follow consistent error handling patterns:

#### Contact Service Errors

**`contactService.create()`**

- Throws Prisma error for duplicate email (unique constraint violation)
- Validation errors caught before service call by Zod schemas

**`contactService.findById()`**

- Throws `Error: "Contact with ID {id} not found"` when not found

**`contactService.update()`**

- Throws `Error: "Contact with ID {id} not found"` (Prisma P2025)
- Throws Prisma error for duplicate email

**`contactService.delete()`**

- Throws `Error: "Contact with ID {id} not found"` (Prisma P2025)

**`contactService.findAll()` and `contactService.count()`**

- Never throw - return empty array or 0

### Common Prisma Error Codes

| Code  | Description                   | Service Translation                |
| ----- | ----------------------------- | ---------------------------------- |
| P2025 | Record not found              | `"Contact with ID {id} not found"` |
| P2002 | Unique constraint failed      | Native Prisma message              |
| P2003 | Foreign key constraint failed | Native Prisma message              |

### Server Action Error Response Format

**Success:**

```typescript
{ success: true, contact: Contact }
```

**Validation Error:**

```typescript
{
  success: false,
  error: "Validation failed",
  validationErrors: [{ path: ["email"], message: "Invalid email" }]
}
```

**Service Error:**

```typescript
{ success: false, error: "Contact with ID 123 not found" }
```

**Unexpected Error:**

```typescript
{ success: false, error: "An unexpected error occurred" }
```
