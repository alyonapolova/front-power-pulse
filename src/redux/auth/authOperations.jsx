import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://back-power-pulse.onrender.com/users';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = token => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk('auth/register', async info => {
  try {
    const { data } = await axios.post('/register', info);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const verify = createAsyncThunk('auth/verify', async info => {
  try {
    const { data } = await axios.post('/verify', info);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async info => {
  try {
    const { data } = await axios.post('/login', info);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/logout');
    unsetToken();
  } catch (error) {
    console.log(error);
  }
});
