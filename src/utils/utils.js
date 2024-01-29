import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';
import quizzesData from '../data.json';

const quizzes = quizzesData.quizzes;
export const subjects = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Accessibility', icon: accessibilityIcon },
];
export const iconBgClasses = [
  'htmlIconBg',
  'cssIconBg',
  'jsIconBg',
  'accessibilityIconBg',
];
export const optionsLabels = ['A', 'B', 'C', 'D'];

export function getQuestionsLength(quizzes, currentQuiz) {
  let questionLength = 0;
  let activeQuiz = {};
  quizzes.forEach((quiz) => {
    if (quiz.title === currentQuiz) {
      activeQuiz = quiz;
      questionLength = quiz.questions.length;
    }
  });
  return { questionLength, activeQuiz };
}
export function checkAnswers(currentQuiz, answer, questionNumber) {
  let correctAnswerRef = null;
  let incorrectAnswerRef = null;
  let correctAnswer = null;
  let missedCorrectRef = null;
  quizzes.forEach((quiz) => {
    if (currentQuiz === quiz.title) {
      if (answer === quiz.questions[questionNumber].answer) {
        correctAnswerRef = document.querySelector(`[value="${answer}"]`);
        correctAnswer = answer;
      } else {
        missedCorrectRef = document.querySelector(
          `[value="${quiz.questions[questionNumber].answer}"]`
        );
        incorrectAnswerRef = document.querySelector(`[value="${answer}"]`);
      }
    }
  });
  return {
    correctAnswerRef,
    incorrectAnswerRef,
    correctAnswer,
    missedCorrectRef,
  };
}
