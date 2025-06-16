// components/AgeGate.jsx
import React from 'react';

const AgeGate = ({ onConfirm }) => {
  const handleConfirm = () => {
    localStorage.setItem('isAdult', 'true');
    onConfirm(); // notifica al componente principal
  };

  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h2>¿Eres mayor de 18 años?</h2>
      <button onClick={handleConfirm} style={{ padding: '12px 24px', fontSize: '16px' }}>
        Sí, tengo 18 años
      </button>
    </div>
  );
};

export default AgeGate;
