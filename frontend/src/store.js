import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/UserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});
