const Result = ({ score, onReset }) => {
  const getMessage = () => {
    if (score === 100) return "완벽해! 당신은 진정한 훈민정음 고수!";
    if (score >= 80) return "훌륭해요! 거의 다 맞았어요!";
    if (score >= 60) return "괜찮아요! 조금만 더 집중해요!";
    if (score >= 40) return "아쉬워요! 복습 한 번 추천해요!";
    if (score >= 20) return "조금 더 공부해보면 좋겠어요!";
    return "괜찮아요! 지금부터 시작해도 늦지 않아요!";
  };

  return (
    <div className="result">
      <h2>당신의 점수는 {score}점입니다!</h2>
      <p>{getMessage()}</p>
      <button onClick={onReset}>처음으로 돌아가기</button>
    </div>
  );
};

export default Result;
