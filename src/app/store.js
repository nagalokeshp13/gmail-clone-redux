/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
