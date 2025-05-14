import React, { useState, useEffect } from 'react';
import './PaintingCard.css';

export default function PaintingCard({ title, artist, price, image }) {
  const [viewTime, setViewTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setViewTime((v) => v + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Price: ${price}</p>
      <p>Viewing for: {viewTime}s</p>
      <button onClick={() => alert('Liked!')}>❤️ Like</button>
      <button onClick={() => alert('Saved for later!')}>💾 Save</button>
      <button onClick={() => alert('Buying now!')}>🛒 Buy</button>
    </div>
  );
}

