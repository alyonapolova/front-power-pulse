import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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

const persistConfig = {
  key: 'root',
  storage,
};

//whitelist:[''], blacklist:['']

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { login, logout } = authSlice.actions;
