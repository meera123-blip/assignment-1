import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './LocationSlice';

export default configureStore({
  reducer: {
    location: locationSlice,
  },
});
