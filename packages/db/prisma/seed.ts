import db from "@repo/db/client"
import bcrypt from 'bcryptjs';

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create a User
  const user = await db.user.create({
    data: {
      name: 'Kartik Vashishtha',
      email: 'kartik@example.com',
      number: '9876543210',
      password: hashedPassword,
    },
  });

  // Create Balance for User
  await db.balance.create({
    data: {
      userId: user.id,
      amount: 10000,
      locked: 2000,
    },
  });

  // Create OnRamp Transaction
  await db.onRampTranstion.create({
    data: {
      userId: user.id,
      amount: 5000,
      status: "Processing" , 
      startTime: new Date(),
      token: 'txn_' + Math.random().toString(36).substring(2, 15),
    },
  });

  // Create a Merchant
  await db.merchant.create({
    data: {
      name: 'Test Merchant',
      email: 'merchant@example.com',
      auth_type: "Google"
    },
  });

  console.log('✅ Database has been seeded successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
