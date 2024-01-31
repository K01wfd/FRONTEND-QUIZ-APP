import { styled } from 'styled-components';

function ProgressBar({ questionNumber }) {
  return (
    <ProgreesBar role='progressbar' $width={(questionNumber + 1) * 10}>
      <div></div>
    </ProgreesBar>
  );
}
const ProgreesBar = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 6.6rem;
  margin-top: 4rem;
  background-color: var(--color-100);
  border-radius: 999px;
  display: grid;
  align-items: center;
  padding-inline: 0.6rem;
  & div {
    height: 8px;
    background-color: var(--purple);
    width: ${({ $width }) => $width + '%'};
    border-radius: 100px;
    transition: width 0.2s ease;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 16rem;
    margin-bottom: 0;
  }
`;
export default ProgressBar;
