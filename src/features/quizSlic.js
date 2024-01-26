import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuiz: '',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,

  reducers: {
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
  },
});

export const { setCurrentQuiz } = quizSlice.actions;
export default quizSlice.reducer;
