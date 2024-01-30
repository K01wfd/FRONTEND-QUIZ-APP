import { useDispatch, useSelector } from 'react-redux';
import {
  setQuestionNumber,
  setCorrectAnswers,
  setCurrentAnswer,
  setWillCheckAnswer,
} from '../../features/quizSlic';
import quizData from '../../data.json';
import { styled } from 'styled-components';
import { getQuestionsLength, checkAnswers } from '../../utils/utils';
import {
  updateOptionStyles,
  clearOptionStyles,
  updateCorrectAnswerStyles,
} from '../../utils/dealingWithOptions';
import ErrorDisplay from '../ErrorDisplay';
import { useState } from 'react';
import QuizOptions from './QuizOptions';

const { quizzes } = quizData;

function Quiz({ currentQuiz }) {
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const { questionLength, activeQuiz } = getQuestionsLength(
    quizzes,
    currentQuiz
  );
  const currentAnswer = useSelector((state) => state.quiz.currentAnswer);
  const willCheckAnswer = useSelector((state) => state.quiz.willCheckAnswer);
  const dispatch = useDispatch();
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
    updateOptionStyles(event, '#A729F5'); // highlight option selected
  };

  const handleQuestionSubmit = () => {
    // if answer selected
    if (currentAnswer) {
      dispatch(setWillCheckAnswer(true)); // set is checking answer to true
      if (correctAnswer) {
        dispatch(setCorrectAnswers(correctAnswer)); // push to correct answers array
        updateCorrectAnswerStyles(correctAnswerRef);
      }
      dispatch(setWillCheckAnswer(false)); // set is checking answer to false
    } else {
      setIsOptionSelected(false);
    }
  };
  // onNext question event
  const handleNextQuestion = () => {
    dispatch(setWillCheckAnswer(true));
    dispatch(setCurrentAnswer(''));
    clearOptionStyles();
    if (questionNumber < questionLength - 1) {
      dispatch(setQuestionNumber());
    }
  };

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
      {willCheckAnswer && (
        <button className='btn' onClick={handleQuestionSubmit}>
          Submit answer
        </button>
      )}
      {!willCheckAnswer && (
        <button className='btn' onClick={handleNextQuestion}>
          Next question
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
