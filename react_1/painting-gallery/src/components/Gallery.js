import React from 'react';
import PaintingCard from './PaintingCard';

export default function PaintingCards () {
  const paintings = [
    {
      id: 1,
      title: 'archives',
      artist: 'Oliver M-Kaelin',
      price: 110,
      image: '/images/Painting-1.jpg',
    },
    {
      id: 2,
      title: 'last leaves',
      artist: 'Oliver M-Kaelins',
      price: 115,
      image: '/images/Legos.jpg',
    },
    {
      id: 3,
      title: '',
      artist: 'Oliver M-Kaelin',
      price: 150,
      image: '/images/Borrowed-time-2.jpg',
    },
    {
      id: 4,
      title: 'last dawn',
      artist: 'Oliver M-Kaelin',
      price: 200,
      image: '/images/un-sold-commission.jpg',
    },
    {
      id: 5,
      title: 'last dawn',
      artist: 'Oliver M-Kaelin',
      price: 200,
      image: '/images/night-time.jpg', 
    },
    {
      id: 6,
      title: 'last dawn',
      artist: 'Oliver M-Kaelin',
      price: 200,
      image: '/images/on-borrowed-time.jpg',
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
