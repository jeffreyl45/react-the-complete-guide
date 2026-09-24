// show active question and switch to next question after its been answered
import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import QuestionTimer from './QuestionTimer.jsx'
import quizCompleteImg from '../assets/quiz-complete.png'
export default function Quiz() {
  // array of questions
  // index of currently displayed question
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;


  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setAnswerState('answered');
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
            setAnswerState('correct');
        } else {
            setAnswerState('wrong');
        }

        setTimeout( () => {
            setAnswerState('')
        }, 2000)
    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => {
    () => handleSelectAnswer(null)
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return <div id="summary">
        <img src = {quizCompleteImg} alt="quiz complete trophy"/>
        <h2>Quiz completed!</h2>
    </div>
  };
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  // math random returns value between 0 and 1
  shuffledAnswers.sort(() => Math.random() - 0.5);

  // handleSelectAnswer null is called when the timer expires
  // add key prop to Question Timer so timer can get reset (new object was created with the key so new timer prop is required)
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
        key={activeQuestionIndex}
        timeout={10000} onTimeout={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
