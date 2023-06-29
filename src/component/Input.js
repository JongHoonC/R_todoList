import React from "react";
const Input = ({ todoData, dataSet, dataValue }) => {
  const { date, text } = dataValue;

  const inputStyle = {
    width: "300px",
    height: "30px",
    fontSize: "20px",
    outline: "none",
    margin: "0 20px",
  };
  const dateStyle = {
    width: "110px",
    height: "30px",
    fontSize: "15px",
    outline: "none",
  };
  const btnStyle = {
    width: "100px",
    height: "35px",
    border: "none",
  };

  return (
    <div>
      <input
        name="date"
        style={dateStyle}
        type="date"
        onChange={todoData}
        value={date}
      />
      <input
        name="text"
        style={inputStyle}
        type="text"
        placeholder="할 일을 입력해주세요."
        onChange={todoData}
        value={text}
      />
      <button style={btnStyle} onClick={dataSet}>
        추가하기
      </button>
    </div>
  );
};
export default Input;
