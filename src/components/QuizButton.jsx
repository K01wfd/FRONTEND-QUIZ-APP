import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setMainQuizStarted } from '../features/quizSlic';

function QuizButton({ label }) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setMainQuizStarted(true));
  };
  return <Button onClick={handleButtonClick}>{label}</Button>;
}
const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-item: center;
  border-radius: var(--main-border-radius);
  background-color: var(--purple);
  color: #fff;
  width: 100%;
  border: 0;
  padding: 1.9rem 0;
  font-size: var(--fs-h3);
  font-weight: 500;
`;
export default QuizButton;
