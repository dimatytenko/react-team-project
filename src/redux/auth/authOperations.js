import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectionsAPI from '../../services/connectionsAPI';

const token = connectionsAPI.token;

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
