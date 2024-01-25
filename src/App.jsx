import Switch from './components/Switch';
import { styled } from 'styled-components';

function App() {
  return (
    <MainWrapper>
      <Header id='header'>
        <Switch />
      </Header>
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
  padding-top: 2.8rem;
`;
export default App;
