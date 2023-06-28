import React, { useEffect, useState } from "react";

const Input = () => {
  const [dataValue, setDataValue] = useState({
    date: "",
    text: "",
  });

  const [items, setItems] = useState([]);
  const { date, text } = dataValue;

  const todoData = (e) => {
    const { value, name } = e.target;
    setDataValue({
      ...dataValue, // 기존 dataValue 객체를 복사 한다.
      [name]: value, // name 이라는 키를 가진 값을 value로 설정한다
    });
  };

  const dataSet = () => {
    const dataValues = {
      date,
      text,
    };
    setItems(items.concat(dataValues));
    setDataValue({
      date: "",
      text: "",
    });
    console.log(dataValue);
  };
  useEffect(() => {
    console.log(items);
  }, [items]);
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
