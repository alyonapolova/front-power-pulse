import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authOperations';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

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
        state.token = action.payload.token;
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

// const persistConfig = {
//   key: 'root',
//   storage,
// };

//whitelist:[''], blacklist:['']

// export const persistedReducer = persistReducer(
//   persistConfig,
//   authSlice.reducer
// );

export const authReducer = authSlice.reducer;
