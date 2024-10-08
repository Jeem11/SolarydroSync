const express = require('express');
const mysql = require('mysql2');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');

const app = express();
const port = 3306;

// Middleware
app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Your Firebase Admin SDK credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'Chesca',  // Replace with your MySQL username
  password: 'PUPian@2024',  // Replace with your MySQL password
  database: 'brgyh_admin',  // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      const user = results[0];

      // Compare password
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Generate custom token with Firebase
        const customToken = await admin.auth().createCustomToken(user.id);
        return res.status(200).json({ token: customToken });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
