import React, { useState } from 'react';
import Header from './Header';
import DatePicker from 'react-datepicker'; // imported calendar API
import 'react-datepicker/dist/react-datepicker.css'; // Select calendar styles
import './AddItem.css';

const AddItem = () => {
  const [newItem, setNewItem] = useState({
    itemName: '',
    itemDescription: '',
    selectedDate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      selectedDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Item Data:', newItem);
    setNewItem({
      itemName: '',
      itemDescription: '',
      selectedDate: null, // Reset selected date after submission
    });
  };

  return (
    <div>
      <Header />
      <div className="AddItem">
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              name="itemName"
              value={newItem.itemName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Item Description:
            <input
              type="text"
              name="itemDescription"
              value={newItem.itemDescription}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Select Date:
            <DatePicker
              selected={newItem.selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
            />
          </label>
          <br />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
