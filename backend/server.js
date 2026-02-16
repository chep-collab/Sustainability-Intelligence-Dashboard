import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import indicatorsRouter from './routes/indicators.js';
import { initMQTT } from './services/iotSensorManager.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-url.com']
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Sustainability Indicators Dashboard API');
});
app.use('/api/indicators', indicatorsRouter);

// MongoDB Connection - Works with Atlas or Local
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    console.log('🔍 Debug - MONGO_URI from env:', mongoUri);
    
    if (!mongoUri) {
      console.error('❌ MONGO_URI not found in environment variables');
      process.exit(1);
    }

    // Mongoose connection options
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    // Check if it's Atlas or Local
    const isAtlas = mongoUri.includes('mongodb+srv://');
    console.log(`🌍 Connecting to MongoDB ${isAtlas ? 'Atlas' : 'Local'}...`);
    console.log(`📍 Environment: ${process.env.NODE_ENV}`);
    console.log(`🔗 Full URI: ${mongoUri}`);
    
    const conn = await mongoose.connect(mongoUri, options);
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log(`🗄️  Database: ${conn.connection.name}`);
    console.log(`🏠 Host: ${conn.connection.host}`);
    
    return conn;
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:');
    console.error(`🔍 Error Code: ${error.code}`);
    console.error(`📝 Error Message: ${error.message}`);
    
    // Specific error handling
    if (error.code === 'ENOTFOUND') {
      console.error('🌐 DNS Resolution Failed - Check your Atlas cluster name');
      console.error('💡 Try using local MongoDB: mongodb://127.0.0.1:27017/sustainability_dashboard');
    } else if (error.code === 'AUTH_FAILED') {
      console.error('🔐 Authentication Failed - Check username/password');
    } else if (error.code === 'NETWORK_ERROR') {
      console.error('🔗 Network Error - Check IP whitelist in Atlas');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('🔌 Local MongoDB not running - Install MongoDB Community Server');
      console.error('💡 Or use MongoDB Atlas cloud instead');
    }
    
    console.log('⚠️  Continuing without database - using sample data fallback');
    return null; // Don't exit, continue without DB
  }
};

// Start server only after successful DB connection
const startServer = async () => {
  try {
    await connectDB();
    
    // Initialize MQTT service after DB connection
    initMQTT();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Environment: ${process.env.NODE_ENV}`);
      console.log(`📡 API Base URL: http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.error('💥 Failed to start server:', error.message);
    process.exit(1);
  }
};

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error.message);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 SIGTERM received, shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error.message);
    process.exit(1);
  }
});

// Start the application
startServer();