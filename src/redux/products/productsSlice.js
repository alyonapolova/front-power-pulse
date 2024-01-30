import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

const initialState = {
  isLoading: false,
  products: null,
};

export const productSlice = createSlice({
  name: 'prod',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      });
  },
});

export const productsReducer = productSlice.reducer;
