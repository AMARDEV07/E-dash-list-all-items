// Before (problematic code likely similar to this):
mongoose.connect('mongodb://localhost:27017/e-dashBoard', {
  // options
});

// After (using environment variables for security):
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // other options as needed
});

// Example of setting up environment variables in your code
// Add this near the top of your main file (e.g., index.js)
require('dotenv').config(); // You may need to install dotenv: npm install dotenv

// If you're not using mongoose but the native MongoDB driver:
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');
    const db = client.db(process.env.DB_NAME);
    // Use db for your operations
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}