import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizSlic';
import colorModeReducer from '../features/colorModeSlice';
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    colorMode: colorModeReducer,
  },
});
