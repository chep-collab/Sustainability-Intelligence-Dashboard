import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Indicator from './models/Indicator.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sustainability_dashboard';

const seedData = [
  { renewableEnergyPercent: 45, waterUsage: 32, wasteDiverted: 62, ghgEmissions: 12.5 },
  { renewableEnergyPercent: 52, waterUsage: 28, wasteDiverted: 68, ghgEmissions: 11.8 },
  { renewableEnergyPercent: 58, waterUsage: 25, wasteDiverted: 72, ghgEmissions: 10.5 },
  { renewableEnergyPercent: 62, waterUsage: 22, wasteDiverted: 75, ghgEmissions: 9.8 },
  { renewableEnergyPercent: 68, waterUsage: 20, wasteDiverted: 78, ghgEmissions: 8.5 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    await Indicator.deleteMany({});
    console.log('Existing indicators cleared');

    const inserted = await Indicator.insertMany(seedData);
    console.table(inserted.map(i => ({
      renewableEnergyPercent: i.renewableEnergyPercent,
      waterUsage: i.waterUsage,
      wasteDiverted: i.wasteDiverted,
      ghgEmissions: i.ghgEmissions
    })));

    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
