import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

/**
 * Configures the redux store for the application.
 * 
 * @returns store 
 */
export function makeStore() {
  return configureStore({
    reducer: {
        user: userSlice
    }
  });
};

const store = makeStore()

export default store