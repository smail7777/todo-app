const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connexion à MongoDB local via Docker
    const conn = await mongoose.connect('mongodb://localhost:27017/tododb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;