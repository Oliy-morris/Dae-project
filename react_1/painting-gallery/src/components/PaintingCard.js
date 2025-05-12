import React, { useState, useEffect } from 'react';
import './PaintingCard.css';

export default function PaintingCard({ painting }) {
  const [viewTime, setViewTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setViewTime(v => v + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <img src={painting.image} alt={painting.title} />
      <h3>{painting.title}</h3>
      <p>${painting.price}</p>
      <p>Viewing for: {viewTime}s</p>
      <button onClick={() => alert("Liked!")}>❤️ Like</button>
      <button onClick={() => alert("Saved for later!")}>💾 Save</button>
      <button onClick={() => alert("Buying now!")}>🛒 Buy</button>
    </div>
  );
}
