import { configureStore } from '@reduxjs/toolkit';
import fenceReducer from './fenceSlice';

const store = configureStore({
  reducer: {
    fences: fenceReducer,
  },
});

export default store;
