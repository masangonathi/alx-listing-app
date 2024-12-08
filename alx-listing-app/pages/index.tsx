import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { MOCK_PROPERTY } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ALX Listing App</h1>
      <Card
        title={MOCK_PROPERTY.title}
        description={MOCK_PROPERTY.description}
        imageUrl={MOCK_PROPERTY.imageUrl}
      />
      <Button label="Book Now" onClick={() => alert('Booking...')} className="mt-4" />
    </div>
  );
};

export default HomePage;
