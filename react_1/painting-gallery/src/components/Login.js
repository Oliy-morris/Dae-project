import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple mock login validation
    if (username === 'user' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Try user / 1234');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="login-success">
        <h2>Welcome back, {username}!</h2>
        <p>Enjoy browsing the paintings 🎨</p>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

