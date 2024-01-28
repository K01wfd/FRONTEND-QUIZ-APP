import { styled } from 'styled-components';
import errorIcon from '../assets/images/icon-error.svg';
function ErrorDisplay({ message }) {
  return (
    <ErrorWrapper>
      <img src={errorIcon} alt='error icon' />
      <p>{message}</p>
    </ErrorWrapper>
  );
}
const ErrorWrapper = styled.div`
  margin-top: 3.4rem;
  width: 100%;
  text-align: center;
`;
export default ErrorDisplay;
