import React, { useEffect, useState } from 'react';
import '../styles/Roulette.css';

const colors = ['#ffadad', '#ffebad', '#d0ffb5', '#c1e1c1', '#a0d4f5', '#a7c4e2', '#d6a4a4', '#f7c6c7', '#f8b5c2', '#e0c5f0'];

const Roulette = ({ randomNumber, isSpinning }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (randomNumber && isSpinning) {
      const anglePerNumber = 360 / 100; 
      const randomRotation = anglePerNumber * (100 - randomNumber ); 
      const spins = 360; 
      const finalRotation = spins + randomRotation;
      setRotation(finalRotation); 
    }
  }, [randomNumber, isSpinning]);

  return (
    <div className="roulette-conteiner">
    <div className="marker"></div>
    <svg
      viewBox="0 0 200 200"
      width="300"
      height="300"
      className={`roulette-wheel ${isSpinning ? 'spinning' : ''}`}
      style={{ transform: `rotate(${rotation}deg)` }} 
    >
      <circle cx="100" cy="100" r="90" fill="black" stroke="black" strokeWidth="2" />
      {Array.from({ length: 100 }, (_, i) => (
        <g key={i} transform={`rotate(${(360 / 200) * i}, 100, 100)`}>
        <polygon
          points="100,100 92,21 98,21"
          fill={colors[i % colors.length]}
          transform={`rotate(${(360 / 200) * i}, 100, 100)`}
        />
        <text
          x="100"
          y="20"
          fill="white"
          transform={`rotate(${(360 / 200) * i}, 100, 100)`}
          style={{ fontSize: '3px', textAnchor: 'middle' }}
        >
          {i + 1}
        </text>
      </g>
      ))}
    </svg>
    
    </div>

  );
};

export default Roulette;



