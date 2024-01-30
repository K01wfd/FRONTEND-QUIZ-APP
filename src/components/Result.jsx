import { useSelector, useDispatch } from 'react-redux';
import { setQuizFinished, emptyCorrectAnswers } from '../features/quizSlic';
import { styled } from 'styled-components';
import QuizTitle from './QuizTitle';
import { getQuestionsLength } from '../utils/utils';
import quizzesData from '../data.json';

const quizzes = quizzesData.quizzes;
function Result() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  const correctAnswers = useSelector((state) => state.quiz.correctAnswers);
  const { questionLength } = getQuestionsLength(quizzes, currentQuiz);
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(setQuizFinished(false));
    dispatch(emptyCorrectAnswers([]));
  };
  return (
    <ResultSection>
      <h1>
        Quiz completed <strong>you scored...</strong>
      </h1>
      <ResultContent className='flex flex-col align-items-center'>
        <QuizTitle currentQuiz={currentQuiz} />
        <h1 className='font-size-display'>{correctAnswers.length}</h1>
        <p>out of {questionLength}</p>
      </ResultContent>
      <button className='btn' onClick={handlePlayAgain}>
        Play Again
      </button>
    </ResultSection>
  );
}
const ResultSection = styled.section`
margin-top:6rem;
& h1{
    font-weight: 400;
    line-height: 1.2;:;
}
& strong {
    font-weight: 600;
  }
`;
const ResultContent = styled.div`
  border-radius: var(--main-border-radius);
  padding: 3.2rem;
  background-color: var(--color-100);
  margin-top: 4rem;
  text-align: center;
  margin-bottom: 1.2rem;
  & p {
    color: var(--color-400);
    font-weight: 500;
    font-size: var(--fs-body-m);
    margin-top: 1.2rem;
  }
`;
export default Result;
