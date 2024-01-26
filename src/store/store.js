import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizSlic';
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
