import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { subjects } from '../utils/utils';
import { iconBgClasses } from '../utils/utils';
import QuizSubject from './QuizSubject';
import QuizButton from './QuizButton';
function QuizPicker() {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  return (
    <Section>
      <div className='welcomeDetails'>
        <h1>
          Welcome to the <strong>Frontend Quiz! </strong>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <ul>
        {subjects.map((subject, i) => (
          <li key={subject.name}>
            <QuizSubject
              title={subject.name}
              icon={subject.icon}
              iconBgClass={iconBgClasses[i]}
            />
          </li>
        ))}
      </ul>
      {currentQuiz && <QuizButton label={`Start ${currentQuiz} quiz`} />}
    </Section>
  );
}
const Section = styled.section`
  margin-top: 3.2rem;
  & .welcomeDetails h1 {
    font-weight: 200;
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
  & ul {
    list-style: none;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
  }
  & ul > * + * {
    margin-top: 1.2rem;
  }
`;
export default QuizPicker;
