import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authOperations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, state => {
        state.token = '';
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
