# Prisma Schema Organization

## Structure

Models are organized by domain in separate files:

- **`contacts.prisma`** - Contact & People models
- **`companies.prisma`** - Company & Organization models (future)
- **`deals.prisma`** - Sales pipeline models (future)
- **`activities.prisma`** - Tasks, Events, Notes (future)
- **`users.prisma`** - Authentication & Users (future)
- **`automation.prisma`** - Workflows & Triggers (future)

## Naming Conventions

- **Models**: Singular PascalCase (`Contact` not `Contacts`)
- **Files**: Lowercase with domain name (`contacts.prisma`)
- **Tables**: Plural snake_case via `@@map("contacts")`

## Adding New Models

1. Create or edit domain file (e.g., `deals.prisma`)
2. Define model with fields and relations
3. Run: `pnpm db:migrate --name describe_change`
4. Prisma automatically discovers all `.prisma` files in `schema/`

## Multi-File Support

Prisma 6.7.0+ natively supports multiple schema files. All `.prisma` files
in the `schema/` directory are automatically discovered and merged.

No build tools or third-party packages required!

## Example: Adding a new model

```prisma
// deals.prisma
model Deal {
  id          Int      @id @default(autoincrement())
  title       String
  amount      Float
  contactId   Int
  contact     Contact  @relation(fields: [contactId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("deals")
}
```

Then update `contacts.prisma`:

```prisma
model Contact {
  // ... existing fields ...
  deals       Deal[]   // Add this relation
}
```
