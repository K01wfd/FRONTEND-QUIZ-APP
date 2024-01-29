import { useDispatch, useSelector } from 'react-redux';
import {
  setQuestionNumber,
  setCorrectAnswers,
  setCurrentAnswer,
  setIsChecking,
} from '../../features/quizSlic';
import quizData from '../../data.json';
import { styled } from 'styled-components';
import {
  clearOptionStyles,
  getQuestionsLength,
  optionsLabels,
  updateOptionStyles,
} from '../../utils/utils';
import ErrorDisplay from '../ErrorDisplay';
import iconCorrect from '../../assets/images/icon-correct.svg';
import iconIncorrect from '../../assets/images/icon-incorrect.svg';
import { useState } from 'react';

const { quizzes } = quizData;

function Quiz({ currentQuiz }) {
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const isDark = useSelector((state) => state.colorMode.isDark);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const currentAnswer = useSelector((state) => state.quiz.currentAnswer);
  const isChecking = useSelector((state) => state.quiz.isChecking);
  const dispatch = useDispatch();

  //   handle option select, update styles
  const handleOptionSelect = (event) => {
    setIsOptionSelected(true);
    const dataValue = event.target.value;
    const siblingElement = event.target.nextSibling;
    dispatch(setCurrentAnswer(dataValue));
    clearOptionStyles();
    updateOptionStyles(siblingElement, event.target, '#A729F5');
    console.dir(event.target);
  };

  // submit question to check correct answer
  const handleQuestionSubmit = () => {
    if (currentAnswer) {
      dispatch(setIsChecking(true));
      quizzes.forEach((quiz) => {
        if (quiz.title === currentQuiz) {
          if (quiz.questions[questionNumber].answer === currentAnswer) {
            dispatch(setCorrectAnswers(currentAnswer));
          }
        }
      });
      dispatch(setIsChecking(false));
    } else {
      setIsOptionSelected(false);
    }
  };
  // onNext question event
  const handleNextQuestion = () => {
    dispatch(setIsChecking(true));
    dispatch(setCurrentAnswer(''));
    clearOptionStyles();
    if (questionNumber < getQuestionsLength(quizzes, currentQuiz) - 1) {
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
              <ProgreesBar $width={(questionNumber + 1) * 10}>
                <div></div>
              </ProgreesBar>
              {/* Options list */}
              <OptionList>
                {quiz.questions[questionNumber].options.map((option, i) => (
                  <li key={i + 'option'}>
                    <input
                      type='radio'
                      className='visually-hidden'
                      name='quizOption'
                      id={optionsLabels[i]}
                      onChange={(event) => handleOptionSelect(event)}
                      value={option}
                      checked={currentAnswer === option}
                    />
                    {/* Option Label Wrapper */}
                    <QuestionOption
                      htmlFor={optionsLabels[i]}
                      className='flex align-items-center'
                      $isDark={isDark}
                      id='optionLabelWrapper'
                    >
                      <div className='flex align-items-center'>
                        <span className='optionLabel'>{optionsLabels[i]}</span>
                        <p>{option}</p>
                      </div>
                    </QuestionOption>
                  </li>
                  //   Option end
                ))}
              </OptionList>
              {/* Option list end */}
            </QuizQuestion>
            // quiz body end
          )
      )}
      {isChecking && (
        <button className='btn' onClick={handleQuestionSubmit}>
          Submit answer
        </button>
      )}
      {!isChecking && (
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
const OptionList = styled.ul`
  list-style: none;
  & input:focus ~ label {
    outline: 3px solid var(--purple);
  }
  & input:focus ~ label .optionLabel {
    background-color: var(--purple);
    color: #fff;
  }
  & > * + * {
    margin-top: 2rem;
  }
`;
const QuestionOption = styled.label`
  justify-content: space-between;
  box-shadow: ${({ $isDark }) =>
    $isDark ? 'var(--light-box-shadow)' : 'var(--dark-box-shadow)'};
  background-color: var(--color-100);
  border-radius: var(--main-border-radius);
  padding: 1rem;
  cursor: pointer;
  & .flex {
    gap: 1.6rem;
  }
  & .optionLabel {
    display: inline-block;
    padding: 1rem 2rem;
    font-weight: 500;
    font-size: var(--fs-h3);
    border-radius: var(--main-border-radius);
    background-color: ${({ $isDark }) =>
      $isDark ? '#fff' : 'var(--color-200)'};
    color: var(--color-400);
  }
  & p {
    font-size: var(--fs-h3);
    color: var(--color-600);
  }
`;
export default Quiz;
