import React, { useState } from 'react';
import './ManageQuestions.css';

const ManageQuestions = ({ setView, quizzes, deleteQuestion }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
    if (subject) {
      const subjectData = quizzes.subjects.find((sub) => sub.name === subject);
      setQuestions(subjectData.difficultyLevels.flatMap((lvl) => lvl.questions));
    } else {
      setQuestions([]);
    }
  };

  const handleLevelChange = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
    if (selectedSubject && level) {
      const subjectData = quizzes.subjects.find((sub) => sub.name === selectedSubject);
      const levelData = subjectData.difficultyLevels.find((lvl) => lvl.level === level);
      setQuestions(levelData.questions);
    }
  };

  const handleDelete = (index) => {
    if (selectedSubject && selectedLevel !== undefined) {
      deleteQuestion(selectedSubject, selectedLevel, index);
      
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  return (
    <div className='main-content-manage'>
      <h2 className='manage-header'>Manage Questions</h2>
      <div className='manage-container'>
      <select value={selectedSubject} onChange={handleSubjectChange}>
        <option className='subject' value="">Select Subject</option>
        {quizzes.subjects.map((sub) => (
          <option key={sub.name} value={sub.name}>
            {sub.name}
          </option>
        ))}
      </select>
      <select value={selectedLevel} onChange={handleLevelChange}>
        <option className='level' value="">Select Difficulty</option>
        {['EASY', 'MID', 'HARD'].map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>

      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <p>{q.question}</p>
            <button  className='delete-button' onClick={() => handleDelete(index)}>Delete Question</button>
          </li>
        ))}
      </ul>
      <button  className='back-button' onClick={() => setView('home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default ManageQuestions;
