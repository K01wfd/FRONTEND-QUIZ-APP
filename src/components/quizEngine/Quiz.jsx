import { useDispatch, useSelector } from 'react-redux';
import quizData from '../../data.json';
import { styled } from 'styled-components';
import { optionsLabels } from '../../utils/utils';
import QuizButton from '../QuizButton';
import { updateOptionStyles } from '../../utils/utils';
function Quiz({ activeQuiz }) {
  const { quizzes } = quizData;
  const isDark = useSelector((state) => state.colorMode.isDark);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const handleQuestionSubmit = () => {};

  //   handle option select, update styles
  const handleOptionSelect = (event) => {
    const dataValue = event.target.value;
    const parentLabel = event.target.parentElement;
    updateOptionStyles(parentLabel, event.target);
  };
  return (
    <Section>
      <p className='eyeBrow'>Question {questionNumber} of 10</p>

      {quizzes.map(
        (quiz) =>
          quiz.title === activeQuiz && (
            // quizBody
            <QuizQuestion key={quiz.title}>
              <h2>{quiz.questions[questionNumber].question}</h2>
              <ProgreesBar $width={questionNumber * 10}>
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
                        className='visually-hidden'
                        type='radio'
                        name={'quizOption'}
                        id={optionsLabels[i]}
                        onChange={(event) => handleOptionSelect(event)}
                        value={option}
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
      <QuizButton
        label={'Submit answer'}
        onsubmitQuestion={handleQuestionSubmit}
      />
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
