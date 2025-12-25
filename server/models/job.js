const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Rejected", "Offer"],
      default: "Applied"
    },
    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
