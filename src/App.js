import React, { useState } from 'react';
import QuizCreation from './components/QuizCreation';
import QuizTaking from './components/QuizTaking';
import ManageQuestions from './components/ManageQuestions';
import quizzesData from './data/quizzes.json';
import './App.css';

const App = () => {
  const [view, setView] = useState('home');
  const [quizzes, setQuizzes] = useState(quizzesData);

  const addQuestion = (subject, level, question) => {
    setQuizzes((prevQuizzes) => {
      const newQuizzes = { ...prevQuizzes };
      const subjectData = newQuizzes.subjects.find((sub) => sub.name === subject);
      const levelData = subjectData.difficultyLevels.find((lvl) => lvl.level === level);
      levelData.questions.push(question);
      return newQuizzes;
    });
  };

  const deleteQuestion = (subject, level, index) => {
    setQuizzes((prevQuizzes) => {
      const newQuizzes = { ...prevQuizzes };
      const subjectData = newQuizzes.subjects.find((sub) => sub.name === subject);
      const levelData = subjectData.difficultyLevels.find((lvl) => lvl.level === level);
      levelData.questions.splice(index, 1);
      return newQuizzes;
    });
  };

  return (
    <div className="App">
      <h2 className='header'>Online Quiz Platform</h2>
      <div className='main-content'>
      <main>
        {view === 'home' && (
          <div className='button-container'>
            <button className='create-button' onClick={() => setView('create')}>Create Quiz</button>
            <button className='take-button' onClick={() => setView('take')}>Take Quiz</button>
            <button className='manage-button' onClick={() => setView('manage')}>Manage Questions</button>
          </div>
        )}
        {view === 'create' && <QuizCreation setView={setView} addQuestion={addQuestion} />}
        {view === 'take' && <QuizTaking setView={setView} quizzes={quizzes} />}
        {view === 'manage' && <ManageQuestions setView={setView} quizzes={quizzes} deleteQuestion={deleteQuestion} />}
      </main>
      </div>
      <p className='footer'>@ Online Quiz Platform by Deependra Singh </p>
    </div>
  );
};

export default App;
