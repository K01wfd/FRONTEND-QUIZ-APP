import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuiz: '',
  mainQuizStarted: false,
  questionNumber: 1,
  currentAnswer: '',
  correctAnswers: [],
  wrongAnswer: [],
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
    setQuestionNumber: (state) => {
      state.questionNumber++;
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = [...state.correctAnswers, action.payload];
    },
    setWrongAnswers: (state, action) => {
      state.wrongAnswer = [...state.wrongAnswer, action.payload];
    },
    setCurrentAnswer: (state, action) => {
      state.currentAnswer = action.payload;
    },
  },
});

export const {
  setCurrentQuiz,
  setMainQuizStarted,
  setQuestionNumber,
  setCorrectAnswers,
  setWrongAnswers,
} = quizSlice.actions;
export default quizSlice.reducer;
