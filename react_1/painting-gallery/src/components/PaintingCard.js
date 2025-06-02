import React, { useState, useEffect } from 'react';
import './PaintingCard.css';

export default function PaintingCard({ title, artist, price, image }) {
  const [viewTime, setViewTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setViewTime((v) => v + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = () => alert('Liked!');
  const handleSave = () => alert('Saved for later!');
  const handleBuy = () => alert('Buying now!');

  return (
    <div className="card-grid">
      {}
      <img src={image} alt={`Painting titled ${title}`} />
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Price: ${price}</p>
      <p>Viewing for: {viewTime}s</p>
      <button onClick={handleLike} aria-label="Like this painting">❤️ Like</button>
      <button onClick={handleSave} aria-label="Save this painting">💾 Save</button>
      <button onClick={handleBuy} aria-label="Buy this painting">🛒 Buy</button>
    </div>
  );
}

