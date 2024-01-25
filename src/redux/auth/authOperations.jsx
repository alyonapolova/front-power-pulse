import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://back-power-pulse.onrender.com';

export const register = createAsyncThunk('auth/register', async info => {
  try {
    const { data } = await axios.post('/users/register', info);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
