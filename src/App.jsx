import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Switch from './components/Switch';
import QuizPicker from './components/QuizPicker';
import QuizTitle from './components/QuizTitle';

const Quiz = React.lazy(() => import('./components/quizBrain/Quiz'));
const Result = React.lazy(() => import('./components/Result'));
function App() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  const quizStarted = useSelector((state) => state.quiz.quizStarted);
  const quizFinished = useSelector((state) => state.quiz.quizFinished);
  return (
    <MainWrapper>
      <Header id='header'>
        {(quizStarted || quizFinished) && (
          <QuizTitle currentQuiz={currentQuiz} />
        )}
        <Switch />
      </Header>
      <main>
        {!quizStarted && !quizFinished && <QuizPicker />}
        <Suspense fallback={<QuizPicker />}>
          {quizStarted && <Quiz currentQuiz={currentQuiz} />}
          {quizFinished && <Result />}
        </Suspense>
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
  padding-block: 2.7rem;
  @media only screen and (min-width: 768px) {
    padding-top: 5.5rem;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 6rem;
  }
`;
export default App;
