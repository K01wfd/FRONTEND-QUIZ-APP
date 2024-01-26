import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.color = action.payload;
    },
  },
});
export const { setColorMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
