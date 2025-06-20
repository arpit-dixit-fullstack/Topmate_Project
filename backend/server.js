const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./Connection/Connect");
const userApi = require("./routes/Route");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://topmate-project.vercel.app",
  credentials: true,
}));

app.use('/api', userApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
