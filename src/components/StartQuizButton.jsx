import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMainQuizStarted } from '../features/quizSlic';

function QuizButton({ label }) {
  const mainQuizStarted = useSelector((state) => state.quiz.mainQuizStarted);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (!mainQuizStarted) {
      dispatch(setMainQuizStarted(true));
    }
  };

  return <Button onClick={() => handleButtonClick()}>{label}</Button>;
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
  padding: 1.6rem 0;
  font-size: var(--fs-h3);
  font-weight: 500;
  &:active {
    transform: scale(0.97);
  }
`;
export default QuizButton;
