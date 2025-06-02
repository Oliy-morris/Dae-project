const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Routes
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM blog_posts ORDER BY created_at DESC', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  db.query(
    'INSERT INTO blog_posts (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Error inserting post');
      }

      // ✅ RETURN full post with new ID
      res.json({ id: result.insertId, title, content });
    }
  );
});


// Start server
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
