import React, { useState } from 'react';
import './App.css';
import Roulette from './components/Roulette'; 
import Modal from './components/Modal';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false); 
  const [showModal, setShowModal] = useState(false);

  const fetchRandomNumber = async () => {
    try {
      setIsSpinning(true); 
      const response = await fetch('http://localhost:3000/random', { method: 'POST' });
      const data = await response.json();
      setRandomNumber(data.value);
      setTimeout(() => {
        setIsSpinning(false);
        setShowModal(true);      
      }
      , 4000);
      
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };
  const closeModal = () => {
    setShowModal(false); 
  };
  return (
    <div className="App">
      <h1 className=''>Ruleta de Números Aleatorios</h1>
      <Roulette randomNumber={randomNumber} isSpinning={isSpinning} />
      <button className='Roulette_button' disabled={isSpinning} onClick={fetchRandomNumber}>Girar Ruleta</button> 
      <Modal show={showModal} onClose={closeModal} number={randomNumber} />
    </div>
  );
}

export default App;

