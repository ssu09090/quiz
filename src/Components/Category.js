const Category = ({ dataList, onSelected }) => {
  return (
    <div className="category">
      <h1>문제를 고르시오</h1>
      <div className="category-wrap">
        {dataList.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                onSelected(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
