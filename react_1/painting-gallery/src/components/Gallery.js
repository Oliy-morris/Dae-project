import React from 'react';
import PaintingCard from './PaintingCard';

export default function Gallery() {
  const paintings = [
    {
      id: 1,
      title: 'archives',
      artist: 'Ollie Morris',
      price: 150,
      image: '/images/Painting-1.jpg',
    },
    {
      id: 2,
      title: 'last leaves',
      artist: 'Ollie Morris',
      price: 200,
      image: '/images/Legos.jpg',
    },
  ];

  return (
    <div>
      <h2>🎨 Painting Gallery</h2>
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
