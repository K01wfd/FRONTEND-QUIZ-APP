import { styled } from 'styled-components';
import errorIcon from '../assets/images/icon-error.svg';
function ErrorDisplay({ message }) {
  return (
    <ErrorWrapper role='alert' className='flex align-items-center'>
      <img src={errorIcon} alt='error icon' />
      <p>{message}</p>
    </ErrorWrapper>
  );
}
const ErrorWrapper = styled.div`
  margin-top: 3.4rem;
  width: 100%;
  text-align: center;
  justify-content: center;
  gap: 0.8rem;
  @media only screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding-right: 4rem;
  }
`;
export default ErrorDisplay;
