/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';
import sidebarReducer from '../features/sidebarSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    sidebar: sidebarReducer,
  },
});
