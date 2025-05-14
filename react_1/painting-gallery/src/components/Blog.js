import React, { useState, useEffect } from 'react';
import './Blog.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  // ✅ Load saved blog posts on first render
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // ✅ Save blog posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("Please fill in both fields.");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = formData;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts([...posts, formData]);
    }

    setFormData({ title: '', content: '' });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(posts[index]);
  };

  const handleDelete = (index) => {
    const updated = posts.filter((_, i) => i !== index);
    setPosts(updated);
  };

  return (
    <div className="blog-container">
      <h2>📝 My Blog Posts (Admin Only)</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Post Content"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Post'}</button>
      </form>

      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleEdit(index)}>✏️ Edit</button>
            <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

