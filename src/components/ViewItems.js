import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import AuthenticatedHeader from './AuthenticatedHeader';
import Card from './Card';
import './ViewItems.css';

/**
 * Component for displaying the user's current items.
 *
 * @component
 */
const ViewItems = (props) => {
  // Dummy data
  const userItems = [
    {
      name: 'Dinner with friends',
      description: 'Meet with Bob and Bobby for dinner',
      date: '2023-11-20',
      image: '/dinner_image.jpg',
      tag: 'Social',
    },
    {
      name: 'Doctor appointment',
      description: 'Annual checkup',
      date: '2023-11-21',
      image: '/doctor_image.jpg',
      tag: 'Appointment',
    },
    {
      name: 'Vet visit',
      description: 'Take Bobble for yearlys',
      date: '2023-11-22',
      image: '/vet_image.jpg',
      tag: 'Reminder',
    },
  ];

  /**
   * Renders the MyItemsPage component.
   *
   * @returns {JSX.Element} JSX representation of the component.
   */
  return (
    <div>
      <AuthenticatedHeader />
      <div className="ViewItems">
        <h2>My Items</h2>
        <br />
        {userItems.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100px', height: 'auto' }} />
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <p>Tag: {item.tag}</p>
            </div>
            <div>
              <FaCalendar />
              <span>{item.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewItems;