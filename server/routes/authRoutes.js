import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length > 0) return res.status(400).json({ message: "Email already exists" });

    db.query(
  "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
  [name, email, hashedPassword],
  (err, result) => {
    if (err) {
      console.error("❌ MySQL INSERT ERROR:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("✅ User inserted:", result);
    res.status(201).json({ message: "Signup successful" });
  }
  );
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(400).json({ message: "Invalid credentials" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });
    res.json({ message: "Login successful", token, user });
  });
});

export default router;
