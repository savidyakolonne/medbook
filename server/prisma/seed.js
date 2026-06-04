import 'dotenv/config';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

try {
  // Fix the FK constraint - drop the wrong one and add the correct one
  await prisma.$executeRawUnsafe(`
    ALTER TABLE "Appointment" DROP CONSTRAINT IF EXISTS "Appointment_doctor_id_fkey"
  `);
  await prisma.$executeRawUnsafe(`
    ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctor_id_fkey" 
    FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE
  `);
  console.log('✅ Fixed Appointment FK constraint');
} catch (e) {
  console.error('FK fix error:', e.message);
}

const doctors = [
  {
    full_name: 'Kumara Perera',
    specialization: 'Cardiologist',
    hospital: 'National Hospital Colombo',
    bio: 'Senior cardiologist with 15+ years of experience in cardiac care and interventional cardiology.',
    available_days: 'Mon, Wed, Fri',
    available_time: '9:00 AM - 1:00 PM',
    consultation_fee: 3500,
  },
  {
    full_name: 'Nimal Fernando',
    specialization: 'Dermatologist',
    hospital: 'Lanka Hospitals',
    bio: 'Specialist in skin diseases, cosmetic dermatology, and laser treatments.',
    available_days: 'Tue, Thu, Sat',
    available_time: '10:00 AM - 3:00 PM',
    consultation_fee: 2500,
  },
  {
    full_name: 'Chamari Silva',
    specialization: 'Pediatrician',
    hospital: 'Lady Ridgeway Hospital',
    bio: 'Child specialist focused on newborn care and childhood diseases.',
    available_days: 'Mon, Tue, Wed, Thu, Fri',
    available_time: '8:00 AM - 12:00 PM',
    consultation_fee: 2000,
  },
  {
    full_name: 'Roshan Jayawardena',
    specialization: 'Orthopedic Surgeon',
    hospital: 'Asiri Surgical Hospital',
    bio: 'Expert in joint replacement surgery, sports injuries, and fracture management.',
    available_days: 'Mon, Wed, Fri',
    available_time: '2:00 PM - 6:00 PM',
    consultation_fee: 4000,
  },
  {
    full_name: 'Dilani Wickramasinghe',
    specialization: 'Neurologist',
    hospital: 'National Hospital Colombo',
    bio: 'Specializes in stroke management, epilepsy, and neurodegenerative disorders.',
    available_days: 'Tue, Thu',
    available_time: '9:00 AM - 2:00 PM',
    consultation_fee: 3000,
  },
  {
    full_name: 'Ashan Bandara',
    specialization: 'General Practitioner',
    hospital: 'Nawaloka Hospital',
    bio: 'Experienced GP providing comprehensive primary healthcare services.',
    available_days: 'Mon, Tue, Wed, Thu, Fri, Sat',
    available_time: '8:00 AM - 5:00 PM',
    consultation_fee: 1500,
  },
];

try {
  console.log('🌱 Seeding doctors...');
  for (const doctor of doctors) {
    const existing = await prisma.doctor.findFirst({
      where: { full_name: doctor.full_name },
    });
    if (!existing) {
      await prisma.doctor.create({ data: doctor });
      console.log(`  ✅ Added Dr. ${doctor.full_name}`);
    } else {
      console.log(`  ⏭️  Dr. ${doctor.full_name} already exists`);
    }
  }
  console.log(`\n🎉 Seeding complete!`);
} catch (e) {
  console.error('❌ Seed error:', e.message);
} finally {
  await prisma.$disconnect();
  process.exit(0);
}
