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

const { quizzes } = quizData;

function Quiz({ currentQuiz }) {
  const isDark = useSelector((state) => state.colorMode.isDark);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const currentAnswer = useSelector((state) => state.quiz.currentAnswer);
  const isChecking = useSelector((state) => state.quiz.isChecking);
  const dispatch = useDispatch();

  //   handle option select, update styles
  const handleOptionSelect = (event) => {
    const dataValue = event.target.value;
    const parentLabel = event.target.parentElement;
    dispatch(setCurrentAnswer(dataValue));
    clearOptionStyles();
    updateOptionStyles(parentLabel, event.target);
  };

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
    }
  };
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
                  // Option
                  <li key={i + 'option'}>
                    <QuestionOption
                      htmlFor={optionsLabels[i]}
                      className='flex align-items-center'
                      $isDark={isDark}
                      id='optionLabelWrapper'
                    >
                      <span className='optionLabel'>{optionsLabels[i]}</span>
                      <p>{option}</p>
                      <input
                        type='radio'
                        name='quizOption'
                        id={optionsLabels[i]}
                        onChange={(event) => handleOptionSelect(event)}
                        value={option}
                        checked={currentAnswer === option}
                      />
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
      <ErrorDisplay message={'hello'} />
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
  & > * + * {
    margin-top: 2rem;
  }
`;
const QuestionOption = styled.label`
  gap: 1.6rem;
  box-shadow: ${({ $isDark }) =>
    $isDark ? 'var(--light-box-shadow)' : 'var(--dark-box-shadow)'};
  background-color: var(--color-100);
  border-radius: var(--main-border-radius);
  padding: 1rem;
  cursor: pointer;
  &:focus {
    outline: 1px solid red;
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
