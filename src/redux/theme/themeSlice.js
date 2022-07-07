import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const theme = themeSlice.reducer;
