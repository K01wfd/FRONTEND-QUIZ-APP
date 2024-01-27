import React from 'react';
import SubjectIcon from './SubjectIcon';
import { subjects } from '../utils/utils';
import { iconBgClasses } from '../utils/utils';
import { styled } from 'styled-components';
function QuizTitle({ currentQuiz }) {
  return (
    <Title aria-label='quiz title' className='flex align-items-center'>
      {subjects.map((subject, i) =>
        subject.name === currentQuiz ? (
          <SubjectIcon
            key={subject.name}
            alt={subject.name}
            icon={subject.icon}
            iconBgClass={iconBgClasses[i]}
          />
        ) : null
      )}
      <h3>{currentQuiz}</h3>
    </Title>
  );
}
const Title = styled.div`
  column-gap: 2rem;
`;
export default QuizTitle;
