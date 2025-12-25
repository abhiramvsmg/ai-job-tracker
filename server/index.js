require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoutes = require("./routes/jobRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
app.use("/api/ai", aiRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err.message));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "AI Job Tracker API is running 🚀",
  });
});

