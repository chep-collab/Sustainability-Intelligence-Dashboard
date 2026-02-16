import Indicator from '../models/Indicator.js';

// GET all indicators
export const getIndicators = async (req, res) => {
  try {
    const indicators = await Indicator.find().sort({ createdAt: -1 });
    res.json(indicators);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching indicators', error: err.message });
  }
};

// POST create new indicator
export const createIndicator = async (req, res) => {
  try {
    const { renewableEnergyPercent, waterUsage, wasteDiverted, ghgEmissions } = req.body;

    // Validation
    if (
      renewableEnergyPercent == null || waterUsage == null || 
      wasteDiverted == null || ghgEmissions == null
    ) return res.status(400).json({ message: 'All fields are required' });

    const indicator = new Indicator({
      renewableEnergyPercent,
      waterUsage,
      wasteDiverted,
      ghgEmissions
    });
    const saved = await indicator.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error creating indicator', error: err.message });
  }
};
