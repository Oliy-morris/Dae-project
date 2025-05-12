import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate user creation
    console.log("User signed up:", formData);
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {submitted ? (
        <p>🎉 Welcome, {formData.name}! You’ve successfully signed up.</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
}
