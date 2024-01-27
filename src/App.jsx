import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Switch from './components/Switch';
import QuizPicker from './components/QuizPicker';
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
