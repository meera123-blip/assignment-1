import React from 'react';
import { useDispatch } from 'react-redux';
import { clearLocationData } from '../utils/LocationSlice';
import Shimmer from './Shimmer';

const ShowDetails = ({ locationInfo, onClearLocation, loading }) => {
  const dispatch = useDispatch();

  if (loading) {
    // Placeholder UI or loading indicator
    return <Shimmer/>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
    {locationInfo ? (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-xl font-bold mb-4">Country: {locationInfo.country}</p>
        {locationInfo.places.map((place, index) => (
          <div key={index} className="mb-4">
            <p className="text-md font-medium">State: {place.state}</p>
            <p className="text-md font-medium">Place Name: {place['place name']}</p>
          </div>
        ))}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded"
          onClick={() => dispatch(clearLocationData())}
        >
          Clear
        </button>
      </div>
    ) : (
      <p className="text-center text-gray-400 font-semibold mt-4">No location information available</p>
    )}
  </div>
  );
};

export default ShowDetails;
