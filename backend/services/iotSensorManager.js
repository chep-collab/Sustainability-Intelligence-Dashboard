import mqtt from 'mqtt';
import Indicator from '../models/Indicator.js';

let client;
let activeSensors = 0;
let lastUpdate = null;

// Store latest sensor readings
let latestReadings = {
  energy: null,
  water: null,
  waste: null,
  ghg: null
};

export const initMQTT = () => {
  const broker = process.env.MQTT_BROKER;
  if (!broker) {
    console.log('MQTT: No broker defined, skipping MQTT connection.');
    return;
  }

  client = mqtt.connect(broker, {
    username: process.env.MQTT_USER || undefined,
    password: process.env.MQTT_PASS || undefined,
    reconnectPeriod: 10000
  });

  client.on('connect', () => {
    console.log('MQTT: Connected to broker ✅');
    client.subscribe(
      ['sensors/energy', 'sensors/water', 'sensors/waste', 'sensors/ghg'],
      (err) => {
        if (err) console.log('MQTT: Subscription error', err.message);
      }
    );
  });

  client.on('error', (err) => {
    // Silently handle errors (MQTT is optional for demo mode)
  });

  client.on('offline', () => {
    // Silently handle offline state
  });

  client.on('message', async (topic, message) => {
    try {
      const value = parseFloat(message.toString());
      if (isNaN(value)) return;

      switch (topic) {
        case 'sensors/energy':
          latestReadings.energy = value;
          break;
        case 'sensors/water':
          latestReadings.water = value;
          break;
        case 'sensors/waste':
          latestReadings.waste = value;
          break;
        case 'sensors/ghg':
          latestReadings.ghg = value;
          break;
      }

      // Save to MongoDB
      const indicatorData = {
        renewableEnergyPercent: latestReadings.energy || 0,
        waterUsage: latestReadings.water || 0,
        wasteDiverted: latestReadings.waste || 0,
        ghgEmissions: latestReadings.ghg || 0
      };

      const newIndicator = new Indicator(indicatorData);
      await newIndicator.save();

      lastUpdate = new Date();
      activeSensors = 1; // demo: single sensor
      console.log(`MQTT message: ${topic} = ${value}`);
    } catch (err) {
      console.error('MQTT processing error:', err.message);
    }
  });
};

// Get status including latest readings
export const getStatus = () => ({
  mqttConnected: client && client.connected,
  activeSensors,
  lastUpdate,
  readings: { ...latestReadings }
});

// Publish mock sensor data
export const publishMockData = () => {
  if (!client || !client.connected) return null;

  const mock = {
    energy: Math.floor(Math.random() * 101),
    water: Math.floor(Math.random() * 1001),
    waste: Math.floor(Math.random() * 101),
    ghg: Math.floor(Math.random() * 101)
  };

  for (const topic in mock) {
    client.publish(`sensors/${topic}`, mock[topic].toString(), { qos: 0 });
    latestReadings[topic] = mock[topic]; // update latest readings
  }

  lastUpdate = new Date();
  activeSensors = 1;
  return lastUpdate;
};
