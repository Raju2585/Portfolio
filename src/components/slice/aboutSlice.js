// src/store/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice of state
const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    aboutClicked: false,
  },
  reducers: {
    setAboutClicked: (state) => {
        state.aboutClicked = !state.aboutClicked;
    },
  },
});

export const { setAboutClicked } = aboutSlice.actions;
export default aboutSlice.reducer;
