import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
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
