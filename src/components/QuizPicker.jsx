import { styled } from 'styled-components';
import QuizSubject from './QuizSubject';
import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';
const subjects = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Javascript', icon: jsIcon },
  { name: 'Accessibility', icon: accessibilityIcon },
];
function QuizPicker({ setCurrentQuiz }) {
  return (
    <Section>
      <div className='welcomeDetails'>
        <h1>
          Welcome to the <strong>Frontend Quiz! </strong>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.name}>
            <QuizSubject
              title={subject.name}
              icon={subject.icon}
              setCurrentQuiz={setCurrentQuiz}
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
  & ul {
    list-style: none;
    margin-top: 4rem;
  }
  & ul > * + * {
    margin-top: 1.2rem;
  }
`;
export default QuizPicker;
