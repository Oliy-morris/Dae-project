import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch posts from backend
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/posts');
      setPosts(response.data);
      setError('');
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setError('Failed to load posts. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      setLoading(true);
      if (editingPost) {
        // Update existing post
        const response = await axios.put(`http://localhost:3001/posts/${editingPost.id}`, formData);
        setPosts(posts.map(post => 
          post.id === editingPost.id ? response.data : post
        ));
        setEditingPost(null);
      } else {
        // Create new post
        const response = await axios.post('http://localhost:3001/posts', formData);
        setPosts([response.data, ...posts]);
      }
      setFormData({ title: '', content: '' });
      setError('');
    } catch (err) {
      console.error('Failed to save post:', err);
      setError('Failed to save post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({ title: post.title, content: post.content });
  };

  // Handle delete
  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      setLoading(true);
      await axios.delete(`http://localhost:3001/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
      setError('');
    } catch (err) {
      console.error('Failed to delete post:', err);
      setError('Failed to delete post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingPost(null);
    setFormData({ title: '', content: '' });
  };

  return (
    <div className="blog-container">
      <h2>📝 My Blog Posts (Admin Only)</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          disabled={loading}
        />
        <textarea
          name="content"
          placeholder="Post Content"
          value={formData.content}
          onChange={handleChange}
          disabled={loading}
          rows="6"
        />
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post')}
          </button>
          {editingPost && (
            <button type="button" onClick={handleCancelEdit} disabled={loading}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="posts">
        {loading && posts.length === 0 ? (
          <div className="loading">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="no-posts">No blog posts yet. Create your first post!</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-meta">
                <small>
                  Created: {new Date(post.created_at).toLocaleDateString()}
                  {post.updated_at !== post.created_at && (
                    <span> • Updated: {new Date(post.updated_at).toLocaleDateString()}</span>
                  )}
                </small>
              </div>
              <div className="post-actions">
                <button 
                  onClick={() => handleEdit(post)} 
                  disabled={loading}
                  className="edit-btn"
                >
                  ✏️ Edit
                </button>
                <button 
                  onClick={() => handleDelete(post.id)} 
                  disabled={loading}
                  className="delete-btn"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
