import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export const language = languageSlice.reducer;
