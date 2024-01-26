import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuiz } from '../features/quizSlic';

const Subject = styled.label`
  gap: 1.6rem;
  box-shadow: ${({ $isDark }) =>
    $isDark ? 'var(--light-box-shadow)' : 'var(--dark-box-shadow)'};
  background: var(--color-100);
  border-radius: var(--main-border-radius);
  padding: 1.2rem;
  & img {
    max-width: 2.8rem;
  }
`;

function QuizSubject({ icon, title, iconBgClass }) {
  const isDark = useSelector((state) => state.colorMode.isDark);
  const dispatch = useDispatch();
  const handleSubjectChange = (event) => {
    dispatch(setCurrentQuiz(event.target.value));
  };
  return (
    <Subject
      htmlFor={title}
      className='flex align-items-center'
      $isDark={isDark}
    >
      <div className={`subjectIconWrapper ${iconBgClass}`}>
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <input
        type='checkbox'
        aria-label={title + 'subject to pick'}
        className='visually-hidden'
        id={title}
        value={title}
        onChange={(event) => handleSubjectChange(event)}
      />
    </Subject>
  );
}

export default QuizSubject;
