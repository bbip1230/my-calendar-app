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
      description: 'Description',
      date: '2023-11-20',
      image: 'public/dinner_image.jpg',
    },
    {
      name: 'Doctor appointment',
      description: 'Description',
      date: '2023-11-21',
      image: 'public/images/doctor.jpg',
    },
    {
      name: 'Vet visit',
      description: 'Description',
      date: '2023-11-22',
      image: 'public/images/vet.jpg',
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
        {userItems.map((item, index) => (
          <Card key={index}>
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <div>
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <FaCalendar />
                <span>{item.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewItems;