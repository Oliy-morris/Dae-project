# Painting Gallery Setup Instructions

## Prerequisites
1. Make sure MAMP is running with MySQL on port 8889
2. Default MAMP MySQL credentials should be:
   - Username: root
   - Password: root

## Setup Steps

1. **Install Dependencies** (already done)
   ```bash
   npm install
   ```

2. **Start the Application**
   ```bash
   # Option 1: Start both server and client together
   npm run dev
   
   # Option 2: Start them separately
   # Terminal 1 - Start the server
   npm run server
   
   # Terminal 2 - Start the React app
   npm start
   ```

3. **Database Setup**
   The server will automatically:
   - Create the `painting_gallery` database if it doesn't exist
   - Create the `blog_posts` table with the correct schema
   - Connect to MySQL on port 8889

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Blog posts API: http://localhost:3001/posts

## Troubleshooting

### If blog posts aren't working:
1. Check that MAMP is running and MySQL is on port 8889
2. Check the server console for any database connection errors
3. Make sure both the server (port 3001) and client (port 3000) are running

### Common Issues:
- **"Failed to load posts"**: Server isn't running or database connection failed
- **CORS errors**: Make sure the server is running on port 3001
- **Database connection errors**: Verify MAMP is running with correct port (8889)

## Database Schema
The `blog_posts` table structure:
```sql
CREATE TABLE blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Features Fixed
- ✅ Server configuration for MAMP (port 8889)
- ✅ Automatic database and table creation
- ✅ Blog post creation, editing, and deletion
- ✅ Error handling and loading states
- ✅ Improved UI with better styling
- ✅ Proper MySQL connection with mysql2 driver
