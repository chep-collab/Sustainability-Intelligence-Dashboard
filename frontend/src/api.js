// src/api.js
export const getDashboardData = async () => {
  try {
    const response = await fetch('/api/indicators'); // uses proxy to backend
    if (!response.ok) throw new Error('Failed to fetch dashboard data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSensorData = async () => {
  try {
    const response = await fetch('/api/indicators/sensors'); // uses proxy to backend
    if (!response.ok) throw new Error('Failed to fetch sensor data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};