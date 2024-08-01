import React, { useState } from 'react';
import Timer from './Timer';
import ResultAnalysis from './ResultAnalysis';
import './QuizTaking.css';

const QuizTaking = ({ setView, quizzes }) => {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {
    const subjectData = quizzes.subjects.find((sub) => sub.name === subject);
    const levelData = subjectData.difficultyLevels.find((lvl) => lvl.level === level);
    const currentQuestion = levelData.questions[currentQuestionIndex];

    
    setUserAnswers([...userAnswers, { question: currentQuestion.question, answer: selectedOption, correct: currentQuestion.answer }]);

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < levelData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setShowResults(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  const handleTimeUp = () => {
    setShowResults(true);
  };

  if (showResults) {
    return (
      <ResultAnalysis
        score={score}
        totalQuestions={quizzes.subjects
          .find((sub) => sub.name === subject)
          .difficultyLevels.find((lvl) => lvl.level === level).questions.length}
        userAnswers={userAnswers}
        questions={quizzes.subjects
          .find((sub) => sub.name === subject)
          .difficultyLevels.find((lvl) => lvl.level === level).questions}
      />
    );
  }

  const subjectData = quizzes.subjects.find((sub) => sub.name === subject);
  const levelData = subjectData ? subjectData.difficultyLevels.find((lvl) => lvl.level === level) : null;
  const currentQuestion = levelData ? levelData.questions[currentQuestionIndex] : null;

  return (
    <div className='main-content-take'>
      <h2 className='take-header'>Take a Quiz</h2>
      <div className='take-container'>
        {!quizStarted ? (
          <div className='take-options'>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
              {quizzes.subjects.map((sub) => (
                <option key={sub.name} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </select>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Select Difficulty</option>
              {['EASY', 'MID', 'HARD'].map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
            <button  className='take-button' onClick={handleStartQuiz} disabled={!subject || !level}>
              Start Quiz
            </button>
            <button className='back-button' onClick={() => setView('home')}>Back to Home</button>
          </div>
        ) : (
          currentQuestion && (
            <div className='take-question'>
              <Timer onTimeUp={handleTimeUp} />
              <div className='question'>{currentQuestion.question}</div>
              {currentQuestion.options.map((option, index) => (
                <div className='option' key={index}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </div>
              ))}
              <button className='next-button' onClick={handleNextQuestion}>Next Question</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuizTaking;
