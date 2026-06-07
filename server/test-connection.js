import 'dotenv/config';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
console.log('Connecting to:', connectionString.replace(/:[^:@]+@/, ':****@'));

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

try {
  const result = await prisma.$queryRawUnsafe('SELECT 1 as test');
  console.log('SUCCESS! Connected to Neon:', JSON.stringify(result));
} catch (e) {
  console.log('FAIL:', e.message);
} finally {
  await prisma.$disconnect();
  process.exit(0);
}
