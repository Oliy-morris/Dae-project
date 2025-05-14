const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // your MySQL password
  database: 'artgallery'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// GET paintings
app.get('/paintings', (req, res) => {
  db.query('SELECT * FROM paintings', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
