import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
