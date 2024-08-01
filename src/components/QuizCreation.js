import React, { useState } from 'react';
import './QuizCreation.css';

const QuizCreation = ({ setView, addQuestion }) => {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleAddQuestion = () => {
    
    if (!subject || !level || !question || !answer || options.some(option => option.trim() === '')) {
      alert('Please fill out all fields and ensure no option is empty.');
      return;
    }

    const newQuestion = { question, options, answer };
    addQuestion(subject, level, newQuestion);
    setQuestionsList([...questionsList, newQuestion]);

    
    setSubject('');
    setLevel('');
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
  };

  return (
    <div className='main-content-container'>
      <h2 className='content-header'>Create a Quiz</h2>
      <div className='quiz-creation-container'>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React.js">React.js</option>
        </select>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="EASY">EASY</option>
          <option value="MID">MID</option>
          <option value="HARD">HARD</option>
        </select>
        <input className='question-input'
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <input className='option-input'
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}
        <input className='answer-input'
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className='add-button' onClick={handleAddQuestion}>Add Question</button>
        <button className='back-button' onClick={() => setView('home')}>Back to Home</button>

        <h3 className='question-list'>Questions List</h3>
        <ul>
          {questionsList.map((q, index) => (
            <li className='question' key={index}>
              <p className='question-text'>{q.question}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCreation;
