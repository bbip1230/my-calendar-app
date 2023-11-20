/*
 * Second view for my-calendar-app.
 * Allows user to add new item.
 */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // imported calendar API
import 'react-datepicker/dist/react-datepicker.css'; // Styling for calendar selection
import './AddItem.css';
import AuthenticatedHeader from './AuthenticatedHeader';

/**
 * Component for adding a new item with a form.
 * @component
 */
const AddItem = () => {
  /**
   * State to manage the new item data.
   * @type {Object}
   * @property {string} itemName - The name of the item.
   * @property {string} itemDescription - The description of the item.
   * @property {Date | null} selectedDate - The selected date for the item.
   */
  const [newItem, setNewItem] = useState({
    itemName: '',
    itemDescription: '',
    selectedDate: null,
  });

  /**
   * Handles changes in input fields.
   *
   * @param {Object} e - The event object.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  /**
   * Handles changes in the selected date.
   *
   * @param {Date} date - The selected date.
   */
  const handleDateChange = (date) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      selectedDate: date,
    }));
  };

  /**
   * Handles form submission.
   *
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Item Data:', newItem);

    setNewItem({
      itemName: '',
      itemDescription: '',
      selectedDate: null, // Reset selected date after submission
    });
  };

  /**
   * Renders the AddItem component.
   */
  return (
    <div>
      <AuthenticatedHeader />
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