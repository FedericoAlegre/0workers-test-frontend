import React from 'react';
import '../styles/Modal.css';

const Modal = ({ show, onClose, number }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Número Generado</h2>
        <p>{number}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
