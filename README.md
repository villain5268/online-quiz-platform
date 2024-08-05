# online-quiz-platform
 Quiz App Using React.js

![Screenshot 2024-08-01 161115](https://github.com/user-attachments/assets/7c79a7c6-250e-4ca3-aeef-2387bfb2f983)
![Screenshot 2024-08-01 161131](https://github.com/user-attachments/assets/94fb8f27-5a88-4b44-a034-0273f8e0d0bc)


 # Online Quiz Platform

Welcome to the Online Quiz Platform! This React-based application allows users to create quizzes, take quizzes, and manage questions. It includes features for adding and deleting questions, selecting quiz subjects and difficulty levels, and reviewing quiz results.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Quiz**: Add questions with multiple-choice options and specify the correct answer.
- **Take Quiz**: Select a subject and difficulty level to start a quiz with a timer.
- **Manage Questions**: View, delete, and manage questions based on subject and difficulty.
- **Result Analysis**: View quiz results including score, answered questions, and details on correctness.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/online-quiz-platform.git
    cd online-quiz-platform
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```
   Open `http://localhost:3000` in your browser to see the app in action.

## Usage

- **Creating a Quiz**:
  - Navigate to the "Create Quiz" section from the home page.
  - Select the subject and difficulty level.
  - Enter your question, options, and the correct answer.
  - Click "Add Question" to save it.

- **Taking a Quiz**:
  - Navigate to the "Take Quiz" section.
  - Select the subject and difficulty level to start.
  - Answer questions and click "Next Question" to proceed.
  - Results will be displayed after completing the quiz.

- **Managing Questions**:
  - Navigate to the "Manage Questions" section.
  - Select the subject and difficulty level to view questions.
  - Delete questions as needed.

## Folder Structure

- `src/`
  - `components/` - Contains all React components.
    - `QuizCreation.js` - Component for creating quizzes.
    - `QuizTaking.js` - Component for taking quizzes.
    - `ManageQuestions.js` - Component for managing questions.
    - `ResultAnalysis.js` - Component for displaying quiz results.
    - `Timer.js` - Component for quiz timer.
  - `data/`
    - `quizzes.json` - Sample data for quizzes.
  - `App.js` - Main application component.
  - `App.css` - Main application styles.
  - `index.js` - Entry point of the React application.

## Components

- **`QuizCreation`**: Allows users to create and add new quiz questions.
- **`QuizTaking`**: Enables users to take quizzes with a timer and option selection.
- **`ManageQuestions`**: Provides functionality to manage and delete quiz questions.
- **`ResultAnalysis`**: Displays the results of the quiz including scores and question details.
- **`Timer`**: Manages and displays the countdown timer during quizzes.

## Contributing

1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and ensure tests pass.
4. **Commit your changes** and push to your fork.
5. **Submit a pull request** to the main repository.

## Deployment

The application is deployed and accessible at Online Quiz Platform.
Link - https://benevolent-croissant-6b21c1.netlify.app/

Made with ❤️ by Deependra Singh

