import { styled } from 'styled-components';

function QuizPicker({ setCurrentQuiz }) {
  return (
    <Section>
      <div className='welcomeDetails'>
        <h1>
          Welcome to the <strong>Frontend Quiz! </strong>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin-top: 3.2rem;
  & .welcomeDetails h1 {
    font-weight: 300;
    line-height: 1.2;
  }
  & .welcomeDetails strong {
    font-weight: 500;
  }
  & .welcomeDetails p {
    font-weight: 400;
    color: var(--color-400);
    margin-top: 1.6rem;
  }
`;
export default QuizPicker;
