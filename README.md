# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![welcome-d-light](./screenshots/welcome-d-light.png)
![welcome-d-dark](./screenshots/welcome-d-dark.png)
![welcome-t](./screenshots/welcome-t.png)
![welcome-m](./screenshots/welcome-m.png)
![quiz-d-active](./screenshots/quiz-d-active.png)
![quiz-d-active-dark](./screenshots/quiz-d-active-dark.png)
![quiz-d-correct](./screenshots/quiz-d-correct.png)
![quiz-d-incorrect](./screenshots/quiz-d-incorrect.png)
![quiz-t-active](./screenshots/quiz-t-active.png)
![quiz-m-active](./screenshots/quiz-m-active.png)
![result-d](./screenshots/result-d.png)
![result-t](./screenshots/result-t.png)
![result-m](./screenshots/result-m.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

For this project i picked React to complete the challenge, to breakdown the logic of the quiz, i started by creating a quiz picker to pick a subject, then pass the picked quiz's subject to quizBrain component, where the quiz logic live, the quiz brain consists of 4 main components,
Question, ProgressBar, Options, Submit/Next buttons.
Finally display the quiz result based on the correct answers.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/introduction/getting-started) - Predictable state container for JavaScript apps.
- [Styled Components](https://styled-components.com/) - For styles

### Useful resources

- [React Documentation](https://react.dev/reference/react) - when you get stuck with React
- [Redux](https://redux.js.org/introduction/getting-started) - to manage a complecated React state

## Author

- Frontend Mentor - [@K01wfd](https://www.frontendmentor.io/profile/K01wfd)
