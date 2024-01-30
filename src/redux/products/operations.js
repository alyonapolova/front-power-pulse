import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://back-power-pulse.onrender.com';

export const getAllProducts = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { products } = await axios.get('/products');
      return products;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
