import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectionsAPI from '../../services/connectionsAPI';

const token = connectionsAPI.token;

export const googleAuth = createAsyncThunk(
  'auth/google',
  async () => {
    try {
      const { data } =
        await connectionsAPI.fetchGoogleAuth();
      token.set(data.token);
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async userData => {
    try {
      const { data } = await connectionsAPI.fetchRegister(
        userData
      );

      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async userData => {
    try {
      const { data } = await connectionsAPI.fetchLogIn(
        userData
      );
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

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await connectionsAPI.fetchUsers();
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);
