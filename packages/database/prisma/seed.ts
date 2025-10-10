import { PrismaClient, UserRole } from "@prisma/client";
import { config } from "dotenv";

// Load .env file
config();

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Get seed passwords from environment variables
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  const userPassword = process.env.SEED_USER_PASSWORD;

  if (!adminPassword || !userPassword) {
    throw new Error(
      "SEED_ADMIN_PASSWORD and SEED_USER_PASSWORD must be set in .env file",
    );
  }

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@poly.com" },
    update: {},
    create: {
      email: "admin@poly.com",
      name: "Admin User",
      password: adminPassword,
      role: UserRole.ADMIN,
    },
  });

  console.log("✅ Created admin user:", adminUser.email);

  // Create sample regular user
  const regularUser = await prisma.user.upsert({
    where: { email: "user@poly.com" },
    update: {},
    create: {
      email: "user@poly.com",
      name: "Regular User",
      password: userPassword,
      role: UserRole.USER,
    },
  });

  console.log("✅ Created regular user:", regularUser.email);

  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
