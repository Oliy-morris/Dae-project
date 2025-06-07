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
      title: 'night time',
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
    {
      id: 7,
      title: 'last dawn',
      artist: 'Oliver M-Kaelin',
      price: 280,
      image: '/images/last dawn.jpg',
    },
    {
      id: 8,
      title: 'sorry-street',
      artist: 'Oliver M-Kaelin',
      price: 270,
      image: '/images/sorry-street.jpg',
    },









  ];

  return (
<div className="painting-grid">
  {paintings.map((painting) => (
    <PaintingCard
      key={painting.id}
      title={painting.title}
      artist={painting.artist}
      price={painting.price}
      image={painting.image}
    />
  ))}
</div>

  );
}
