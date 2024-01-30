import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizStarted: false,
  currentQuiz: '',
  questionNumber: 0,
  currentAnswer: '',
  submitPhase: true,
  correctAnswers: [],
  quizFinished: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizStarted: (state, action) => {
      state.quizStarted = action.payload;
    },
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
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
    setQuizFinished: (state, action) => {
      state.quizFinished = action.payload;
    },
  },
});

export const {
  setCurrentQuiz,
  setQuizStarted,
  increaseQuestionNum,
  setQuestionNumTo,
  setCorrectAnswers,
  setCurrentAnswer,
  setSubmitPhase,
  emptyCorrectAnswers,
  setQuizFinished,
} = quizSlice.actions;
export default quizSlice.reducer;
