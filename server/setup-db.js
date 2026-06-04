import 'dotenv/config';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

const sql = `
-- Create User table
CREATE TABLE IF NOT EXISTS "User" (
  "id" SERIAL PRIMARY KEY,
  "full_name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT,
  "phone" TEXT,
  "google_id" TEXT UNIQUE,
  "is_verified" BOOLEAN NOT NULL DEFAULT false,
  "verification_token" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Doctor table
CREATE TABLE IF NOT EXISTS "Doctor" (
  "id" SERIAL PRIMARY KEY,
  "full_name" TEXT NOT NULL,
  "specialization" TEXT NOT NULL,
  "hospital" TEXT,
  "bio" TEXT,
  "available_days" TEXT,
  "available_time" TEXT,
  "consultation_fee" DECIMAL(10,2),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Appointment table
CREATE TABLE IF NOT EXISTS "Appointment" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "doctor_id" INTEGER NOT NULL,
  "appointment_date" TEXT NOT NULL,
  "appointment_time" TEXT NOT NULL,
  "notes" TEXT,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Appointment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "Appointment_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
`;

// Split and execute each CREATE TABLE separately
const statements = sql.split(/;\s*\n/).filter(s => s.trim().length > 0);

try {
  for (const stmt of statements) {
    const cleaned = stmt.trim();
    if (cleaned) {
      console.log('Executing:', cleaned.substring(0, 60) + '...');
      await prisma.$executeRawUnsafe(cleaned);
      console.log('✅ Done');
    }
  }
  console.log('\n🎉 All tables created successfully!');
} catch (e) {
  console.error('❌ Error:', e.message);
} finally {
  await prisma.$disconnect();
  process.exit(0);
}
