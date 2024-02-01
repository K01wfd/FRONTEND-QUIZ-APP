import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { optionsLabels } from '../../utils/utils';
function QuizOptions({ quiz, questionNumber, currentAnswer, onOptionChange }) {
  const isDark = useSelector((state) => state.colorMode.isDark);
  return (
    <OptionList>
      {quiz.questions[questionNumber].options.map((option, i) => (
        <li key={i + 'option'}>
          <input
            type='radio'
            className='visually-hidden'
            name='quizOption'
            id={optionsLabels[i]}
            onChange={(event) => onOptionChange(event)}
            value={option}
            checked={currentAnswer === option}
          />
          {/* Option Label Wrapper */}
          <Label
            htmlFor={optionsLabels[i]}
            className='flex align-items-center'
            $isDark={isDark}
            id='optionLabelWrapper'
          >
            <div className='flex align-items-center' data-label-inner-content>
              <span className='optionLabel'>{optionsLabels[i]}</span>
              <h3>{option}</h3>
            </div>
          </Label>
        </li>
        //   Option end
      ))}
    </OptionList>
  );
}
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
    margin-top: 1.5rem;
  }
  @media only screen and (min-width: 1440px) {
    & > * + * {
      margin-top: 2.4rem;
    }
  }
`;
const Label = styled.label`
  justify-content: space-between;
  width: 100%;
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
    color: #626c7f;
  }
`;
export default QuizOptions;
