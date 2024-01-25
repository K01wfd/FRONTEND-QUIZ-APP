import { useState } from 'react';
import Switch from './components/Switch';
import { styled } from 'styled-components';
import QuizPicker from './components/QuizPicker';

function App() {
  const [currentQuiz, setCurrentQuiz] = useState('');

  return (
    <MainWrapper>
      <Header id='header'>
        <Switch />
      </Header>
      <main>
        {!currentQuiz && <QuizPicker setCurrentQuiz={setCurrentQuiz} />}
      </main>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  max-width: 1440;
  margin-inline: auto;
  padding-inline: 2.4rem;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding-block: 1.6rem;
`;
export default App;
