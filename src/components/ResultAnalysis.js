import React from 'react';
import './ResultAnalysis.css';

const ResultAnalysis = ({ score, totalQuestions, userAnswers, questions }) => {
  const answeredQuestions = userAnswers.length;
  const unattemptedQuestions = totalQuestions - answeredQuestions;
  const wrongAnswers = userAnswers.filter(answer => answer.answer !== answer.correct).length;

  
  const answeredQuestionsList = userAnswers.map((userAnswer, index) => {
    const isCorrect = userAnswer.answer === userAnswer.correct;
    return {
      ...userAnswer,
      isAnswered: true,
      isCorrect: isCorrect
    };
  });

  const unattemptedQuestionsList = questions
    .filter(question => !answeredQuestionsList.some(answered => answered.question === question.question))
    .map(question => ({
      question: question.question,
      isAnswered: false,
      isCorrect: false
    }));

  const handleBackToHome = () => {
    window.location.href = '/home'; 
  };

  return (
    <div className='main-content-result'>
      <h2 className='result-header'>Result Analysis</h2>
      <div className='result-container'>
        <p>Score: {score}/{totalQuestions}</p>
        <p>Answered Questions: {answeredQuestions}</p>
        <p>Unattempted Questions: {unattemptedQuestions}</p>
        <p>Wrong Answers: {wrongAnswers}</p>

        {answeredQuestionsList.length > 0 && (
          <div className='result-details'>
            <h3 className='result-details-header'>Details:</h3>
            <ul className='result-details-list'>
              {answeredQuestionsList.map((answer, index) => (
                <li
                  key={index}
                  style={{ color: answer.isCorrect ? 'green' : 'red' }}
                >
                  <strong>Question:</strong> {answer.question}
                  <br />
                  <strong>Your Answer:</strong> {answer.answer}
                  <br />
                  <strong>Correct Answer:</strong> {answer.correct}
                </li>
              ))}
              {unattemptedQuestionsList.length > 0 && (
                <ul>
                  {unattemptedQuestionsList.map((question, index) => (
                    <li
                      key={index}
                      style={{ color: 'gray' }}
                    >
                      <strong>Question:</strong> {question.question}
                      <br />
                      <strong>Status:</strong> Unattempted
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        )}
      </div>
      <button className='back-home-button' onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default ResultAnalysis;
