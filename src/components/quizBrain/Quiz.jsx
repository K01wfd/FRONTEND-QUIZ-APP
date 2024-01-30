import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuestionNum,
  setCorrectAnswers,
  setCurrentAnswer,
  setSubmitPhase,
  setMainQuizStarted,
  setQuestionNumTo,
  setCurrentQuiz,
  emptyCorrectAnswers,
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
const { quizzes } = quizData;

function Quiz({ currentQuiz }) {
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const currentAnswer = useSelector((state) => state.quiz.currentAnswer);
  const submitPhase = useSelector((state) => state.quiz.submitPhase);
  const quizStarted = useSelector((state) => state.quiz.mainQuizStarted);
  const dispatch = useDispatch();
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const { questionLength } = getQuestionsLength(quizzes, currentQuiz);
  const {
    correctAnswerRef,
    incorrectAnswerRef,
    correctAnswer,
    missedCorrectRef,
  } = checkAnswers(currentQuiz, currentAnswer, questionNumber);

  const handleOptionSelect = (event) => {
    const dataValue = event.target.value;
    setIsOptionSelected(true); // option selected true
    dispatch(setCurrentAnswer(dataValue)); // set current answer state
    clearOptionStyles(); // clear prev hilighted options
    highlightElement(event.target, '#A729F5', 'active'); // highlight option selected
  };

  const handleQuestionSubmit = () => {
    // if answer selected
    if (currentAnswer) {
      dispatch(setSubmitPhase(true)); // set currently in submit state to true
      if (correctAnswer) {
        dispatch(setCorrectAnswers(correctAnswer)); // push to correct answers array
        highlightElement(correctAnswerRef, '#26d782', 'correct');
      } else {
        highlightElement(missedCorrectRef, '#26d782', 'missedCorrect');
        highlightElement(incorrectAnswerRef, '#ee5454', 'incorrect');
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
    dispatch(setMainQuizStarted(false));
    dispatch(setCurrentQuiz(''));
    dispatch(setQuestionNumTo(0));
    dispatch(setSubmitPhase(true));
    dispatch(emptyCorrectAnswers([]));
  };
  console.log(quizStarted);
  return (
    <Section>
      <p className='eyeBrow'>Question {questionNumber + 1} of 10</p>

      {quizzes.map(
        (quiz) =>
          quiz.title === currentQuiz && (
            // quizBody
            <QuizQuestion key={quiz.title}>
              <h2>{quiz.questions[questionNumber].question}</h2>
              <ProgreesBar
                role='progressbar'
                $width={(questionNumber + 1) * 10}
              >
                <div></div>
              </ProgreesBar>
              {/* Options list */}
              <QuizOptions
                quiz={quiz}
                currentAnswer={currentAnswer}
                onOptionChange={handleOptionSelect}
                questionNumber={questionNumber}
              />
              {/* Option list end */}
            </QuizQuestion>
            // quiz body end
          )
      )}
      {submitPhase && (
        <button className='btn' onClick={handleQuestionSubmit}>
          Submit answer
        </button>
      )}
      {!submitPhase && questionNumber < 9 && (
        <button className='btn' onClick={handleNextQuestion}>
          Next question
        </button>
      )}
      {questionNumber === 9 && !submitPhase && (
        <button className='btn' onClick={handleFinish}>
          Finish
        </button>
      )}
      {!isOptionSelected && (
        <ErrorDisplay message={'Please select an answer'} />
      )}
    </Section>
  );
}
const Section = styled.section`
  margin-block: 3.2rem;
  & p {
    color: var(--color-400);
    font-weight: 500;
  }
`;
const QuizQuestion = styled.div`
  margin-bottom: 3rem;
  & h2 {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  & h2:focus {
    outline: 2px solid var(--purple);
  }
`;
const ProgreesBar = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 6rem;
  background-color: var(--color-100);
  border-radius: 999px;
  display: grid;
  align-items: center;
  padding-inline: 0.6rem;
  & div {
    height: 8px;
    background-color: var(--purple);
    width: ${({ $width }) => $width + '%'};
    border-radius: 100px;
    transition: width 0.2s ease;
  }
`;

export default Quiz;
