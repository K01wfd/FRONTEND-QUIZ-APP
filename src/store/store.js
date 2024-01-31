import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizSlic';
import colorModeReducer from '../features/colorModeSlice';

const reducer = {
  quiz: quizReducer,
  colorMode: colorModeReducer,
};
const store = configureStore({
  reducer,
});
export default store;
