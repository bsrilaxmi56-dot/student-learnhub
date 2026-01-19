import express from "express";
import db from "../config/db.js";

const router = express.Router();

// ✅ Save or Update Test Completion
router.post("/complete", (req, res) => {
  const { userId, testId, score } = req.body;

  if (!userId || !testId || score === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const status = score >= 75 ? "completed" : "incomplete";

  // Check if this record already exists
  db.query(
    "SELECT * FROM user_tests WHERE user_id = ? AND test_id = ?",
    [userId, testId],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.length > 0) {
        // Update existing record
        db.query(
          "UPDATE user_tests SET score = ?, status = ? WHERE user_id = ? AND test_id = ?",
          [score, status, userId, testId],
          (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Test status updated", status });
          }
        );
      } else {
        // Insert new record
        db.query(
          "INSERT INTO user_tests (user_id, test_id, score, status) VALUES (?, ?, ?, ?)",
          [userId, testId, score, status],
          (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Test result saved", status });
          }
        );
      }
    }
  );
});

export default router;
