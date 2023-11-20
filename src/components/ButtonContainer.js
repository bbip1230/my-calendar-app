import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <button className="new-button"> View Items</button>
      <button className="new-button"> Add Item</button>
      <button className="new-button">Delete Item</button>
    </div>
  );
};

export default ButtonContainer;
