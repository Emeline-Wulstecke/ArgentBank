import { configureStore } from '@reduxjs/toolkit';
import authreducer from './reducers/auth.reducer';

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});