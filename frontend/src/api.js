// src/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getDashboardData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/indicators`);
    if (!response.ok) throw new Error('Failed to fetch dashboard data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSensorData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/indicators/sensors`);
    if (!response.ok) throw new Error('Failed to fetch sensor data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};