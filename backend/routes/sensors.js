const express = require('express');
const router = express.Router();
const { getStatus, publishMockData } = require('../services/iotSensorManager');

// GET /api/sensors/status
router.get('/status', (req, res) => {
  try {
    const status = getStatus();
    res.json(status);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get sensor status' });
  }
});

// GET /api/sensors
router.get('/', (req, res) => {
  try {
    const status = getStatus();
    res.json({
      connected: status.mqttConnected,
      sensors: ['energy', 'water', 'waste', 'ghg'],
      readings: status.readings,   // include latest readings
      timestamp: status.lastUpdate
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sensors' });
  }
});


// POST /api/sensors/mock
router.post('/mock', (req, res) => {
  try {
    const timestamp = publishMockData();
    if (!timestamp) {
      return res.status(500).json({ message: 'MQTT not connected, cannot publish mock data' });
    }
    res.json({ message: 'Mock data published', timestamp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to publish mock data' });
  }
});

module.exports = router;
