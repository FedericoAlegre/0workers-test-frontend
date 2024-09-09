import React from 'react';
import '../styles/Roulette.css';

const Roulette = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const slices = numbers.map((number, index) => {
    const angle = (360 / numbers.length) * index;
    return (
      <g key={number} transform={`rotate(${angle})`}>
        <text
          x="50%" y="10%" transform={`rotate(${angle * -1}, 50, 50)`}
          style={{ fontSize: '8px', textAnchor: 'middle' }}
        >
          {number}
        </text>
      </g>
    );
  });

  return (
    <svg viewBox="0 0 100 100" width="300" height="300" className="roulette-wheel">
      <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="1" />
      {slices}
    </svg>
  );
};

export default Roulette;
