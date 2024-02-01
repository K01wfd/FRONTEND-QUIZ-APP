import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Switch from './components/Switch';
import QuizPicker from './components/QuizPicker';
import QuizTitle from './components/QuizTitle';
import Quiz from './components/quizBrain/Quiz';
import Result from './components/Result';

function App() {
  const quizStarted = useSelector((state) => state.quiz.quizStarted);
  const quizFinished = useSelector((state) => state.quiz.quizFinished);
  return (
    <MainWrapper>
      <Header id='header'>
        {(quizStarted || quizFinished) && <QuizTitle />}
        <Switch />
      </Header>
      <main>
        {!quizStarted && !quizFinished && <QuizPicker />}

        {quizStarted && <Quiz />}
        {quizFinished && <Result />}
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
    padding-top: 5rem;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 5.5rem;
  }
`;
export default App;
