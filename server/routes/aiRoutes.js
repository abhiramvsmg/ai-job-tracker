const express = require("express");
const router = express.Router();

// AI route placeholder (no crash if key missing)
router.post("/improve", async (req, res) => {
  res.json({
    improvedText:
      "AI feature ready. Add OPENAI_KEY in .env to enable live AI responses."
  });
});

module.exports = router;
