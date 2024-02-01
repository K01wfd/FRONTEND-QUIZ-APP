import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuestionNum,
  setCorrectAnswers,
  setCurrentAnswer,
  setSubmitPhase,
  setQuizStarted,
  setQuestionNumTo,
  setQuizFinished,
} from '../../features/quizSlic';
import quizData from '../../data.json';
import { styled } from 'styled-components';
import { getQuestionsLength, checkAnswers } from '../../utils/utils';
import {
  clearOptionStyles,
  activateOrDisableOptions,
  highlightElement,
} from '../../utils/dealingWithOptions';
import ErrorDisplay from '../ErrorDisplay';
import { useState } from 'react';
import QuizOptions from './QuizOptions';
import ButtonsGroup from './ButtonsGroup';
import ProgressBar from './ProgressBar';
const { quizzes } = quizData;
const ACTIVE_COLOR = '#A729F5';
const CORRECT_COLOR = '#26d782';
const INCORRECT_COLOR = '#ee5454';

function Quiz() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const currentAnswer = useSelector((state) => state.quiz.currentAnswer);
  const submitPhase = useSelector((state) => state.quiz.submitPhase);
  const dispatch = useDispatch();
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const { questionLength } = getQuestionsLength(quizzes, currentQuiz);
  const {
    correctAnswerRef,
    incorrectAnswerRef,
    correctAnswer,
    missedCorrectRef,
  } = checkAnswers(currentQuiz, currentAnswer, questionNumber);
  const MAX_QUESTION_LENGTH = questionLength - 1;

  const handleOptionSelect = (event) => {
    const dataValue = event.target.value;
    setIsOptionSelected(true); // option selected true
    dispatch(setCurrentAnswer(dataValue)); // set current answer state
    clearOptionStyles(); // clear prev hilighted options
    highlightElement(event.target, ACTIVE_COLOR, 'active'); // highlight option selected
  };
  const handleQuestionSubmit = () => {
    // if answer selected
    if (currentAnswer) {
      dispatch(setSubmitPhase(true)); // set currently in submit state to true
      if (correctAnswer) {
        dispatch(setCorrectAnswers(correctAnswer)); // push to correct answers array
        highlightElement(correctAnswerRef, CORRECT_COLOR, 'correct');
      } else {
        highlightElement(missedCorrectRef, CORRECT_COLOR, 'missedCorrect');
        highlightElement(incorrectAnswerRef, INCORRECT_COLOR, 'incorrect');
      }
      dispatch(setSubmitPhase(false)); // set currently in submit state to false
      activateOrDisableOptions('disable');
      dispatch(setCurrentAnswer(''));
    } else {
      setIsOptionSelected(false);
    }
  };
  // onNext question event
  const handleNextQuestion = () => {
    activateOrDisableOptions('activate');
    dispatch(setSubmitPhase(true));
    clearOptionStyles();
    if (questionNumber < questionLength - 1) {
      dispatch(increaseQuestionNum());
    }
  };
  const handleFinish = () => {
    dispatch(setQuizStarted(false));
    dispatch(setQuestionNumTo(0));
    dispatch(setSubmitPhase(true));
    dispatch(setQuizFinished(true));
  };
  return (
    <Section>
      {quizzes.map(
        (quiz) =>
          quiz.title === currentQuiz && (
            <div className='quizHeader' key={quiz.title + 'header'}>
              <p className='eyeBrow'>Question {questionNumber + 1} of 10</p>
              <h2>{quiz.questions[questionNumber].question}</h2>
              <ProgressBar questionNumber={questionNumber} />
            </div>
          )
      )}
      {quizzes.map(
        (quiz) =>
          quiz.title === currentQuiz && (
            // quizBody
            <QuizBody key={quiz.title}>
              {/* Options list */}
              <QuizOptions
                quiz={quiz}
                currentAnswer={currentAnswer}
                onOptionChange={handleOptionSelect}
                questionNumber={questionNumber}
              />
              {/* Option list end */}
            </QuizBody>
            // quiz body end
          )
      )}
      <ButtonsGroup
        handleQuestionSubmit={handleQuestionSubmit}
        handleNextQuestion={handleNextQuestion}
        handleFinish={handleFinish}
        maxQuestionLength={MAX_QUESTION_LENGTH}
        questionNumber={questionNumber}
        submitPhase={submitPhase}
      />
      {!isOptionSelected && (
        <ErrorDisplay message={'Please select an answer'} />
      )}
    </Section>
  );
}
const Section = styled.section`
  padding-bottom: 2rem;
  margin-top: 3.2rem;
  & .eyeBrow {
    color: var(--color-400);
    font-weight: 500;
    margin-bottom: 2.7rem;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 3rem;
    margin-top: 8rem;
    display: grid;
    column-gap: 13rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    & .eyeBrow {
      margin-bottom: 2.7rem;
    }
    & .quizHeader {
      grid-column: 1/2;
    }
    & button {
      grid-column: 2/-1;
    }
  }
`;
const QuizBody = styled.div`
  margin-bottom: 3rem;
  & h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Quiz;
