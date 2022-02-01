import { createSlice } from '@reduxjs/toolkit';

/**
 * Rq: It's safe to call mutating functions like Array.push()
 * or modify object fields like state.someField = someValue inside of
 * createSlice(), because it converts those mutations into safe immutable
 * updates internally using the Immer library, but don't try to mutate any
 * data outside of createSlice!
 */
export const slice = createSlice({
  name: 'user',
  initialState: {
    walletAddress: null,
    error: null,

    isAuthenticated: false,
    isLoading: false,
    // The following are used to store the user's session data
  },
  reducers: {
    setWalletAddress: (state, action) => {
        state.walletAddress = action.payload;
    },
    setIsAuthenticated: (state, action) => {
        state.isAuthenticated = action.payload;
    },
    setIsLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },

    // Clear the error
    clearError: (state) => {
        state.error = null;
    }
  },
});

export const {
  setWalletAddress,
  setIsAuthenticated,
  setIsLoading,
  setError,
  clearError,
} = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;
export const selectUser = state => state.user;

export default slice.reducer;
