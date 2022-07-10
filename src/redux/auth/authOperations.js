import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectionsAPI from '../../services/connectionsAPI';

const token = connectionsAPI.token;

export const logIn = createAsyncThunk(
  'auth/login',
  async userData => {
    try {
      const {data} = await connectionsAPI.fetchLogIn(userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await connectionsAPI.fetchLogOut();
      token.unset();
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);
