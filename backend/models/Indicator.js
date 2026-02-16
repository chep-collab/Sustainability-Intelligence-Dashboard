import mongoose from 'mongoose';

const indicatorSchema = new mongoose.Schema({
  renewableEnergyPercent: { type: Number, required: true, min: 0, max: 100 },
  waterUsage: { type: Number, required: true, min: 0, max: 1000 },
  wasteDiverted: { type: Number, required: true, min: 0, max: 100 },
  ghgEmissions: { type: Number, required: true, min: 0, max: 100 }
}, { timestamps: true });

export default mongoose.model('Indicator', indicatorSchema);
