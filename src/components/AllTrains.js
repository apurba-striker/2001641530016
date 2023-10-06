
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../utils/api';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    getAllTrains()
      .then((data) => {
        setTrains(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    
      <h1>All Trains</h1>
     
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>{train.trainName}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
