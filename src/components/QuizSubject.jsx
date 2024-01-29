import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuiz, setMainQuizStarted } from '../features/quizSlic';
import SubjectIcon from './SubjectIcon';

function QuizSubject({ icon, title, iconBgClass }) {
  const isDark = useSelector((state) => state.colorMode.isDark);
  const dispatch = useDispatch();
  const handleSubjectChange = (event) => {
    dispatch(setCurrentQuiz(event.target.value));
    dispatch(setMainQuizStarted(true));
  };
  return (
    <SubjectWrapper>
      {/* Visually-Hidden checkbox */}
      <input
        type='checkbox'
        aria-label={title + 'subject to pick'}
        className='visually-hidden'
        id={title}
        value={title}
        onChange={(event) => handleSubjectChange(event)}
      />
      <SubjectLabel
        htmlFor={title}
        className='flex align-items-center'
        $isDark={isDark}
      >
        {/* Pick subject icon */}
        <SubjectIcon icon={icon} title={title} iconBgClass={iconBgClass} />
        <h3>{title}</h3>
      </SubjectLabel>
    </SubjectWrapper>
  );
}
const SubjectLabel = styled.label`
  gap: 1.6rem;
  box-shadow: ${({ $isDark }) =>
    $isDark ? 'var(--light-box-shadow)' : 'var(--dark-box-shadow)'};
  background: var(--color-100);
  border-radius: var(--main-border-radius);
  padding: 1.4rem;
  & img {
    max-width: 2.8rem;
  }
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.01);
  }
`;
const SubjectWrapper = styled.div`
  & input:focus ~ label {
    outline: 3px solid var(--purple);
  }
`;
export default QuizSubject;
