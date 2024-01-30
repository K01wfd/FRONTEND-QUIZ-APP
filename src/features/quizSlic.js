import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainQuizStarted: false,
  currentQuiz: '',
  questionNumber: 0,
  currentAnswer: '',
  submitPhase: true,
  correctAnswers: [],
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
    increaseQuestionNum: (state) => {
      state.questionNumber++;
    },
    setQuestionNumTo: (state, action) => {
      state.questionNumber = action.payload;
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = [...state.correctAnswers, action.payload];
    },
    emptyCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },
    setCurrentAnswer: (state, action) => {
      state.currentAnswer = action.payload;
    },
    setSubmitPhase: (state, action) => {
      state.submitPhase = action.payload;
    },
  },
});

export const {
  setCurrentQuiz,
  setMainQuizStarted,
  increaseQuestionNum,
  setQuestionNumTo,
  setCorrectAnswers,
  setCurrentAnswer,
  setSubmitPhase,
  emptyCorrectAnswers,
} = quizSlice.actions;
export default quizSlice.reducer;
