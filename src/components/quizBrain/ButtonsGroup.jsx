function ButtonsGroup({
  submitPhase,
  questionNumber,
  handleNextQuestion,
  handleQuestionSubmit,
  handleFinish,
  maxQuestionLength,
}) {
  return (
    <>
      {submitPhase && (
        <button
          className='btn'
          aria-label='submit answer button'
          onClick={handleQuestionSubmit}
        >
          Submit answer
        </button>
      )}
      {!submitPhase && questionNumber < 9 && (
        <button
          className='btn'
          aria-label='nex question button'
          onClick={handleNextQuestion}
        >
          Next question
        </button>
      )}
      {questionNumber === maxQuestionLength && !submitPhase && (
        <button
          className='btn'
          aria-label='finish quiz button'
          onClick={handleFinish}
        >
          Finish
        </button>
      )}
    </>
  );
}

export default ButtonsGroup;
