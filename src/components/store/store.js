// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from '../slice/aboutSlice';

const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});

export default store;
