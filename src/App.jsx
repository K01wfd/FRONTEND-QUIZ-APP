import Switch from './components/Switch';
import { styled } from 'styled-components';
import QuizPicker from './components/QuizPicker';
import { useSelector } from 'react-redux';
function App() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  return (
    <MainWrapper>
      <Header id='header'>
        <Switch />
      </Header>
      <main>
        <QuizPicker />
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
