import { createSlice } from '@reduxjs/toolkit';
let isDark = false;
const theme = localStorage.getItem('color');
if (theme === 'dark') {
  isDark = true;
} else {
  isDark = false;
}
const initialState = {
  isDark,
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.isDark = action.payload;
    },
  },
});
export const { setColorMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
