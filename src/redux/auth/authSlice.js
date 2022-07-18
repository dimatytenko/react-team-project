import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLogError: null,
  isRegError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.googleAuth.fulfilled]: (
      state,
      { payload }
    ) => {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isError = null;
    },

    [authOperations.register.pending](state, _) {
      state.isRegError = null;
    },
    [authOperations.register.fulfilled](
      state,
      { payload }
    ) {
      state.user = payload;
      state.isRegError = null;
    },
    [authOperations.register.rejected](state, _) {
      state.isRegError = true;
    },

    [authOperations.logIn.pending](state, _) {
      state.isLogError = null;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLogError = null;
    },
    [authOperations.logIn.rejected](state, _) {
      state.isLogError = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](
      state,
      action
    ) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const auth = authSlice.reducer;
