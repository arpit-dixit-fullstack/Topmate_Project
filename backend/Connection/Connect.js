const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database is Connected");
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
};

module.exports = connectDB;
