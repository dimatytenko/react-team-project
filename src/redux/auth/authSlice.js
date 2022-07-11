import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](
      state,
      { payload }
    ) {
      state.user = payload;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.pending](state, _) {
      state.isError = null;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isError = null;
    },
    [authOperations.logIn.rejected](state, _) {
      state.isError = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](
      state,
      action
    ) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const auth = authSlice.reducer;
