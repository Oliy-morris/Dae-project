import React from 'react';
import PaintingCard from './PaintingCard';

const paintings = [
  {
    id: 1,
    title: 'Sunset Bliss',
    artist: 'Oliver M-Kaelin',
    price: 120,
    image: '/images/ ' // must exist in public/images/
  },

  {
    id: 2,
    title: 'Mountain Dream',
    artist: 'Oliver M-Kaelin',
    price: 95,
    image: '/images/Legos.jpg' // must exist in public/images/
  }
];

export default function Home() {
  return (
    <div>
      <h2>🎨 Most Recent</h2>
      <div className="gallery">
        {paintings.map((p) => (
          <PaintingCard
            key={p.id}
            title={p.title}
            artist={p.artist}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}
