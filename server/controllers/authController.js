const db = require('../config/db');

exports.getCompletedTests = async (req, res) => {
  const { userId } = req.query;
  try {
    const [rows] = await db.query(
      'SELECT course_id, test_id FROM completed_tests WHERE user_id = ?',
      [userId]
    );
    res.json({ completedTests: rows });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch completed tests.' });
  }
};