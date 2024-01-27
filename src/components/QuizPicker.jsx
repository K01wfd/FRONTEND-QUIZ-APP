import { styled } from 'styled-components';
import QuizSubject from './QuizSubject';
import { subjects } from '../utils/utils';
import { iconBgClasses } from '../utils/utils';
function QuizPicker() {
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
  }
  & ul > * + * {
    margin-top: 1.2rem;
  }
`;
export default QuizPicker;
