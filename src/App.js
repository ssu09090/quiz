import "./App.scss";
import { useState } from "react";
import quizData from "./Data/quizData";
import Result from "./Components/Result";
import Category from "./Components/Category";
import Quizmain from "./Components/Quizmain";

const App = () => {
  const [started, setStarted] = useState(false);
  const [category, setCategory] = useState(null);
  const handleCategory = (obj) => {
    setCategory(obj);
  };

  if (!started) {
    return (
      <div className="app-container">
        <div className="quiz-box">
          <h1 className="title">훈민정음</h1>
          <button className="start-btn" onClick={() => setStarted(true)}>
            시작하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="quiz-box">
        {!category ? (
          <Category
            dataList={quizData.categories}
            onSelected={handleCategory}
          />
        ) : (
          <Quizmain category={category} />
        )}
        <Result />
      </div>
    </div>
  );
};

export default App;
