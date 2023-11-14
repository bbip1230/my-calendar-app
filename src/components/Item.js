import React from 'react';
import './Item.css'; // Assuming you have styling in Item.css

const Item = ({ title, image }) => {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Item;
