const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Port for the backend server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: 'password', // Replace with your MySQL password
  database: 'banner_db' // Replace with your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
app.get('/api/banner', (req, res) => {
  const query = 'SELECT * FROM banner WHERE id = 1'; // Adjust based on your schema
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching banner data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results[0]);
  });
});

app.post('/api/banner', (req, res) => {
  const { content, timer, link } = req.body;
  const query = 'UPDATE banner SET content = ?, timer = ?, link = ? WHERE id = 1'; // Adjust based on your schema
  db.query(query, [content, timer, link], (err, results) => {
    if (err) {
      console.error('Error updating banner data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ message: 'Banner updated successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
