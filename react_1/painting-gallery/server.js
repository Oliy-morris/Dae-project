const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL (MAMP configuration) - First connect without database
const db = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL on port 8889');
  
  // Create database if it doesn't exist
  db.query('CREATE DATABASE IF NOT EXISTS painting_gallery', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database painting_gallery ready');
    
    // Use the database
    db.query('USE painting_gallery', (err) => {
      if (err) {
        console.error('Error selecting database:', err);
        return;
      }
      console.log('Using painting_gallery database');
      
      // Create blog_posts table if it doesn't exist
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS blog_posts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
      `;
      
      db.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating blog_posts table:', err);
        } else {
          console.log('blog_posts table ready');
        }
      });
    });
  });
});

// Routes
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM blog_posts ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({ error: 'Error fetching posts' });
    }
    res.json(results);
  });
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  db.query(
    'INSERT INTO blog_posts (title, content) VALUES (?, ?)',
    [title, content],
    (err, result) => {
      if (err) {
        console.error('Error inserting post:', err);
        return res.status(500).json({ error: 'Error inserting post' });
      }

      // Return the newly created post
      const newPost = {
        id: result.insertId,
        title,
        content,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      res.status(201).json(newPost);
    }
  );
});

// Delete post route
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  
  db.query('DELETE FROM blog_posts WHERE id = ?', [postId], (err, result) => {
    if (err) {
      console.error('Error deleting post:', err);
      return res.status(500).json({ error: 'Error deleting post' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json({ message: 'Post deleted successfully' });
  });
});

// Update post route
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  db.query(
    'UPDATE blog_posts SET title = ?, content = ? WHERE id = ?',
    [title, content, postId],
    (err, result) => {
      if (err) {
        console.error('Error updating post:', err);
        return res.status(500).json({ error: 'Error updating post' });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      res.json({ id: postId, title, content, updated_at: new Date() });
    }
  );
});

// Admin route to view database contents
app.get('/admin/database', (req, res) => {
  // Get all tables in the database
  db.query('SHOW TABLES', (err, tables) => {
    if (err) {
      return res.status(500).send(`Database error: ${err.message}`);
    }
    
    let result = '<h1>Database: painting_gallery</h1>';
    result += '<style>body{font-family:Arial;margin:20px;} table{border-collapse:collapse;width:100%;margin:20px 0;} th,td{border:1px solid #ddd;padding:8px;text-align:left;} th{background-color:#f2f2f2;}</style>';
    
    let tablesProcessed = 0;
    
    if (tables.length === 0) {
      result += '<p>No tables found in the database.</p>';
      return res.send(result);
    }
    
    tables.forEach((table, index) => {
      const tableName = Object.values(table)[0];
      result += `<h2>Table: ${tableName}</h2>`;
      
      // Get table structure
      db.query(`DESCRIBE ${tableName}`, (err, structure) => {
        if (err) {
          result += `<p>Error getting structure: ${err.message}</p>`;
        } else {
          result += '<h3>Structure:</h3><table><tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th></tr>';
          structure.forEach(field => {
            result += `<tr><td>${field.Field}</td><td>${field.Type}</td><td>${field.Null}</td><td>${field.Key}</td><td>${field.Default || 'NULL'}</td></tr>`;
          });
          result += '</table>';
        }
        
        // Get table data
        db.query(`SELECT * FROM ${tableName}`, (err, data) => {
          if (err) {
            result += `<p>Error getting data: ${err.message}</p>`;
          } else {
            result += `<h3>Data (${data.length} records):</h3>`;
            
            if (data.length > 0) {
              result += '<table><tr>';
              Object.keys(data[0]).forEach(key => {
                result += `<th>${key}</th>`;
              });
              result += '</tr>';
              
              data.forEach(row => {
                result += '<tr>';
                Object.values(row).forEach(value => {
                  result += `<td>${value || 'NULL'}</td>`;
                });
                result += '</tr>';
              });
              result += '</table>';
            } else {
              result += '<p>No data in this table.</p>';
            }
          }
          
          tablesProcessed++;
          if (tablesProcessed === tables.length) {
            res.send(result);
          }
        });
      });
    });
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`View database at: http://localhost:${PORT}/admin/database`);
});
