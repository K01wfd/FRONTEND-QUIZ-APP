import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuiz: '',
  mainQuizStarted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
    setMainQuizStarted: (state, action) => {
      state.mainQuizStarted = action.payload;
    },
  },
});

export const { setCurrentQuiz, setMainQuizStarted } = quizSlice.actions;
export default quizSlice.reducer;
