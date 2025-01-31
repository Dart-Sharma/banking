// src/redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create a slice of state for user data
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;

// Async thunk action for fetching user
export const fetchUser = (userId) => async (dispatch) => {
  try {
    dispatch(fetchUserStart());
    const response = await fetch(`https://api.example.com/user/${userId}`);
    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.toString()));
  }
};
