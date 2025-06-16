import React, { useState } from "react";
import quizData from "../Data/quizData";
import Result from "./Result";

const Quizmain = ({ category, onReset }) => {
  const filtered = quizData.quizzes.filter(
    (quiz) => quiz.category === category
  );
  const selectedQuizzes = filtered.slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuiz = selectedQuizzes[currentIndex];

  const handleChoice = (index) => {
    setSelected(index);
    setShowAnswer(true);
    if (index === currentQuiz.answerIndex) {
      setScore(score + 20);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handleFinish = () => {
    setFinished(true);
  };

  if (finished) {
    return <Result score={score} onReset={onReset} />;
  }

  return (
    <div className="quiz-main">
      <h2>{currentQuiz.question}</h2>

      {currentQuiz.choices.map((choice, idx) => (
        <button
          key={idx}
          onClick={() => handleChoice(idx)}
          disabled={showAnswer}
          className={selected === idx ? "selected" : ""}
        >
          {choice}
        </button>
      ))}

      {showAnswer && (
        <div className="explanation">
          <p>정답: {currentQuiz.answer}</p>
          {currentQuiz.explanation && <p>해설: {currentQuiz.explanation}</p>}

          {currentIndex === selectedQuizzes.length - 1 ? (
            <button onClick={handleFinish}>결과 보기</button>
          ) : (
            <button onClick={handleNext}>다음 문제</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quizmain;
