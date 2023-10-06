
import React, { useEffect, useState } from 'react';
import { getSingleTrain } from '../utils/api';

const SingleTrain = ({ match }) => {
  const [train, setTrain] = useState(null);
  const { trainNumber } = match.params;

  useEffect(() => {
    // Fetch single train data here
    getSingleTrain(trainNumber)
      .then((data) => {
        setTrain(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [trainNumber]);

  return (
    <div>
      <h1>Single Train</h1>
      {train ? (
        <div>
          <h2>{train.trainName}</h2>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;
