import { PrismaClient, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@poly.com' },
    update: {},
    create: {
      email: 'admin@poly.com',
      name: 'Admin User',
      password: '$2a$10$YourHashedPasswordHere', // TODO: Replace with actual hashed password
      role: UserRole.ADMIN,
    },
  })

  console.log('✅ Created admin user:', adminUser.email)

  // Create sample regular user
  const regularUser = await prisma.user.upsert({
    where: { email: 'user@poly.com' },
    update: {},
    create: {
      email: 'user@poly.com',
      name: 'Regular User',
      password: '$2a$10$YourHashedPasswordHere', // TODO: Replace with actual hashed password
      role: UserRole.USER,
    },
  })

  console.log('✅ Created regular user:', regularUser.email)

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
