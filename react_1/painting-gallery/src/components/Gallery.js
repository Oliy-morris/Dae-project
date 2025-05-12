import React from 'react';
import PaintingCard from './PaintingCard';

const paintings = [
  { id: 1, title: 'Sunset Bliss', price: 120, image: '/sunset.jpg' },
  { id: 2, title: 'Mountain Dream', price: 95, image: '/mountain.jpg' },
];

export default function Gallery() {
  return (
    <div>
      <h2>Painting Gallery</h2>
      <div className="gallery">
        {paintings.map(p => <PaintingCard key={p.id} painting={p} />)}
      </div>
    </div>
  );
}
