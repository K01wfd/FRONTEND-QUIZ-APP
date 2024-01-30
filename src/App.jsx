import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Switch from './components/Switch';
import QuizPicker from './components/QuizPicker';
import QuizTitle from './components/QuizTitle';
import Quiz from './components/quizBrain/Quiz';
function App() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  const mainQuizStarted = useSelector((state) => state.quiz.mainQuizStarted);
  const correctAnswers = useSelector((state) => state.quiz.correctAnswers);
  console.log(correctAnswers);
  return (
    <MainWrapper>
      <Header id='header'>
        {mainQuizStarted && <QuizTitle currentQuiz={currentQuiz} />}
        <Switch />
      </Header>
      <main>
        {!mainQuizStarted && <QuizPicker />}
        {mainQuizStarted && <Quiz currentQuiz={currentQuiz} />}
      </main>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 2.4rem;
  @media only screen and (min-width: 768px) {
    padding-inline: 6.4rem;
  }
  @media only screen and (min-width: 1440px) {
    padding-inline: 14.4rem;
  }
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding-block: 1.6rem;
`;
export default App;
