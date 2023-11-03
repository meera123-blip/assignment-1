import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import ShowDetails from './components/ShowDetails';
import { clearLocationData, setLocationError, setLocationLoading, setLocationData } from './utils/LocationSlice';
import { IsOnline } from './utils/IsOnline';
import Offline from './utils/Offline';

const App = () => {
  const status = IsOnline();
  const dispatch = useDispatch();
  const locationInfo = useSelector((state) => state.location.data);
  const errorMessage = useSelector((state) => state.location.error);
  const locationLoading = useSelector((state) => state.location.loading);

  const handleFetchLocation = async (postalCode) => {
    dispatch(setLocationLoading());
    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      dispatch(setLocationData(data));
      dispatch(setLocationError(''));
    } catch (error) {
      dispatch(setLocationError(error.message));
    }
  };

  const handleClearLocation = () => {
    dispatch(clearLocationData());
  };

  return (!status) ? <Offline/> : (
    <div>
      <h1 className=' font-bold text-xl text-center mt-2 text-3xl font-serif'>Location Finder App</h1>
      <Form onFetchLocation={handleFetchLocation} errorMessage={errorMessage} />
      <ShowDetails locationInfo={locationInfo} onClearLocation={handleClearLocation} loading={locationLoading} />
    </div>
  );
};

export default App;
